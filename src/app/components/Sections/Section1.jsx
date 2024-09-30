import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/image1.png";
import { useNavigate } from "react-router-dom";

function Section1() {
  // State for the selected options
  const [propertyType, setPropertyType] = useState("");
  const [projectType, setProjectType] = useState("");

  // Handler for property type button clicks
  const handlePropertyTypeClick = (type) => {
    setPropertyType(type);
  };

  // Handler for project type button clicks
  const handleProjectTypeClick = (type) => {
    setProjectType(type);
  };

  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/page-2");
  };

  return (
    <Container className="container">
      <div className="row">
        <div className="col-md-6">
          <ContentContainer>
            <TextWrapper>
              <h3>
                Why you sell or rent your property with{" "}
                <span>nobrokerage.com</span>
              </h3>
              <ul>
                <li>Brokerage Free</li>
                <li>Free Property Listing</li>
                <li>Unlimited Access</li>
                <li>Free Rent Agreement</li>
              </ul>
            </TextWrapper>
            <ImageWrapper>
              <Image
                src={image1}
                alt="Property illustration"
                layout="responsive"
                objectFit="contain"
                width={400}
                height={400}
              />
            </ImageWrapper>
          </ContentContainer>
        </div>
        <div className="col-md-6">
          <form>
            <FormWrapper>
              <h3>Let's Get You Started...</h3>
              <h5>Basic Details</h5>
              <div className="d-flex flex-column mb-3">
                <label>City</label>
                <Input type="text" placeholder="Enter city" />
              </div>
              <div className="d-flex mb-3">
                <div className="d-flex flex-column me-2 flex-grow-1">
                  <label>Name</label>
                  <Input type="text" placeholder="Enter your name" />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <label>Email Id</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="mb-3">
                <h5>You are looking to...</h5>
                <div>
                  <Button
                    type="button"
                    active={propertyType === "sell"}
                    onClick={() => handlePropertyTypeClick("sell")}
                  >
                    Sell
                  </Button>
                  <Button
                    type="button"
                    active={propertyType === "rent"}
                    onClick={() => handlePropertyTypeClick("rent")}
                  >
                    Rent/Lease
                  </Button>
                  <Button
                    type="button"
                    active={propertyType === "pg"}
                    onClick={() => handlePropertyTypeClick("pg")}
                  >
                    PG
                  </Button>
                </div>
              </div>
              <div className="mb-3">
                <h5>Project Type</h5>
                <div>
                  <Button
                    type="button"
                    active={projectType === "commercial"}
                    onClick={() => handleProjectTypeClick("commercial")}
                  >
                    Commercial
                  </Button>
                  <Button
                    type="button"
                    active={projectType === "residential"}
                    onClick={() => handleProjectTypeClick("residential")}
                  >
                    Residential
                  </Button>
                </div>
              </div>
              <div className="mb-3">
                <h5>Your contact number for other buyers to reach you</h5>
                <Input type="number" placeholder="Enter contact number" />
              </div>
              <div className="text-center mt-4">
                <SaveButton type="button" onClick={handleContinueClick}>
                  Save and Continue
                </SaveButton>
              </div>
            </FormWrapper>
          </form>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 0;
`;

const ContentContainer = styled.div`
  position: relative;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem;
  overflow: hidden; /* Prevent overflow of content */
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 2; /* Ensures text is always on top */

  h3 {
    margin-bottom: 1.5rem;

    span {
      color: #ff6600;
    }
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: 1rem;
      padding-left: 30px;
      position: relative;

      &:before {
        content: "✓";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 20px;
        height: 20px;
        background-color: #4caf50;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  position: absolute; /* Absolute positioning to place image behind text */
  bottom: 0; /* Align image to the bottom of the container */
  right: 0; /* Align image to the right */
  width: 60%; /* Adjust width to control the size */
  height: auto; /* Keep aspect ratio */
  z-index: 1; /* Place behind text */
  opacity: 0.9; /* Optional: Slight opacity to blend the image better */
`;

const FormWrapper = styled.div`
  background-color: #f9f9f9; /* Light background for the form */
  padding: 2rem;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */

  h3 {
    color: #ff6600;
  }
`;

const Input = styled.input`
  border: 1px solid #ccc; /* Light border */
  border-radius: 4px; /* Slightly rounded corners */
  padding: 0.5rem; /* Spacing inside input */
  margin-bottom: 1rem; /* Spacing between inputs */
  width: 100%; /* Full width */
  &:focus {
    border-color: #ff6600; /* Highlight border on focus */
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px rgba(255, 102, 0, 0.5); /* Optional shadow */
  }
`;

const Button = styled.button`
  background-color: ${({ active }) =>
    active ? "#ff6600" : "#ffffff"}; /* Main button color */
  color: ${({ active }) => (active ? "#ffffff" : "#333333")}; /* Text color */
  border: 1px solid #ff6600; /* Border color */
  border-radius: 20px; /* Increased rounded corners */
  padding: 0.5rem 1rem; /* Padding inside the button */
  margin-right: 1rem; /* Space between buttons */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: ${({ active }) =>
      active ? "#e55b00" : "#f0f0f0"}; /* Darker shade on hover */
  }

  &:last-child {
    margin-right: 0; /* Remove margin for the last button */
  }
`;

const SaveButton = styled.button`
  background-color: #ff6600; /* Orange background for save button */
  color: white; /* Text color */
  border: none; /* No border */
  border-radius: 20px; /* Increased rounded corners */
  padding: 0.75rem 1.5rem; /* Padding inside the button */
  cursor: pointer; /* Pointer cursor on hover */
  transition: background-color 0.3s; /* Smooth transition for hover effect */

  &:hover {
    background-color: #e55b00; /* Darker orange shade on hover */
  }
`;

export default Section1;
