import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Theme.module.scss';

const texts = {
  witcher: ['Узнай,', 'насколько', 'ты', 'ведьмак', 'witcher.png'],
  got: ['НАСКОЛЬКО', 'ТВОЙ', 'ГОЛОС', 'ЭЛЬФИЙСКИЙ', 'vk.png'],
  tltr: ['КАК', 'ТЕБЯ', 'ПРИМУТ', 'ДРАКОНЫ', 'plio.png'],
  dc: ['СКОЛЬКО В', 'ТЕБЕ', 'ОТ', 'БЭТМЕНА', 'dc.png'],
};

const Witcher = ({ currentFan }) => {
  return (
    <div style={{ backgroundImage: `url(image/${texts[currentFan][4]})` }} className={styles.root}>
      <div className={styles.root__content}>
        <h2 className={styles.root__title}>
          {texts[currentFan][0]} <span>{texts[currentFan][1]}</span> <br /> {texts[currentFan][2]}{' '}
          <span>{texts[currentFan][3]}</span>
        </h2>
        <Link to="/test" href="" className={styles.root__btn}>
          Начать <br /> тест
        </Link>
      </div>
    </div>
  );
};

export default Witcher;
