import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./Context";

import "./app.css"
import "./interceptor"

import Home from "./components/pages/Home/Home";
import Maker from "./components/pages/Maker/Maker";
import About from "./components/pages/About/About";
import Loading from "./components/pages/Loading/Loading";
import Navbar from "./components/ui/NavBar/Navbar";

const defaultData = {
  token: {
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    scope: "",
    token_type: ""
  },
  user: {
    country: "",
    display_name: "",
    email: "",
    explicit_content: {
      filter_enabled: null,
      filter_locked: null
    },
    external_urls: {
      spotify: ""
    },
    followers: {
      href: null,
      total: 0
    },
    href: "",
    id: "",
    images: [],
    product: "",
    type: "",
    uri: ""
  }
}

export default function App() {
  const [context, setContext] = useState(defaultData);

  return (
    <Context.Provider value={[ context, setContext ]}>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/maker" element={<Maker />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </React.Fragment>
    </Context.Provider>
  )
}
