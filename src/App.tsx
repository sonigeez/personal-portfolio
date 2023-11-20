import React from "react";
import "./styles/index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Header,
  Chat,
  Portfolio,
} from "./components";
import Certifcate from "./components/certificate";

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
          <React.Fragment>
            <Header />
              <Routes>
                <Route path="/chat/portfolio" element={<Portfolio/>} />
                <Route path="/chat/:slug/:status" element={<Chat/>} />
                <Route path="/chat/:slug/" element={<Chat/>} />
                <Route path="/chat" element={<Chat/>} />
                <Route path="/certificates" element={<Certifcate/>} />
                <Route  path="/" element={<Chat/>} />
                <Route  path="*" element={<Chat/>} />
              </Routes>
          </React.Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
