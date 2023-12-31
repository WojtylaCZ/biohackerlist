import { Navbar, Container } from "react-bootstrap";
import { SelectLocaleDropdown } from "./select-locale-dropdown";

export const HeaderBar = () => {
  return (
    <>
      <style type="text/css">
        {`
        .navbar-custom {
          background-color: #195513;
        }
        `}
      </style>

      <Navbar variant="custom">
        <Container
          style={{
            maxWidth: "1080px",
          }}
        >
          <Navbar.Brand>
            <h3
              style={{
                // fontFamily: "Kaushan Script",
                color: "white",
                margin: "0px",
              }}
            >
              Biohackerlist.xyz
            </h3>
          </Navbar.Brand>

          <SelectLocaleDropdown />
        </Container>
      </Navbar>
    </>
  );
};
