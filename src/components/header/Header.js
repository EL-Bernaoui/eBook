import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarOffsetTop, setNavbarOffsetTop] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (
        currentScrollPos > navbarOffsetTop &&
        currentScrollPos > prevScrollPos
      ) {
        setIsFixed(true);
      } else if (
        currentScrollPos <= navbarOffsetTop &&
        currentScrollPos < prevScrollPos
      ) {
        setIsFixed(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    const updateNavbarOffsetTop = () => {
      const navbar = document.querySelector(".mainNav");
      setNavbarOffsetTop(navbar.offsetTop);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateNavbarOffsetTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateNavbarOffsetTop);
    };
  }, [prevScrollPos, navbarOffsetTop]);

  useEffect(() => {
    const navbar = document.querySelector(".mainNav");
    setNavbarOffsetTop(navbar.offsetTop);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <Navbar
        expand="lg"
        className={`mainNav bg-body-tertiary ${isFixed ? "fixed" : ""}`}
        fixed=""
      >
        <Container>
          <Navbar.Brand href="#home" className="logo-link">
            Amazon <span>e</span>Book
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="colapsed basic-navbar-nav" className="myUl">
            <Nav
              className={`nav me-auto ${screenWidth < 991 ? "myshadow" : ""}`}
            >
              <Nav.Link href="#book" className="active link">
                Book
              </Nav.Link>
              <Nav.Link href="#reviews" className="link">
                Reviews
              </Nav.Link>
              <Nav.Link href="#author" className="link">
                Author
              </Nav.Link>
              <Nav.Link href="#contact" className="link">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
