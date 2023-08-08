import styles from './LenguageSwitcher.module.scss';
import { ConfigProvider, Switch, theme } from 'antd';
import { useGlobalContext } from '@/context/global.context';

const LenguageSwitcher = () => {
  const {lenguage, setLenguage} = useGlobalContext();

  const toggleLenguage = () => {
    if (lenguage === 'en') {
      setLenguage('es');
    } else {
      setLenguage('en');
    }
  };

  //// COMPONENT
  return (
    <div className={styles.lenguage_switcher} onClick={toggleLenguage} >
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm
        }}>
        <span>{lenguage === 'en' ? 'En' : 'Es'}</span>
        <Switch defaultChecked checked={lenguage === 'en'} onChange={toggleLenguage} />
      </ConfigProvider>
    </div>
  );
};

export default LenguageSwitcher;
