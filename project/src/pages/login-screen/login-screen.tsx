import { Link } from 'react-router-dom';
import { AppRoute, cities, passwordRegExp, SortingType } from '../../const';
import Logo from '../../components/logo/logo';
import { useRef, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getRandomCity } from '../../utils';
import { selectCity, selectDefaultSortyngType } from '../../store/offer-process/offer-process';

const LoginScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const randomCity = getRandomCity(cities);

  const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    let validity = '';

    switch (true) {
      case /\s/g.test(target.value):
        validity = 'Enter a password without spaces';
        break;
      case !passwordRegExp.test(target.value):
        validity = 'Enter at least one letter and one digit';
        break;
    }

    target.setCustomValidity(validity);
    target.reportValidity();
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
      navigate(AppRoute.Main);
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input"
                  type="email"
                  name="email"
                  id="name"
                  placeholder="Email"
                  ref={loginRef}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  ref={passwordRef}
                  onChange={(evt) => {
                    handleInputChange(evt);
                  }}
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link"
                to={AppRoute.Main}
                onClick={() => {
                  dispatch(selectCity(randomCity));
                  dispatch(selectDefaultSortyngType(SortingType.Popular));
                }}
              >
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;
