import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateLoginScreenRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateLoginScreenRoute = (props: PrivateLoginScreenRouteProps): JSX.Element => {
  const { authorizationStatus, children } = props;

  return (
    authorizationStatus !== AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
};

export default PrivateLoginScreenRoute;
