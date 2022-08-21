import Carousel from "react-bootstrap/Carousel";
import firstSlide from "../../../images/Slider/carousel-1.jpg";
import secondSlide from "../../../images/Slider/carousel-2.jpg";
import thirdSlide from "../../../images/Slider/carousel-3.jpg";
import forthSlide from "../../../images/Slider/carousel-4.jpg";
import fifthSlide from "../../../images/Slider/carousel-5.jpg";
import sixthSlide from "../../../images/Slider/carousel-6.jpg";

import './style.scss';

const Slider: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={firstSlide} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={secondSlide} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={thirdSlide} alt="Third slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={forthSlide} alt="Forth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={fifthSlide} alt="Fifth slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={sixthSlide} alt="Sexth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
