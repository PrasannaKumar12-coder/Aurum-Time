import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Category from '../CategorySection/CategorySection';
import BrandsSection from '../BrandsSection/BrandsSection';
import SupportPage from '../SupportPage/SupportPage';
import Footer from '../Footer/Footer';

import './RenderHome.css'

const RenderHome = () => {
    return (
        <>

            <Navbar />
            <section id="home"><Home /></section>
            <section id="whychooseus"><WhyChooseUs /></section>
            <section id="category"><Category /></section>
            <section id="brands"><BrandsSection /></section>
            <section id="support"><SupportPage /></section>
            <Footer />
        </>


    )
}
export default RenderHome