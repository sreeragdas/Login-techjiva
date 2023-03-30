
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar"
import './styles.scss';
export const Dashboard: React.FC = () => {
    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>dashboard</h1>
                <Footer />
            </div>

        </div>
    )
}