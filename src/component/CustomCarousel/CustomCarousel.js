import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";

function CustomCarousel(props) {
  const carouselImages = props.carouselImages;

  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light">
        <p>{props.type}</p>
      </Container>

      <Carousel variant="light" pause="hover">
        {carouselImages.map((carouselImage, index) => (
          <Carousel.Item key={index}>
            <Container fluid="md" className="d-flex">
              {carouselImage.map((image, index) => (
                <CustomCard img={image} key={index} />
              ))}
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
