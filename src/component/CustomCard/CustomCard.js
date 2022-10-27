import { useState } from "react";
import Card from "react-bootstrap/Card";

import ModalBox from "../ModalBox";
import { images } from "../../asset";

function CustomCard(props) {
  const [hide, setHide] = useState(true);

  return (
    <div
      onMouseOver={() => setHide(false)}
      onMouseLeave={() => setHide(true)}
      onClick={() => setHide(true)}
    >
      <ModalBox
        video={props.data.Trailer}
        image={props.data.Logo}
        description={props.data.Description}
        title={props.data.Title}
        cast={props.data.Cast}
        genres={props.data.Genres}
        thisShowIs={props.data.ThisShowIs}
      >
        <Card
          style={{ border: "dark" }}
          className="card border-dark bg-dark text-light"
        >
          {hide && (
            <Card.Img variant="top" src={images.CyberPunk} role="button" />
          )}
          {!hide && (
            // <video autoPlay muted className="w-100">
            //   <source src={props.data.Trailer} type="video/mp4" />
            // </video>

            <iframe
              width="100%"
              height="450"
              src={props.data.Trailer}
              title="ATHENA directed by Romain Gavras | Official Trailer | Netflix"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </Card>
      </ModalBox>
    </div>
  );
}

export default CustomCard;
