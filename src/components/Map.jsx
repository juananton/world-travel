import { useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();

  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');

  return (
    <div className={styles.mapContainer}>
      <div>
        {lat}, {lng}
      </div>
      <button onClick={() => setSearchParams({ lat: 50, lng: 30 })}>
        Change position
      </button>
    </div>
  );
}

export default Map;
