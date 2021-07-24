import React , {useState} from 'react';
// import Carousel from '../components/Carousel/CarouselElements';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {  homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';


const Home = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle = {toggle} />
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services ></Services>
            <InfoSection {...homeObjThree}/>
            {/* <Carousel></Carousel> */}
            <Footer></Footer>
        </>
    );
};

export default Home
