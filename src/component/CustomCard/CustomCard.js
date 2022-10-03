import { useState } from "react";
import Card from "react-bootstrap/Card";
import { videos } from "../../asset";
import ModalBox from "../ModalBox";

function CustomCard(props) {
  const [hide, setHide] = useState(true);

  const mouseOver = () => {
    setHide(false);
  };

  const mouseLeave = () => {
    setHide(true);
  };

  return (
    <div onMouseOver={() => mouseOver()} onMouseLeave={() => mouseLeave()}>
      <ModalBox>
        <Card
          style={{ border: "dark" }}
          className="card border-dark bg-dark text-light"
        >
          {hide && <Card.Img variant="top" src={props.img} role="button" />}
          {!hide && (
            <video autoPlay muted className="w-100">
              <source src={videos.AthenaTrailer} type="video/mp4" />
            </video>
          )}
        </Card>
      </ModalBox>
    </div>
  );
}

export default CustomCard;
