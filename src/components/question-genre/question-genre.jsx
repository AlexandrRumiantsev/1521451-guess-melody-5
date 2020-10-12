import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {genreQuestion} from '../../shapes/genreQuestion';

class QuestionGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: [false, false, false, false],
    };
  }
  сhangeAnswer(event, userAnswers, index){
      const userAnswer = event.target.checked;

      this.setState({
          answers: [...userAnswers.slice(0, index), userAnswer, ...userAnswers.slice(index + 1)],
      });
  }
  render() {
    const {onAnswer, question} = this.props;
    const {answers: userAnswers} = this.state;
    const {
      answers,
      genre,
    } = question;
    return (
      <React.Fragment>
        <section className="game game--genre">
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
            <h2 className="game__title">Выберите {genre} треки</h2>
            <form className="game__tracks"
              onSubmit={(evt) => {
                evt.preventDefault();
                onAnswer(question, this.state.answers);
              }}
            >
              {answers.map((answer, i) => (
                <div key={`${answer.id}-${answer.src}`} className='track'>
                  <button className="track__button track__button--play" type="button"></button>
                  <div className="track__status">
                    <audio
                      src={answer.src}
                    />
                  </div>
                  <div className="game__answer">
                    <input className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${i}`}
                      id={`answer-${i}`}
                      onChange={(evt) => {
                        this.сhangeAnswer(
                                evt,
                                userAnswers,
                                i
                            )
                        }
                      }
                    />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              ))}

              <button className="game__submit button" type="submit">Ответить</button>
            </form>
          </section>
        </section>
      </React.Fragment>
    );
  }

}

QuestionGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape(
    genreQuestion
  ).isRequired
};

export default QuestionGenre;
