import React from "react";

import { Container } from "react-bootstrap";
// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <main className="py-3">
          <Container>
            <HomeScreen />
          </Container>
        </main>
        <Footer />
      </header>
    </div>
  );
};

export default App;
