import React from 'react';
import PropTypes from 'prop-types';


import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import AuthScreen from '../auth-screen/auth-screen.jsx';
import ResultSuccess from '../result-success/result-success.jsx';
import GameOver from '../game-over/game-over.jsx';
import QuestionArtist from '../question-artist/question-artist.jsx';
import QuestionGenre from '../question-genre/question-genre.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = (props) => {
  const {errorsCount} = props;
  const styles = {
    svg: {
      position: `absolute`,
      left: `-1200em`
    },
    border0: {
      borderWidth: 0
    },
    circle: {
      filter: `url('#blur')`,
      transform: [
        {scaleY: -1},
        {rotate: `-90deg`}
      ],
      transformOrigin: `center`
    }
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <AuthScreen styles={styles} />
        </Route>
        <Route exact path="/result">
          <ResultSuccess styles={styles} />
        </Route>
        <Route exact path="/lose">
          <GameOver styles={styles} />
        </Route>
        <Route exact path="/dev-artist">
          <QuestionArtist styles={styles}/>
        </Route>
        <Route exact path="/dev-genre">
          <QuestionGenre styles={styles}/>
        </Route>
        <Route exact path="/">
          <WelcomeScreen errorsCount={errorsCount} />
        </Route>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  errorsCount: PropTypes.number.isRequired,
};

export default App;
