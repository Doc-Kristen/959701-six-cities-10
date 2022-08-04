import '../loading/loading.css';

const LoadingScreen = (): JSX.Element => (
  <div>
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  </div>
);

export default LoadingScreen;
