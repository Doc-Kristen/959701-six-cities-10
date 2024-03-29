import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getUserData } from '../../store/user-process/selectors';
import { getFavoritesOffers } from '../../store/offer-data/selectors';

const Header = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const favoritesOffers = useAppSelector(getFavoritesOffers);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo />
          {
            authorizationStatus === AuthorizationStatus.Auth ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={userData?.avatarUrl}
                          style={{ 'borderRadius': '100px' }}
                          alt='User avatar'
                        >
                        </img>
                      </div>
                      <span className="header__user-name user__name">
                        {userData?.name}
                      </span>
                      <span className="header__favorite-count">{favoritesOffers.length}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link"
                      to={AppRoute.Main}
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>
          }
        </div>
      </div>
    </header>
  );

};

export default Header;
