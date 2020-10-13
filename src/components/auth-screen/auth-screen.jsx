import React from 'react';

const AuthScreen = () => {

  return (
    <React.Fragment>
      <main className="app">
        <svg xmlns="http://www.w3.org/2000/svg" className='app__svg'>
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
          <section className="login">
            <div className="login__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
            <h2 className="login__title">Вы настоящий меломан!</h2>
            <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
            <form className="login__form" action="">
              <p className="login__field">
                <label className="login__label" htmlFor="name">Логин</label>
                <input className="login__input" type="text" name="name" id="name" />
              </p>
              <p className="login__field">
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input" type="text" name="password" id="password" />
                <span className="login__error">Неверный пароль</span>
              </p>
              <button className="login__button button" type="submit">Войти</button>
            </form>
            <button className="replay" type="button">Сыграть ещё раз</button>
          </section>
        </section>
      </main>
      <footer className="footer">
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">
          <img src="img/icon-cc.png" alt="Creative Commons License" width="88" height="31" className="border0"/>
        </a>
        <section className="copyright">
          <a className="copyright__logo" href="https://htmlacademy.ru"><img src="img/logo-htmla.svg" width="144" height="49" alt="HTML Academy" /></a>
          <p className="copyright__text">Сделано в <a className="copyright__link" href="https://htmlacademy.ru">HTML Academy</a></p>
        </section>
      </footer>
    </React.Fragment>
  );
};


export default AuthScreen;
