"use client";
import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Offcanvas,
} from "react-bootstrap";
import Image from "next/image";
import ProfilePic from "../images/profile-round-1342-svgrepo-com.svg";
import Logo from "/Users/HP/Desktop/nonroker/frontend/src/app/components/Images/no-brokrage.png";

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <StyledHeader>
      <Navbar bg="light" expand="lg" className="py-2">
        <Container>
          <div className="d-flex align-items-center">
            <Navbar.Brand href="#" className="me-0">
              <Image
                src={Logo}
                className="d-inline-block align-top"
                alt="Logo"
                height="40"
                width="100"
              />
            </Navbar.Brand>
            <Nav className="ms-3 d-none d-lg-flex">
              <NavDropdown title="New-Delhi" id="location-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Zone" id="zone-dropdown">
                <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          <div className="d-flex align-items-center ms-auto">
            {/* Brokrage Free Button */}
            <StyledButton className="me-3 d-none d-md-inline-flex">
              Post Property <span>Brokrage free</span>
            </StyledButton>
            <div className="me-3 d-none d-lg-block">
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="black"
                  strokeWidth="5"
                  fill="none"
                />
                <path
                  d="M30,50 a20,20 0 0,1 40,0"
                  fill="none"
                  stroke="black"
                  strokeWidth="5"
                />
                <rect x="25" y="50" width="10" height="20" fill="black" />
                <rect x="65" y="50" width="10" height="20" fill="black" />
              </svg>
            </div>

            {/* Login Button for Larger Screens */}
            <StyledLoginButton className="me-3 d-none d-lg-flex">
              <Image
                src={ProfilePic}
                alt="Profile"
                width={20}
                height={20}
                style={{ marginRight: "8px" }}
              />
              Login
            </StyledLoginButton>

            {/* Hamburger Toggle */}
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleShow}
              className="ms-3"
            />
          </div>

          <Navbar.Offcanvas
            show={showOffcanvas}
            onHide={handleClose}
            placement="end"
            responsive="lg"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column d-lg-none">
                <NavDropdown title="New-Delhi" id="location-dropdown-mobile">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something else
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Zone" id="zone-dropdown-mobile">
                  <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.6">
                    Something else
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Login Button for Small Screens */}
                <StyledButton className="my-3 d-lg-none">
                  <Image
                    src={ProfilePic}
                    alt="Profile"
                    width={20}
                    height={20}
                    style={{ marginRight: "8px" }}
                  />
                  Login
                </StyledButton>

                {/* Brokrage Free Button for Small Screens */}
                <StyledButton className="my-2 d-md-none">
                  Post Property <span>Brokrage free</span>
                </StyledButton>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <Strip>
        <Container>
          <Nav className="justify-content-between">
            <NavDropdown title="Buy" id="strip-dropdown-1">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Rent" id="strip-dropdown-2">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Sell" id="strip-dropdown-3">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Builders" id="strip-dropdown-4">
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Services"
              id="strip-dropdown-5"
              className="d-none d-md-block"
            >
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Blogs"
              id="strip-dropdown-6"
              className="d-none d-lg-block"
            >
              <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Help"
              id="strip-dropdown-7"
              className="d-none d-lg-block"
            >
              <NavDropdown.Item href="#action/3.3">Item 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Item 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Strip>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  .navbar-toggler {
    border: none;
    padding: 0;
    &:focus {
      box-shadow: none;
    }
  }

  .btn-close {
    box-shadow: none;
  }

  .custom-dropdown .dropdown-menu {
    @media (min-width: 992px) {
      position: absolute;
      right: 0;
      left: auto;
    }
  }

  .custom-dropdown .dropdown-toggle::after {
    display: none;
  }
`;

const Strip = styled.div`
  background-color: #f17025;
  padding: 10px 0;

  .nav-link,
  .dropdown-toggle {
    color: white !important;
    font-weight: bold;
    padding: 0.25rem 0.5rem !important;
  }

  .dropdown-menu {
    min-width: 100%;
  }

  @media (max-width: 767px) {
    .nav {
      justify-content: space-around !important;
    }
  }
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  color: black;
  border: 2px solid #f17025;
  border-radius: 50px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #f17025;
    color: white;
  }

  span {
    background-color: #28a745;
    color: white;
    padding: 4px 8px;
    margin-left: 8px;
    border-radius: 50px;
    border: 2px solid #28a745;
    font-size: 12px;
  }
`;

const StyledLoginButton = styled(StyledButton)`
  color: black;
`;

export default Header;
