import Card from "react-bootstrap/Card";

function CustomCard(props) {
  return (
    <Card
      style={({ width: "18rem" }, { border: "dark" }, { padding: "0 0.05rem" })}
      className="card border-dark bg-dark"
    >
      <Card.Img variant="top" src={props.img} role="button" />
    </Card>
  );
}

export default CustomCard;
