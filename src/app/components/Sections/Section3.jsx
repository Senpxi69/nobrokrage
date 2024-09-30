import React, { useEffect, useState } from "react"; // Import useEffect and useState
import styled from "styled-components";
import { Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FormWrapper = styled.div`
  flex: 3;
`;

const SidebarWrapper = styled.div`
  flex: 1;
  position: relative;
  top: 20px;
`;

const Section = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #f7941d;
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

const StepIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f7941d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
`;

const StepText = styled.span`
  font-size: 12px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const FileInput = styled(Input).attrs({ type: "file" })`
  &::file-selector-button {
    background-color: white;
    color: #f7941d;
    border: 1px solid #f7941d;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#f7941d" : "white")};
  color: ${(props) => (props.primary ? "white" : "#f7941d")};
  border: 1px solid #f7941d;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.8;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  flex: 1;
`;

const SectionContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 20px;
`;

const SectionRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionInput = styled(Input)`
  flex: 1;
`;

const SectionFileInput = styled(FileInput)`
  flex: 2;
`;

const RoundButton = styled(Button)`
  border-radius: 20px;
  padding: 5px 15px;
  white-space: nowrap;
`;

const SmallButton = styled(Button)`
  font-size: 12px;
  padding: 5px 10px;
  margin-right: 10px;
`;

const SectionControls = styled.div`
  margin-top: 10px;
`;

const PreviousLink = styled.a`
  color: #f7941d;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CenteredButton = styled(Button)`
  margin: 0 auto;
  display: block;
  width: 200px;
`;

const TextWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 1.5rem;
    font-size: 16px;

    span {
      color: #f7941d;
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

const Section3 = () => {
  const navigate = useNavigate();

  // State to check if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after the component has mounted
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    navigate("/property-card");
  };

  const handlePreviousClick = () => {
    navigate("/");
  };

  return (
    <PageWrapper>
      <Container>
        <FormWrapper>
          <Section>
            <Title>
              Sell or rent your property with nobrokerage.com in 3 easy steps!
            </Title>

            <StepIndicator>
              <Step>
                <StepIcon>
                  <Camera size={16} />
                </StepIcon>
                <StepText>Basic Details</StepText>
              </Step>
              <Step>
                <StepIcon>
                  <Camera size={16} />
                </StepIcon>
                <StepText>Property Profile</StepText>
              </Step>
              <Step>
                <StepIcon>
                  <Camera size={16} />
                </StepIcon>
                <StepText>Gallery</StepText>
              </Step>
            </StepIndicator>

            <form>
              <h3>Add photos of your property</h3>

              <Row>
                <Column>
                  <FormGroup>
                    <Label>Property Images</Label>
                    {isMounted && <FileInput />}{" "}
                    {/* Render file input only on the client */}
                  </FormGroup>
                </Column>
                <Column>
                  <FormGroup>
                    <Label>Images of the locality</Label>
                    {isMounted && <FileInput />}{" "}
                    {/* Render file input only on the client */}
                  </FormGroup>
                </Column>
              </Row>

              <SectionContainer>
                <SectionRow>
                  <Column>
                    <Label>Name</Label>
                    <SectionInput type="text" placeholder="Eg. Living room" />
                  </Column>
                  <Column>
                    <Label>Images</Label>
                    <SectionFileInput />
                  </Column>
                  <RoundButton type="button">Add Images +</RoundButton>
                </SectionRow>

                <SectionControls>
                  <SmallButton type="button">Add Section +</SmallButton>
                  <SmallButton type="button">Delete Section -</SmallButton>
                </SectionControls>
              </SectionContainer>

              <SectionContainer>
                <SectionRow>
                  <Column>
                    <Label>Name</Label>
                    <SectionInput type="text" placeholder="Eg. Living room" />
                  </Column>
                  <Column>
                    <Label>Images</Label>
                    <SectionFileInput />
                  </Column>
                  <RoundButton type="button">Add Images +</RoundButton>
                </SectionRow>

                <SectionControls>
                  <SmallButton type="button">Add Section +</SmallButton>
                  <SmallButton type="button">Delete Section -</SmallButton>
                </SectionControls>
              </SectionContainer>

              <ButtonGroup>
                <PreviousLink onClick={handlePreviousClick}>
                  Previous
                </PreviousLink>
                <CenteredButton primary onClick={handleClick}>
                  Next
                </CenteredButton>
              </ButtonGroup>
            </form>
          </Section>
        </FormWrapper>

        <SidebarWrapper>
          <TextWrapper>
            <h3>
              Why you should choose <span>nobrokerage.com</span>
            </h3>
            <ul>
              <li>Exposure to thousands of potential buyers and tenants</li>
              <li>Seamless process from listing to closing</li>
              <li>Professional guidance at every step</li>
            </ul>
          </TextWrapper>
        </SidebarWrapper>
      </Container>
    </PageWrapper>
  );
};

export default Section3;
