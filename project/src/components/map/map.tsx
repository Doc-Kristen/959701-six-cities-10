import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { getCityData } from '../../utils';
import { useAppSelector } from '../../hooks';
import { Offers, Offer } from '../../types/offers';
import { getSelectedCity } from '../../store/offer-process/selectors';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  offers: Offers | undefined;
  selectedOffer?: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const Map = (props: MapProps): JSX.Element => {
  const { selectedOffer, offers } = props;
  const mapRef = useRef(null);
  const selectedCity = useAppSelector(getSelectedCity);
  const city = getCityData(offers, selectedCity);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map && offers) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
    return () => {
      map?.eachLayer((it) => {
        if (it.getPane()?.classList.contains('leaflet-marker-pane')) {
          it.remove();
        }
      });
    };
  }, [map, offers, selectedOffer]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
};

export default Map;
