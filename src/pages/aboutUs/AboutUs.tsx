
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar"
import './styles.scss';
export const AboutUs: React.FC = () => {
    return (<div>
        <Navbar />
        <div className="about-us">About Us</div>
        <Footer />
    </div>)
}