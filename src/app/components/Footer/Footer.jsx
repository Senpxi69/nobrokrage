// Footer.js
import React from "react";
import Link from "next/link";
import Image from "next/image";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import facebook from "../images/facebook.svg";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavDropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* Main Content Section */}
      <MainContent>
        <HeaderSection>
          <HeaderWithDropdown>
            <h3>Property options in top cities</h3>
            <Nav className="ms-3">
              <StyledNavDropdown title="New-Delhi" id="location-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something else
                </NavDropdown.Item>
              </StyledNavDropdown>
              <StyledNavDropdown title="Zone" id="zone-dropdown">
                <NavDropdown.Item href="#action/3.4">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Something else
                </NavDropdown.Item>
              </StyledNavDropdown>
            </Nav>
          </HeaderWithDropdown>
        </HeaderSection>

        <ContentGrid>
          <ContentBlock>
            <p>Popular residence searches</p>
            <ul>
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>flats in whiteField</li>
              ))}
            </ul>
          </ContentBlock>
          <ContentBlock>
            <p>Popular residence searches</p>
            <ul>
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>flats in whiteField</li>
              ))}
            </ul>
          </ContentBlock>
          <ContentBlock>
            <p>Popular residence searches</p>
            <ul>
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>flats in whiteField</li>
              ))}
            </ul>
          </ContentBlock>
          <ContentBlock>
            <p>Popular residence searches</p>
            <ul>
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>flats in whiteField</li>
              ))}
            </ul>
          </ContentBlock>
        </ContentGrid>
      </MainContent>

      {/* Footer Wrapper */}
      <FooterWrapper>
        {/* Footer Content */}
        <FooterContent>
          <AboutSection>
            <h3>About Nobrokerage.com</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              ei...
              <Link href="/about">Read more</Link>
            </p>
            <h4>Our Socials</h4>
            <SocialIcons>
              <SocialIcon href="https://facebook.com" aria-label="Facebook">
                <Image src={facebook} height={30} width={30} alt="Facebook" />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" aria-label="Twitter">
                <Image src={twitter} height={30} width={30} alt="Twitter" />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com" aria-label="LinkedIn">
                <Image src={linkedin} height={30} width={30} alt="LinkedIn" />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" aria-label="YouTube">
                <Image src={youtube} height={30} width={30} alt="YouTube" />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" aria-label="Instagram">
                <Image src={instagram} height={30} width={30} alt="Instagram" />
              </SocialIcon>
            </SocialIcons>
          </AboutSection>

          {/* Services Section */}
          <ServicesSection>
            <h3>No Brokerage Services</h3>
            <h4>Buy</h4>
            <ServicesList>
              <ServiceItem>Home Loan</ServiceItem>
              <ServiceItem>Property Legal Services</ServiceItem>
              <ServiceItem>Interiors</ServiceItem>
              <ServiceItem>Sale Services</ServiceItem>
            </ServicesList>
            <h4>Rent</h4>
            <ServicesList>
              <ServiceItem>Home Loan</ServiceItem>
              <ServiceItem>Property Legal Services</ServiceItem>
              <ServiceItem>Interiors</ServiceItem>
              <ServiceItem>Sale Services</ServiceItem>
            </ServicesList>
          </ServicesSection>
        </FooterContent>

        {/* Bottom Navigation */}
        <BottomNav>
          <Link href="/sitemap">Sitemap</Link>
          <Link href="/terms">Terms & Conditions</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/feedback">Feedback</Link>
          <Link href="/help">Help</Link>
          <Link href="/sales-enquiry">Sales Enquiry</Link>
        </BottomNav>
      </FooterWrapper>
    </>
  );
};

// Styled Components
const MainContent = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem; /* Spacing below the main content */
`;

const HeaderSection = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
`;

const HeaderWithDropdown = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
    color: #f7941d; /* Orange color */
    font-size: 1.25rem;
  }

  .nav {
    margin-left: 1rem;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-toggle {
    color: #f7941d !important; /* Orange color for dropdown */
    &:hover {
      color: #d6750c !important; /* Darker shade on hover */
    }
  }
`;

const ContentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ContentBlock = styled.div`
  flex: 1 1 200px;
  min-width: 200px;

  p {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
    color: #666;
  }
`;

const FooterWrapper = styled.footer`
  background-color: #f5f5f5;
  padding: 2rem 1rem;
  font-family: Arial, sans-serif;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutSection = styled.div`
  flex: 1;
  min-width: 250px;
  margin-right: 1.5rem; /* Adjusted margin for better spacing */
  margin-bottom: 2rem;

  h3,
  h4 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.75rem; /* Adjusted gap for social icons */
`;

const SocialIcon = styled.a`
  display: inline-block;
  width: 30px; /* Adjusted icon size */
  height: 30px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const ServicesSection = styled.div`
  flex: 2;
  min-width: 250px;

  h3,
  h4 {
    margin-bottom: 1rem;
  }
`;

const ServicesList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
  gap: 0.5rem; /* Reduced gap for tighter spacing */
  flex-wrap: wrap; /* Allow wrapping to prevent cramping */

  /* Media Query for smaller screens */
  @media (max-width: 600px) {
    justify-content: space-between; /* Spread items evenly */
  }
`;

const ServiceItem = styled.li`
  margin-bottom: 0.5rem;
  color: #666;
  text-align: center; /* Center align text */
  font-size: 0.875rem; /* Decrease font size for smaller screens */
`;

const BottomNav = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;

  a {
    text-decoration: none;
    color: #333;
    font-size: 0.875rem; /* Adjust font size */
    transition: color 0.2s;

    &:hover {
      color: #f7941d; /* Change color on hover */
    }
  }
`;

export default Footer;
