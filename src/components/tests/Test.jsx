import React from 'react';
import { useState } from 'react';
import { questions } from '../../question';
import styles from './Test.module.scss';

const fandom = {
  witcher: 'The Witcher',
  got: 'The Lord of the Rings',
  tltr: 'Game of Thrones',
  dc: 'DC',
};

const finishMessages = {
  witcher: ['Ты настоящий ведьмак', 'Ты нелюдь', 'weatcher_true.jpg', 'weatcher_false.webp'],
  got: [
    'на твой голос слетаются все живые существа, чтобы преисполниться светом',
    'ты поёшь, как Голлум, когда видишь свою прелесть',
    'vk_true.jpg',
    'vk_false.png',
  ],
  tltr: [
    'а ты, случайно, не мать драконов?',
    'Драконы тебя сожгут и не заметят',
    'plio_true.jpg',
    'plio_false.jpg',
  ],
  dc: [
    'Ого! Да ты и Чудо-Женщина, и Женщина-Кошка в одном лице! Сердце Тёмного рыцаря - твоё.',
    'Что ж, ты явно не Женщина-Кошка...',
    'dc_true.jpg',
    'dc_false.jpg',
  ],
};

const colorTheme = {
  witcher: ['#1e2b33', '#42497f'],
  got: ['#654321', '#93c572'],
  tltr: ['#d1b798', '#b27257'],
  dc: ['#0f0012', '#331d12'],
};

const WitcherTest = ({ currentFan }) => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [progres, setProgres] = useState(0);
  const [finishMessage, setFinishMessage] = useState({
    url: '',
    message: '',
  });
  const currentQustions = questions[currentFan];
  const question = currentQustions[step];
  const onClickVariant = (index) => {
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
    setStep(step + 1);
    console.log(step);
    if (step === currentQustions.length - 1) {
      finish(correct);
    }
    let procent = ((step + 1) / currentQustions.length) * 100;
    setProgres(procent);
  };
  const finish = (correct) => {
    console.log(finishMessages[currentFan]);
    if (correct > 5) {
      setFinishMessage({
        url: `image/finish/${finishMessages[currentFan][2]}`,
        message: finishMessages[currentFan][0],
      });
    } else {
      setFinishMessage({
        url: `image/finish/${finishMessages[currentFan][3]}`,
        message: finishMessages[currentFan][1],
      });
    }
  };
  return (
    <div style={{ backgroundColor: colorTheme[currentFan][0] }} className={styles.root}>
      <div className={styles.row}>
        {step < currentQustions.length ? (
          <div style={{ backgroundColor: colorTheme[currentFan][1] }} className={styles.body}>
            <div className={styles.theme}>{fandom[currentFan]}</div>
            <div className={styles.stripe}>
              <div style={{ width: progres + '%' }} className={styles.progres}></div>
            </div>
            <div className={styles.question}>{question.title}</div>
            <div className={styles.answers}>
              {question.variants.map((e, i) => (
                <div key={e} onClick={() => onClickVariant(i)} className={styles.answer}>
                  <p>{e}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ backgroundColor: colorTheme[currentFan][1] }} className={styles.body}>
            <div className={styles.theme}>{fandom[currentFan]}</div>
            <div style={{ textAlign: 'center' }} className={styles.question}>
              Вы ответили на <span>{correct}</span> из {currentQustions.length} вопросов
            </div>
            <div className={styles.img}>
              <img src={finishMessage.url} alt="" />
            </div>
            <div style={{ textAlign: 'center' }} className={styles.question}>
              {finishMessage.message}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WitcherTest;
