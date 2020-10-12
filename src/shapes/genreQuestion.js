import PropTypes from 'prop-types';
import {genreAnswers} from './genreAnswers';
import {GameType} from '../const/GameType';

const genreQuestion = {
  answers: PropTypes.arrayOf(
      PropTypes.shape(
          genreAnswers
      )
  ).isRequired,
  genre: PropTypes.string.isRequired,
  type: PropTypes.oneOf(
      [GameType.ARTIST, GameType.GENRE]
  ).isRequired
};

export {genreQuestion};
