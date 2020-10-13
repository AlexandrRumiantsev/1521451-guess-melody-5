import PropTypes from 'prop-types';
import {GameType} from '../const/GameType';
import {answersArtist} from './answersArtist';
import {songArtist} from './songArtist';

const questionArtist = {
  answers: PropTypes.arrayOf(
      PropTypes.shape(
          answersArtist
      )
  ),
  song: PropTypes.shape(
      songArtist
  ),
  type: PropTypes.oneOf(
      [GameType.ARTIST, GameType.GENRE]
  ).isRequired
};

export {questionArtist};
