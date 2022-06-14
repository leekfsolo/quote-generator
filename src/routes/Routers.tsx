import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthorQuote from "../app/author-quote";
import RandomQuote from "../app/random-quote";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomQuote />} />
        <Route path="/:id" element={<AuthorQuote />} />
      </Routes>
    </Router>
  );
};

export default Routers;
