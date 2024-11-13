import React, { useState } from 'react';
import axios from 'axios';
import './Apply.css'
import { useNavigate } from 'react-router-dom';


const Apply = () => {

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

    const navigate = useNavigate();

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
            errors.firstName = 'First name is required.';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last name is required.';
        }

        if (!phoneNumberRegex.test(formData.whatsappNumber)) {
            errors.whatsappNumber = 'Please enter a valid WhatsApp number (at least 10 digits).';
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


    return (
        <div>
            <div id="apply" className='w-full md:py-10 py-10 bg-gray-300 text-black'>
                <div className='flex flex-col items-center justify-center'>
                    <form onSubmit={handleSubmit} className="w-[90%] ms:w-[50%] mx-5 bg-white py-[35px] shadow-md shadow-black/50">
                        <p className='font-serif font-semibold text-orange-600 text-[23px] sx:text-[25.5px] px-1 sy:text-[30px] text-center leading-[40px] sx:leading-[50px]'>
                            APPLY NOW FOR A SCHOLARSHIP
                        </p><br />
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="firstName">FIRST NAME</label><br />
                            <input
                                className='py-[12px] w-full pl-[15px] rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder='John'
                            />
                            {validationErrors.firstName && <p className="text-red-500 text-xl font-medium">{validationErrors.firstName}</p>}
                        </div>
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[17px] sv:text-[20px] mo:text-[21px] font-semibold" htmlFor="firstName">LAST NAME</label><br />
                            <input
                                className='py-[12px] w-full pl-[15px] rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder='Doe'
                            />
                            {validationErrors.lastName && <p className="text-red-500 text-xl font-medium">{validationErrors.lastName}</p>}
                        </div>
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="phoneNumber">WHATSAPP NUMBER</label><br />
                            <input
                                className='py-[12px] pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                type="tel"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                required
                                placeholder='08012398765'
                            />
                            {validationErrors.whatsappNumber && (
                                <p className="text-red-500 text-xl font-medium">{validationErrors.whatsappNumber}</p>
                            )}
                        </div>
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[17px] sv:text-[19px] ms:text-[18px] mo:text-[21px] font-semibold" htmlFor="email">EMAIL ADDRESS</label><br />
                            <input
                                className='py-[12px] pl-[15px] w-full rounded-lg text-[18px] border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder='johndoe@email.com'
                            />
                            {validationErrors.email && <p className="text-red-500 text-xl font-medium">{validationErrors.email}</p>}
                        </div>
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[17px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">HIGHEST EDUCATION LEVEL</label><br />
                            <select
                                className='py-[12px] pl-[15px] w-full text-[18px] rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
                                name="highestEducation"
                                value={formData.highestEducation}
                                onChange={handleChange}
                                required
                            >
                                <option value=""></option>
                                <option className="text-[18px] font-semibold" value="ssce">Senior Secondary School Certificate Examination(SSCE)</option>
                                <option className="text-[18px] font-semibold" value="ond">Ordinary National Diploma(OND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Higher National Diploma(HND)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Bachelor of Sciences(BSc)</option>
                                <option className="text-[18px] font-semibold" value="hnd">Postgraduate Diploma(PGD)</option>
                                <option className="text-[18px] font-semibold" value="masters">Masters Degree</option>
                            </select>
                        </div>
                        <div className="mx-5 mt-2 mb-3">
                            <label className="text-[18.5px] sv:text-[19px] mo:text-[21px] font-semibold" htmlFor="educationLvl">AVAILBABLE PROGRAMME(S)</label><br />
                            <select
                                className='py-[12px] mt-2 mb-3 pl-[15px] text-[18px] w-full rounded-lg border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none'
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
                        <div className="mx-5 mt-1">
                            <button
                                type="submit"
                                className='py-[15px] w-[100%] rounded-xl font-semibold sw:text-[24px] bg-blue-500 text-white button-transition'
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
            </div>
        </div>
    );
};

export default Apply;