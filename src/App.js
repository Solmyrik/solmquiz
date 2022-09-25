import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Witcher from './components/pages/Theme';
import WitcherTest from './components/tests/Test';
import { useState, useEffect } from 'react';

function App() {
  const [currentFan, setCurrentFun] = useState(window.localStorage.getItem('currentFan') || '');
  useEffect(() => {
    window.localStorage.setItem('currentFan', currentFan);
    // console.log(window.localStorage.getItem('currentFan'));
  }, [currentFan]);
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main currentFan={currentFan} setCurrentFun={setCurrentFun} />}></Route>
        <Route path="witcher" element={<Witcher currentFan={currentFan} />}></Route>
        <Route path="got" element={<Witcher currentFan={currentFan} />}></Route>
        <Route path="tltr" element={<Witcher currentFan={currentFan} />}></Route>
        <Route path="dc" element={<Witcher currentFan={currentFan} />}></Route>
        <Route path="test" element={<WitcherTest currentFan={currentFan} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
