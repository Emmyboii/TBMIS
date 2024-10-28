import { React, useEffect, useState } from 'react'
import AOS from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import './Apply.css'
import Background1 from "../Images/background2.jpg";
import { RiArrowUpWideLine } from "react-icons/ri";
import Background2 from "../Images/programBG.jpg";
import Background3 from "../Images/BG2.jpg";
import { BsWhatsapp } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homeindex = () => {


    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY > 650) {
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll", setFixed)

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-out-cubic"
        });
    }, []);


    var settings = {
        infinite: true,
        fade: true,
        speed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5700,
    };

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
    const [showModal, setShowModal] = useState(false); // For modal feedback

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
                setShowModal(true); // Show modal on success
                showToast('success', 'Registration Successful!')
                console.log(response.data);
            } else {
                setStatus({ message: 'Failed to submit your application. Please try again.', type: 'error' });
                showToast('error', 'Failed to submit the form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ message: 'Error submitting application. Please try again later.', type: 'error' });
            showToast('error', 'Error submitting form.')
        } finally {
            setLoading(false); // Hide loading spinner
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setShowModal(false);
        }, 4300)
    }, []);

    const modal = () => {
        setShowModal(false)
    }

    // Toast function to show small notifications
    const showToast = (type, message) => {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerText = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 500);
        }, 3000);
    };

    return (
        <div className='w-full h-[100%] bg-blue-700 outline-none border-none'>
            <div>
                <Slider {...settings} >
                    <img src={Background1} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover opacity-40' />
                    <img src={Background2} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover lg:object-fill opacity-40' />
                    <img src={Background3} alt='' className='w-full max-h-dvh min-h-[70dvh] object-cover opacity-40' />
                </Slider>
            </div>
            <div className='flex'>
                <div data-aos="fade-down" data-aos-delay="200" className='aos-init absolute top-[32%] flex flex-col justify-center sp:top-[37%] mp:top-[47%] md:top-[37%] mr:top-[35%] ma:top-[50%] mj:top-[35%] mk:top-[50%] mv:top-[32%] mw:top-[45%] lg:top-[38%] 2la:top-[48%] xl:top-[44%] 2lq:top-[50%] left-[4%]'>
                    <h1 className=' lg:text-[60px] md:text-[55px] leading-[56px] sv:text-[49px] text-[48px] se:text-[57px] sp:text-[47px] mv:text-[60px] font-bold text-white'>
                        Accelerate <br className='sp:hidden block' /> Your Future.
                    </h1>
                    <p className='pt-8 lg:text-[26px] mv:text-[26px] sm:text-[23px] sv:text-[21px] text-[19px] xl:mr-[550px] 2la:mr-[450px] 2ll:mr-[800px] ms:mr-[400px] md:mr-[250px] sm:mr-[120px] sx:mr-[80px] font-semibold text-white'>
                        Earn globally recognized degrees, diplomas and certificates with unbeatable scholarship.
                    </p>
                    <a href='#programs'>
                        <button data-aos="fade-up" data-aos-delay="600" className='aos-init absolute bg-blue-500 mt-5 text-white py-3 px-6 rounded-lg outline-none active:bg-blue-300'>
                            Start your Journey
                        </button>
                    </a>
                </div>
                <button onClick={() => window.scrollTo(0, 0)} title='Scroll To Top' data-aos="slide-right" data-aos-delay="100" className={fix ? 'aos-init bg-gray-500  p-1 fixed rounded-full hover:bg-gray-600 text-white top-[90%] left-[-2%] z-40 mx-11' : 'hidden'}>
                    <RiArrowUpWideLine size={40} className='' />
                </button>

                <a href="https://wa.me/message/ZDO76R45EDU2K1" rel='noreferrer' target='_blank' title='CHAT WITH AN ADVISOR' className='bg-green-600 hover:scale-95 duration-500 fixed text-white text-center top-[90%] right-[3%] px-3 py-2 rounded-[15px] z-40'>
                    <div className='hover:scale-95 text-[20px] flex items-center justify-center font-semibold duration-500'>
                        <BsWhatsapp className='text-[30px] text-white' />
                    </div>
                </a>

                <div className='xl:block hidden absolute top-[21%] 2lq:top-[18%] left-[60%]'>
                    <form onSubmit={handleSubmit} className="w-[80%] ms:w-[80%] mx-5 bg-white py-[24px] flex flex-col shadow-md shadow-black/50">
                        <p className='font-serif font-semibold text-orange-600 relative text-[23px] pb-1 sx:text-[25.5px] px-1 sy:text-[30px] text-center leading-[40px] sx:leading-[40px]'>
                            APPLY NOW FOR A SCHOLARSHIP
                        </p>
                        <div className='relative'>
                            <div className="mx-5 mb-4 mt-2">
                                <input
                                    className='py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    placeholder='John'
                                />
                                {validationErrors.name && <p className="text-red-500 text-xl font-medium">{validationErrors.name}</p>}
                            </div>
                            <div className="mx-5 mb-4 mt-2">
                                <input
                                    className='py-[10px] w-full pl-[15px] rounded-lg bg-transparent border-black border-[1px] focus:border-orange-400 focus:shadow focus:shadow-orange-400 focus:border-2 outline-none placeholder:text-[17px]'
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    placeholder='Joe'
                                />
                                {validationErrors.lastName && <p className="text-red-500 text-xl font-medium">{validationErrors.lastName}</p>}
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
                                    <p className="text-red-500 text-xl font-medium">{validationErrors.whatsappNumber}</p>
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
                                {validationErrors.email && <p className="text-red-500 text-xl font-medium">{validationErrors.email}</p>}
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
                        </div>
                        {showModal && (
                            <div onClick={modal} className="modal">
                                <div className="modal-content">
                                    <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                                    <h2>{status.type === 'success' ? 'Success!' : 'Error!'}</h2>
                                    <p>{status.message}</p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <div className='bg-gradient-to-r from-blue-600 from-50% to-orange-400 lg:py-[57px] mr:py-[50px] md:py-[42px] sa:py-[35px] py-[14px] text-center justify-center flex'>
                <p className='lg:text-[25px] mr:text-[22px] md:text-[20px] sm:text-[17px] text-[15px] font-semibold sm:mx-[40px] md:mx-[55px] mx-[2px] sa:mx-[10px] text-white'>
                    Unlock your potential with our innovative online programs.
                    We offer a unique pathway to academic excellence. With our flexible online platform and world-class faculty,
                    you can achieve your educational goals without compromising your commitments.
                </p>
            </div>
        </div>

    )
}

export default Homeindex