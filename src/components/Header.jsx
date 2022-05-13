import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ data }) {
  const [titles, setTitles] = useState();
  useEffect(() => {
    setTitles(Object.keys(data));
  }, [data]);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {titles &&
              titles.map((title, i) => (
                <Nav.Link href={`/${title}`} key={i}>
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
