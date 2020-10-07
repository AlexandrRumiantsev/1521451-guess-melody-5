import React from 'react';
import PropTypes from 'prop-types';

const QuestionGenre = (props) => {

  return (
    <React.Fragment>
      <main className="app">
        <svg xmlns="http://www.w3.org/2000/svg" class="svg">
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5"></feGaussianBlur>
            <feOffset dx="0" dy="0"></feOffset>
            <feMerge>
              <feMergeNode></feMergeNode>
              <feMergeNode in="SourceGraphic"></feMergeNode>
            </feMerge>
          </filter>
        </svg>
        <section className="main" id="root">
          <section className="game game--genre">
            <header className="game__header">
              <a className="game__back" href="#">
                <span className="visually-hidden">Сыграть ещё раз</span>
                <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
                <circle className="timer__line" cx="390" cy="390" r="370"
                  class="circle" />
              </svg>
              <div className="game__mistakes">
                <div className="wrong"></div>
                <div className="wrong"></div>
                <div className="wrong"></div>
              </div>
            </header>
            <section className="game__screen">
              <h2 className="game__title">Выберите инди-рок треки</h2>
              <form className="game__tracks">
                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1" />
                    <label className="game__check" htmlFor="answer-1">Отметить</label>
                  </div>
                </div>
                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2" />
                    <label className="game__check" htmlFor="answer-2">Отметить</label>
                  </div>
                </div>
                <div className="track">
                  <button className="track__button track__button--pause" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3" />
                    <label className="game__check" htmlFor="answer-3">Отметить</label>
                  </div>
                </div>
                <div className="track">
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio></audio>
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4" />
                    <label className="game__check" htmlFor="answer-4">Отметить</label>
                  </div>
                </div>
                <button className="game__submit button" type="submit">Ответить</button>
              </form>
            </section>
          </section>
        </section>
      </main>
      <footer className="footer">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
          <img src="img/icon-cc.png" alt="Creative Commons License" width="88" height="31" class="border0" />
        </a>
        <section className="copyright">
          <a className="copyright__logo" href="https://htmlacademy.ru"><img src="img/logo-htmla.svg" width="144" height="49" alt="HTML Academy" /></a>
          <p className="copyright__text">Сделано в <a className="copyright__link" href="https://htmlacademy.ru">HTML Academy</a></p>
        </section>
      </footer>
    </React.Fragment>
  );
};

export default QuestionGenre;
