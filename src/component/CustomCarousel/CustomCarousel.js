import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CustomCarousel(props) {
  const carouselImages = props.carouselImages;

  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light">
        <p>{props.type}</p>
      </Container>

      <Carousel variant="light" pause="hover" indicators={false}>
        {carouselImages.map((carouselImage, index) => (
          <Carousel.Item key={index}>
            <Container fluid="md" className="d-flex">
              <Row>
                {carouselImage.map((image, index) => (
                  <Col key={index}>
                    <CustomCard img={image} />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
