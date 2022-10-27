import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { videos, images } from "../../asset";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SearchBox(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = [
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
    [
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CyberPunk,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.CuocGiaiCuuHangThaiLan,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.Dahmer,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "Athena",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.KomiKoTheGiaoTiep,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
      {
        title: "1",
        description:
          "Cái chết bi thảm của một cậu bé châm ngòi cuộc chiến toàn diện trong cộng đồng Athena. Những người anh của nạn nhân là trung tâm của cuộc xung đột.",
        logo: images.logoAthena,
        image: images.ThanhMaTuy,
        trailer: videos.AthenaTrailer,
        type: "Fight-the-system TV Shows",
        cast: ["Nguyen Dang Chien", "Tran Quang Hoc", "Thai Hoai Nam"],
        genres: ["Korea", "TV Show"],
        thisShowIs: ["Dark", "Horror"],
      },
    ],
  ];

  const [key, setKey] = useState("");

  const searchResult = [];

  function handleSearch() {
    data.forEach((e) => {
      const titleKey = e.filter((f) => f.title.includes(key));
      titleKey.forEach((g) => searchResult.push(g));
    });

    data.forEach((h) => {
      const descriptionKey = h.filter((i) => i.description.includes(key));
      descriptionKey.forEach((k) => searchResult.push(k));
    });

    console.log(searchResult);
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        {props.children}
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Search</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-black text-light">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Key words</Form.Label>
              <Form.Control
                className="bg-black text-light"
                placeholder="Title, Cast, Genres, ..."
                autoFocus
                value={key}
                onChange={(e) => {
                  setKey(e.target.value);
                  handleSearch();
                }}
              />
            </Form.Group>
          </Form>
          <Container>
            <Row>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}></Col>
              <Col xs={6} md={4}></Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer className="bg-black text-light">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Search
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchBox;
