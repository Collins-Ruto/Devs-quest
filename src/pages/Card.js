import CardAbout from "../components/CardAbout";
import CardFooter from "../components/CardFooter";
import CardInfo from "../components/CardInfo";
import MainNavigation from "../components/Navigation";
import '../styles/Card.css'

export default function CardPage() {
    return (
      <div>
        <MainNavigation/>
        <div className="cardContainer">
        <br/>
        <div className="cardMain">
        <CardInfo />
        <CardAbout />
        <CardFooter />
        </div>
      </div>
      </div>
      
    );
}