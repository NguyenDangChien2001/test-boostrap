import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { videos } from "../../asset";

function CustomCard(props) {
  const [hide, setHide] = useState("none");
  const [scale, setScale] = useState(1);

  const mouseOver = () => {
    setHide("block");
    setScale(1.5);
  };

  const mouseLeave = () => {
    setHide("none");
    setScale(1);
  };

  return (
    <div onMouseOver={() => mouseOver()} onMouseLeave={() => mouseLeave()}>
      <Card
        style={
          ({ border: "dark" },
          { padding: "0 0.05rem" },
          { transform: `scale(${scale})` })
        }
        className="card border-dark bg-warning text-light"
      >
        <Card.Img
          variant="top"
          src={props.img}
          role="button"
          style={{ display: hide }}
        />
        <video autoPlay muted className="w-100">
          <source src={videos.AthenaTrailer} type="video/mp4" />
        </video>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card>
    </div>
  );
}

export default CustomCard;
