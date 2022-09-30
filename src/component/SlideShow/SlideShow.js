import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../CustomButton";

function SlideShow(props) {
  return (
    <div className="img-fluid position-relative">
      <video autoPlay muted className="w-100">
        <source src={props.video} />
      </video>
      <Container className="container-md">
        <div
          className="position-absolute top-0 d-flex align-items-center h-100"
          style={{ width: "40%" }}
        >
          <div className="w-100 text-light">
            <img src={props.image} alt="logo" className="w-100" />
            <p className="mt-3" style={{ fontSize: "1.2vw" }}>
              {props.text}
            </p>
            <div className="mt-3">
              <CustomButton color="light">
                <FontAwesomeIcon icon={faPlay} />
                <span className="ms-3">Play</span>
              </CustomButton>
              <CustomButton color="dark">
                <FontAwesomeIcon icon={faExclamationCircle} />
                <span className="ms-3">Orther Information</span>
              </CustomButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SlideShow;
