import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <main className="py-3">
            <Container>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/product/:id" component={ProductScreen} />
            </Container>
          </main>
          <Footer />
        </header>
      </div>
    </Router>
  );
};

export default App;
