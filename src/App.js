import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? "App App--fixed" : "App"}>
      <Header toggle={toggle} setToggle={setToggle} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
