import React from 'react';
import PropTypes from 'prop-types';
import {GameType} from '../../const/GameType';
import {questionArtist} from '../../shapes/questionArtist';

const QuestionArtist = (props) => {
  const {onAnswer, question} = props;
  const {
    answers,
    song
  } = question;

  return (
    <React.Fragment>
      <svg xmlns="http://www.w3.org/2000/svg" className="app__svg">
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
        <section className="game game--artist">
          <header className="game__header">
            <a className="game__back" href="#">
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
              <circle className="timer__line circle" cx="390" cy="390" r="370" />
            </svg>
            <div className="game__mistakes">
              <div className="wrong"></div>
              <div className="wrong"></div>
              <div className="wrong"></div>
            </div>
          </header>
          <section className="game__screen">
            <h2 className="game__title">Кто исполняет эту песню?</h2>
            <div className="game__track">
              <div className="track">
                <button className="track__button track__button--play" type="button"></button>
                <div className="track__status">
                  <audio
                    src={song.src}
                  />
                </div>
              </div>
            </div>
            <form className="game__artist">
              {answers.map((answer, i) => (
                <div key={answer.id} className="artist">
                  <input
                    className="artist__input visually-hidden"
                    type="radio"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    onChange={(e) => {
                      e.preventDefault();
                      onAnswer(question, answer);
                    }}
                  />
                  <label className="artist__name" htmlFor={`answer-${i}`}>
                    <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                    {answer.artist}
                  </label>
                </div>
              ))}
            </form>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};



QuestionArtist.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape(
      questionArtist
  ).isRequired
};
export default QuestionArtist;
