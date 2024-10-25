import React, { useState } from 'react';
import axios from 'axios';
import './Apply.css'


const Apply = () => {

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
                                placeholder='Joe'
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
                        {status.message && (
                            <div className={`mt-4 text-[20px] font-medium text-center text-white mx-5 rounded-xl py-3 ${status.type === 'error' ? 'bg-red-500' : 'bg-green-500'}`}>
                                {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Apply;