import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {GameType} from '../../const/GameType';
import QuestionArtist from '../question-artist/question-artist.jsx';
import QuestionGenre from '../question-genre/question-genre.jsx';

class GameScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }
  render() {
    const {questions} = this.props;
    const {step} = this.state;
    const question = questions[step];

    if (!question || step >= question.length) {
      return (
        <Redirect to="/" />
      );
    }

    switch (question.type) {
      case GameType.ARTIST:
        return (
          <QuestionArtist
            question={question}
            onAnswer={
              () => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
          />
        );
      case GameType.GENRE:
        return (
          <QuestionGenre
            question={question}
            onAnswer={
              () => {
                this.setState((prevState) => ({
                  step: prevState.step + 1,
                }));
              }}
          />
        );
    }

    return <Redirect to="/" />;
  }
}

GameScreen.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default GameScreen;
