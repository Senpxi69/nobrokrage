import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Property1 from "../images/property1.jpg"; // Assuming this path is correct

const CardContainer = styled.div`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: fit-content;
  height: 350px; /* Increased height */
  margin: 20px auto;
  background: #fff;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 35%;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const RightSideContent = styled.div`
  width: 220px;
  padding: 15px;
  border-left: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  margin-bottom: 10px;
`;

const RERABadge = styled.span`
  background-color: #00a86b;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 2px 8px;
  border-radius: 4px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const Price = styled.h4`
  color: #000;
  font-weight: bold;
  margin: 0 0 10px 0;
  font-size: 20px;
`;

const Title = styled.h5`
  margin: 0 0 5px 0;
  font-weight: bold;
  font-size: 18px;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

const InfoSection = styled.div`
  border: 1px solid #ff6600; /* Added border with #ff6600 color */
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

const InfoItem = styled.div`
  color: #333;
  position: relative;
  padding-right: 15px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: #ff6600;
  }

  /* Hide separator for the last child in each row */
  &:last-child {
    &::after {
      display: none; /* No separator for the last item in the row */
    }
  }
`;

const InfoLabel = styled.div`
  font-weight: bold;
`;

const InfoValue = styled.div`
  color: #666;
`;

const Highlights = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: #666;
`;

const HighlightTag = styled.span`
  background-color: #f0f0f0;
  padding: 3px 8px;
  border-radius: 20px;
  margin-right: 8px;
  font-size: 11px;
`;

const FooterItem = styled.div`
  font-size: 13px;
  color: #00a86b;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const FooterIcon = styled.i`
  margin-right: 5px;
  color: #00a86b;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#ff6600" : "white")};
  color: ${(props) => (props.primary ? "white" : "#ff6600")};
  border: ${(props) => (props.primary ? "none" : "1px solid #ff6600")};
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  margin-bottom: 10px;
  &:hover {
    background-color: ${(props) => (props.primary ? "#e55b00" : "#fff0e6")};
  }
`;

const PropertyCard = () => {
  return (
    <CardContainer>
      <RERABadge>RERA</RERABadge>
      {/* Use a wrapper for the Next.js Image component */}
      <StyledImageContainer>
        <Image src={Property1} alt="Property" layout="fill" objectFit="cover" />
      </StyledImageContainer>
      <Content>
        <Header>
          <Title>Godrej Vistas</Title>
          <Subtitle>2, 3, 4, 5 BHK Apartment in Chembur, Mumbai</Subtitle>
        </Header>

        <InfoSection className="container">
          <div className="row gy-3">
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Carpet Area</InfoLabel>
                <InfoValue>890 sq ft</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Status</InfoLabel>
                <InfoValue>Under Construction</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Furnishing</InfoLabel>
                <InfoValue>Unfurnished</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Car parking</InfoLabel>
                <InfoValue>2 Covered</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Washroom</InfoLabel>
                <InfoValue>3</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Facing</InfoLabel>
                <InfoValue>North Facing</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Floor</InfoLabel>
                <InfoValue>6th Floor</InfoValue>
              </InfoItem>
            </div>
            <div className="col-md-4">
              <InfoItem>
                <InfoLabel>Overlooking</InfoLabel>
                <InfoValue>New property</InfoValue>
              </InfoItem>
            </div>
          </div>
        </InfoSection>

        <Highlights>
          <div style={{ marginBottom: "5px" }}>Highlights - </div>
          <HighlightTag>Railway Station - 450m</HighlightTag>
          <HighlightTag>Marine Drive - 5 Km</HighlightTag>
        </Highlights>
      </Content>
      <RightSideContent>
        <div>
          <Price>₹1.80 - 2.8 Cr</Price>
          <FooterItem>
            <FooterIcon className="bi bi-check-circle-fill"></FooterIcon>0 Stamp
            duties
          </FooterItem>
          <FooterItem>
            <FooterIcon className="bi bi-check-circle-fill"></FooterIcon>0
            Registration Charges
          </FooterItem>
        </div>
        <div>
          <Button primary>Contact now</Button>
          <Button>View Details</Button>
        </div>
      </RightSideContent>
    </CardContainer>
  );
};

export default PropertyCard;
