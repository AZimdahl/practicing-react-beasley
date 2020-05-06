import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import MainContainer from "./redux/containers/MainContainer"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
