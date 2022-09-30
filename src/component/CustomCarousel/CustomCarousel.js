import { images } from "../../asset";
import Carousel from "react-bootstrap/Carousel";
import CustomCard from "../CustomCard/CustomCard";
import { Container } from "react-bootstrap";

function CustomCarousel() {
  return (
    <div className="mb-5">
      <Container fluid="md" className="text-light">
        <p>New Bonus</p>
      </Container>
      <Carousel variant="light" pause="hover">
        <Carousel.Item>
          <Container fluid="md" className="d-flex">
            <CustomCard img={images.CyberPunk} />
            <CustomCard img={images.CuocGiaiCuuHangThaiLan} />
            <CustomCard img={images.Dahmer} />
            <CustomCard img={images.KomiKoTheGiaoTiep} />
            <CustomCard img={images.ThanhMaTuy} />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid="md" className="d-flex">
            <CustomCard img={images.CyberPunk} />
            <CustomCard img={images.CuocGiaiCuuHangThaiLan} />
            <CustomCard img={images.Dahmer} />
            <CustomCard img={images.KomiKoTheGiaoTiep} />
            <CustomCard img={images.ThanhMaTuy} />
          </Container>
        </Carousel.Item>
        <Carousel.Item>
          <Container fluid="md" className="d-flex">
            <CustomCard img={images.CyberPunk} />
            <CustomCard img={images.CuocGiaiCuuHangThaiLan} />
            <CustomCard img={images.Dahmer} />
            <CustomCard img={images.KomiKoTheGiaoTiep} />
            <CustomCard img={images.ThanhMaTuy} />
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
