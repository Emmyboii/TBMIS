import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Apply.css'
import { FaTimes } from "react-icons/fa";
import BG from '../Images/last2.jpg';

const PopUp = () => {
    const [modal, setModal] = useState(false)

    const modalRef = useRef();

    const navigate = useNavigate();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const onClose = () => {
        setModal(false)
    }

    useEffect(() => {
        setTimeout(() => {
            setModal(true);
        }, 5700)
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        whatsappNumber: '',
        email: '',
        highestEducation: '',
        availableProgrammes: '',
    });

    const [loading, setLoading] = useState(false); // Loading indicator state
    const [validationErrors, setValidationErrors] = useState({}); // Validation errors

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        // Clear the validation error when the user starts typing
        setValidationErrors((prev) => ({ ...prev, [name]: '' }));
    };

    // Form validation
    const validateForm = () => {
        const phoneNumberRegex = /^\d{10,}$/; // WhatsApp number must be at least 10 digits
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let errors = {};

        if (!formData.firstName) {
            errors.firstName = 'Full name is required.';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last name is required.';
        }
        if (!phoneNumberRegex.test(formData.whatsappNumber)) {
            errors.whatsappNumber = 'Please enter a valid WhatsApp number.';
        }

        if (!emailRegex.test(formData.email)) {
            errors.email = 'Please enter a valid email address.';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form before submitting
        if (!validateForm()) {
            return;
        }

        setLoading(true); // Show loading spinner

        const submissionData = {
            '3_first': formData.firstName,
            '3_last': formData.lastName,
            '8': formData.whatsappNumber,
            '4': formData.email,
            '6': formData.highestEducation,
            '7': formData.availableProgrammes,
        };

        try {
            const response = await axios.post('https://the-jinja-8611fed5dc90.herokuapp.com/api/v1/submit-form/', submissionData);
            if (response.status === 200) {
                // setStatus({ message: 'Registration Successful!', type: 'success' });
                // Clear form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    whatsappNumber: '',
                    email: '',
                    highestEducation: '',
                    availableProgrammes: '',
                });
                console.log(response.data);
            } else {
                console.log(response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoading(false); // Hide loading spinner
        }
        navigate('/thank_you')
    };


    return modal ? (
        <div ref={modalRef} onClick={closeModal} className='fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-300'>
            <div className='flex flex-col justify-center xl:w-[70%] se:w-[80%] landscape:w-[80%] w-[65%]'>
                <button onClick={onClose} className='place-self-end cursor-pointer text-white'><FaTimes size={30} /></button>
                <div className="shadow-md shadow-black/50 grid se:grid-cols-5">
                    <img src={BG} className='se:col-span-3 z-30 se:h-[450px] mp:h-[500px] md:h-[640px] landscape:h-[330px] landscape:md:h-[350px] landscape:mm:h-[430px] landscape:xl:h-[526px] w-full' alt="" />
                    <form onSubmit={handleSubmit} className='shadow-gray-400 se:col-span-2 shadow-md se:py-2 py-2 bg-white flex flex-col justify-center'>
                        <div className="mx-5 mb-2 landscape:mb-2 landscape:mm:mb-4 se:mb-4">
                            <input
                                className='py-[7px] landscape:py-[5.2px] se:py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder='John'
                            />
                            {validationErrors.firstName && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.firstName}</p>}
                        </div>
                        <div className="mx-5 mb-2 landscape:mb-[5.5px] landscape:mm:mb-4 se:mb-4">
                            <input
                                className='py-[7px] landscape:py-[5.2px] landscape:mm:py-[8px] se:py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder='Doe'
                            />
                            {validationErrors.lastName && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.lastName}</p>}
                        </div>
                        <div className="mx-5 mb-2 landscape:mb-[5.5px] landscape:mm:mb-4 se:mb-4">
                            <input
                                className='py-[7px] landscape:py-[5.2px] landscape:mm:py-[8px] se:py-[10px] pl-[15px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="tel"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                required
                                placeholder='08012398765'
                            />
                            {validationErrors.whatsappNumber && (
                                <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.whatsappNumber}</p>
                            )}
                        </div>
                        <div className="mx-5 mb-2 landscape:mb-[5.5px] landscape:mm:mb-4 se:mb-4">
                            <input
                                className='py-[7px] landscape:py-[5.2px] landscape:mm:py-[8px] se:py-[10px] pl-[15px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='johndoe@email.com'
                            />
                            {validationErrors.email && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.email}</p>}
                        </div>
                        <div className="mx-5 mb-2 landscape:mb-[5.5px] landscape:mm:mb-4 se:mb-4">
                            <select
                                className='py-[7px] landscape:py-[5.2px] landscape:mm:py-[8px] se:py-[10px] pl-[15px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                name="highestEducation"
                                value={formData.highestEducation}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Highest Education Level</option>
                                <option className="text-[18px] font-semibold" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                <option className="text-[18px] font-semibold" value="ond">Ordinary National Diploma(OND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Higher National Diploma(HND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Bachelor of Sciences(BSc)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Postgraduate Diploma(PGD)</option>
                                <option className="text-[18px] font-semibold" value="masters">Masters Degree</option>
                            </select>
                        </div>
                        <div className="mx-5 mb-2 landscape:mb-[5.5px] landscape:mm:mb-4 se:mb-4">
                            <select
                                className='py-[7px] landscape:py-[5.2px] landscape:mm:py-[8px] se:py-[10px] pl-[15px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                name="availableProgrammes"
                                value={formData.availableProgrammes}
                                onChange={handleChange}
                                required
                            >
                                <option className="text-[18px]" value="">Available Programme(s)</option>
                                <optgroup className="text-[22px]" label="Associate Degree's (B.Sc - AD)">
                                    <option className="text-[18px] font-[500]" value="Social Media Management(B.Sc - AD)">
                                        Social Media Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Customer Service(B.Sc - AD)">
                                        Customer Service
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resource Management(B.Sc - AD)">
                                        Human Resource Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management(B.Sc - AD)">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management(B.Sc - AD)">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management(B.Sc - AD)">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Management(B.Sc - AD)">
                                        Information Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management(B.Sc - AD)">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing(B.Sc - AD)">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting(B.Sc - AD)">
                                        Accounting
                                    </option>
                                </optgroup>
                                <optgroup className="text-[22px]" label="Executive MBA Program">
                                    <option className="text-[18px] font-[500]" value="Business Management (MBA)">
                                        Business Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing (MBA)">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resources (MBA)">
                                        Human Resources
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management (MBA)">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management (MBA)">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management (MBA)">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Technology (MBA)">
                                        Information Technology
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management (MBA)">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting (MBA)">
                                        Accounting
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="mx-5 sw:mt-0">
                            <button
                                type="submit"
                                className='py-[7px] landscape:py-[6px] landscape:mm:py-[8px] se:py-[10px] w-[100%] rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white button-transition'
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <div className="spinner"></div> Submitting...
                                    </>
                                ) : (
                                    'Register Now'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    ) : "";
}

export default PopUp