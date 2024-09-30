import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

function Section2() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after the component has mounted
    setIsMounted(true);
  }, []);

  return (
    <OuterContainer className="my-5">
      <InnerContainer className="container">
        <Header className="text-left mb-4">
          <h3>How It Works</h3>
          <SmallUnderline />
        </Header>
        <div className="row">
          <div className="col-md-4 mb-4">
            <Card>
              <CardHeader>
                Step 1
                <CardUnderline />
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card>
              <CardHeader>
                Step 2
                <CardUnderline />
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4 mb-4">
            <Card>
              <CardHeader>
                Step 3
                <CardUnderline />
              </CardHeader>
              <CardContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardContent>
            </Card>
          </div>
        </div>
      </InnerContainer>
    </OuterContainer>
  );
}

const OuterContainer = styled.div`
  padding: 2rem;
  background-color: rgba(255, 102, 0, 0.1);
  width: 100%;
`;

const InnerContainer = styled.div`
  border-radius: 8px;
`;

const Header = styled.div`
  position: relative;
  font-size: 1.5rem;
`;

const SmallUnderline = styled.div`
  width: 40px;
  height: 2px;
  background-color: #ff6600;
  margin-top: 0.5rem;
  position: absolute;
  bottom: -5px;
  left: 0;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.h4`
  margin-bottom: 0.5rem;
  color: #333;
  position: relative;
  padding-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const CardUnderline = styled.div`
  width: 40px;
  height: 2px;
  background-color: #ff6600;
  margin-top: 0.25rem;
  position: relative;
  left: 0;
`;

const CardContent = styled.p`
  color: #666;
  margin: 0;
  font-size: 0.875rem;
`;

export default Section2;
