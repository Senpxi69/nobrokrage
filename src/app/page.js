"use client";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PropertyCard from "./components/PropertyCard/PropertyCard";
import Page1 from "./components/Pages/Page1";
import Page2 from "./components/Pages/Page2";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page-2" element={<Page2 />} />
          <Route path="/Property-card" element={<PropertyCard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  color: red;
`;
