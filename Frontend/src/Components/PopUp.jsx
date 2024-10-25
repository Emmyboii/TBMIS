import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import './Apply.css'
import { FaTimes } from "react-icons/fa";
import BG from '../Images/last2.jpg';

const PopUp = () => {
    const [modal, setModal] = useState(false)

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    const onClose = () => {
        setModal(false)
    }

    useEffect(() => {
        if (!localStorage.getItem("seenPopUp")) {
            setTimeout(() => {
                setModal(true);
                localStorage.setItem("seenPopUp", true);
            }, 5700)
        }
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        whatsappNumber: '',
        email: '',
        highestEducation: '',
        availableProgrammes: '',
    });

    const [status, setStatus] = useState({ message: '', type: '' });
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
            const response = await axios.post('http://localhost:5001/submit-form', submissionData);
            if (response.status === 200) {
                setStatus({ message: 'Registration Successful!', type: 'success' });
                // Clear form after successful submission
                setFormData({
                    firstName: '',
                    lastName: '',
                    whatsappNumber: '',
                    email: '',
                    highestEducation: '',
                    availableProgrammes: '',
                });
            } else {
                setStatus({ message: 'Failed to submit your application. Please try again.', type: 'error' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ message: 'Error submitting application. Please try again later.', type: 'error' });
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    return modal ? (
        <div ref={modalRef} onClick={closeModal} className='fixed z-50 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center duration-300'>
            <div className='flex flex-col justify-center xl:w-[70%] mp:w-[80%] w-[65%] h-[50vh]'>
                <button onClick={onClose} className='place-self-end cursor-pointer text-white'><FaTimes size={30} /></button>
                <div className="shadow-md shadow-black/50 grid mp:grid-cols-5">
                    <img src={BG} className='mp:col-span-3 z-30 mp:h-[84vh]' alt="" />
                    <form onSubmit={handleSubmit} className='shadow-gray-400 mp:col-span-2 shadow-md py-4 bg-white flex flex-col justify-center'>
                        <div className="mx-5 mb-4">
                            <input
                                className='py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder='John'
                            />
                            {validationErrors.firstName && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.firstName}</p>}
                        </div>
                        <div className="mx-5 mb-4">
                            <input
                                className='py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder='Joe'
                            />
                            {validationErrors.lastName && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.lastName}</p>}
                        </div>
                        <div className="mx-5 mb-4">
                            <input
                                className='py-[10px] pl-[15px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
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
                        <div className="mx-5 mb-4">
                            <input
                                className='py-[10px] pl-[15px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='johndoe@email.com'
                            />
                            {validationErrors.email && <p className="text-red-500 text-[15.3px] mo:text-[17px] font-normal">{validationErrors.email}</p>}
                        </div>
                        <div className="mx-5 mb-4">
                            <select
                                className='py-[10px] pl-[15px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
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
                        <div className="mx-5 mb-4">
                            <select
                                className='py-[10px] pl-[15px] pr-[30px] text-[18px] w-full rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                name="availableProgrammes"
                                value={formData.availableProgrammes}
                                onChange={handleChange}
                                required
                            >
                                <option className="text-[18px]" value="">Available Programme(s)</option>
                                <optgroup className="text-[22px]" label="Associate Degree's (B.Sc - AD)">
                                    <option className="text-[18px] font-[500]" value="Social Media Management">
                                        Social Media Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Customer Service">
                                        Customer Service
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resource Management">
                                        Human Resource Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Management">
                                        Information Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting">
                                        Accounting
                                    </option>
                                </optgroup>
                                <optgroup className="text-[22px]" label="Executive MBA Program">
                                    <option className="text-[18px] font-[500]" value="Business Management">
                                        Business Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Marketing">
                                        Marketing
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Human Resources">
                                        Human Resources
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Risk Management">
                                        Risk Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Supply Chain Management">
                                        Supply Chain Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Project Management">
                                        Project Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Information Technology">
                                        Information Technology
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Sales Management">
                                        Sales Management
                                    </option>
                                    <option className="text-[18px] font-[500]" value="Accounting">
                                        Accounting
                                    </option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="mx-5 mt-2 sw:mt-0">
                            <button
                                type="submit"
                                className='py-[10px] w-[100%] rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white button-transition'
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
                        {status.message && (
                            <div className={`mt-4 sw:text-[20px] font-medium text-center text-white mx-5 rounded-xl py-3 ${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div >
        </div >
    ) : "";
}

export default PopUp