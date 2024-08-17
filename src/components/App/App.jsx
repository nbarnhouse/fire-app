import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "../Home/Home";
import About from "../About/About";
import CitiesRanked from "../CitiesRanked/CitiesRanked";
import Resources from "../Resources/Resources";
import Community from "../Community/Community";
import PageLayout from "../PageLayout/PageLayout";

import "./App.css";

export default function App() {
  const dispatch = useDispatch();
  const locations = useSelector((store) => store.locations);
  const [locationsReady, setLocationsReady] = useState(false);

  useEffect(() => {
    dispatch({ type: "GET_LOCATIONS" });
  }, []);

  useEffect(() => {
    if (locations.loading === false) {
      setLocationsReady(true);
      console.log("Data Loaded...");
    }
  }, [locations.loading]);

  if (!locationsReady) {
    console.log("Loading Data");
    return <h1>Loading Data...</h1>;
  }
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cities" element={<CitiesRanked />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
