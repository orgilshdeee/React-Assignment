import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ data }) {
  const [titles, setTitles] = useState();
  useEffect(() => {
    setTitles(Object.keys(data));
  }, [data]);
  const buttonStyle = {
    borderRadius : "15px",
    border : "solid black 1px",
    backgroundColor: "orange",
    color: "black",
    width: "120px",
    textAlign: "center"
  }
  return (
    <>
      <Navbar bg="light" expand="md" sticky="top" className="justify-content-evenly">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/" className="m-2" style={buttonStyle}>Home</Nav.Link>
            {titles &&
              titles.map((title, i) => (
                <Nav.Link href={`/${title}`} key={i} className="m-2" style={buttonStyle}>
                  {title}
                </Nav.Link>
              ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
