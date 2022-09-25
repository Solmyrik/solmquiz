import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const fandom = ['witcher', 'got', 'tltr', 'dc'];
const fandomRus = ['ведьмак', 'властелин колец', 'Игра престолов', 'DC'];
const Main = ({ currentFan, setCurrentFun }) => {
  // useEffect(() => {
  //   setCurrentFun(JSON.parse(window.localStorage.getItem('currentFan')));
  // }, []);
  // useEffect(() => {
  //   window.localStorage.setItem('currentFan', currentFan);
  //   // console.log(window.localStorage.getItem('currentFan'));
  // }, [currentFan]);
  return (
    <section className="main">
      <div className="main__container">
        <div className="main__body">
          {fandom.map((e, i) => (
            <Link
              style={{ backgroundImage: `url(image/main/${i + 1}.jpg)` }}
              key={e}
              onClick={() => setCurrentFun(e)}
              to={e}
              className="main__item">
              <div className="main__text">{fandomRus[i]}</div>
            </Link>
          ))}
          {/* <Link to="witcher" className="main__item"></Link>
          <Link to="got" className="main__item"></Link>
          <div className="main__item"></div>
          <div className="main__item"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Main;
