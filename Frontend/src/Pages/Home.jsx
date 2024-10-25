import React from 'react'
import Navbar from "../Components/Navbar";
import Homeindex from '../Components/Homeindex'
import Footer from "../Components/Footer";
import ContactUs from '../Components/ContactUs';
import Benefit from '../Components/Benefits';
import AboutUs from '../Components/AboutUs';
import Apply from "../Components/Apply";
import Program from '../Components/Program';
import Quote from '../Components/Quote';
import Accreditation from '../Components/Accreditation';
import Testimonial from '../Components/Testimonial';
import Start from '../Components/Start';
import Partnership from '../Components/Partnership';
import PopUp from '../Components/PopUp';

const Home = () => {

    return (
        <div className='w-full'>
            <Navbar />          {/* Done */}
            <Homeindex />       {/* Done */}
            <PopUp />           {/* Done */}
            <AboutUs />         {/* Done */}
            <Quote />           {/* Done */}
            <Program />         {/* Done */}
            <Benefit />         {/* Done */}
            <Start />           {/* Done */}
            <Testimonial />     {/* Done */}
            <Apply />           {/* Done */}
            <ContactUs />       {/* Done */}
            <Accreditation />   {/* Done */}
            <Partnership />     {/* Done */}
            <Footer />          {/* Done */}
        </div>
    )
}

export default Home