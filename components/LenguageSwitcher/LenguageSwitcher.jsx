import styles from './LenguageSwitcher.module.scss';
import { ConfigProvider, Dropdown, Switch, theme } from 'antd';
import { useGlobalContext } from '@/context/global.context';
import { CaretDownFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const LenguageSwitcher = ({ isDropdownShow }) => {
  const { lenguage, setLenguage } = useGlobalContext();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleDropDownOpen = () => {
      setDropdownOpen(false);
    };

    window.addEventListener('scroll', handleDropDownOpen);

    return () => {
      window.removeEventListener('scroll', handleDropDownOpen);
    };
  }, []);

  /*   const toggleLenguage = () => {
    if (lenguage === 'en') {
      setLenguage('es');
    } else {
      setLenguage('en');
    }
  }; */

  const items = [
    {
      key: '1',
      label: lenguage === 'en' ? 'English' : 'Inglés',
    },
    {
      key: '2',
      label: lenguage === 'en' ? 'Spanish' : 'Español',
    },
  ];

  //// COMPONENT
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: lenguage === 'en' ? ['1'] : ['2'],
          style: {
            width: '100px',
            fontSize: '20px',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: '10px',
            fontSize: '20px !important',
            opacity: isDropdownShow ? '1' : '0',
            transition: 'all 0.3s ease',
          },
          onClick: ({ key }) => {
            if (key === '1') {
              setLenguage('en');
              setDropdownOpen(false);
            } else if (key === '2') {
              setLenguage('es');
              setDropdownOpen(false);
            }
          },
        }}
        trigger={['click']}
        placement='bottomRight'
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div
          className={styles.lenguage_switcher} /* onClick={toggleLenguage} */
        >
          <span>{lenguage === 'en' ? 'Eng' : 'Esp'}</span>
          <CaretDownFilled
            style={{ scale: '0.8', marginTop: '2px', marginLeft: '-2px' }}
          />
          {/* <Switch defaultChecked checked={lenguage === 'en'} onChange={toggleLenguage} /> */}
        </div>
      </Dropdown>
    </ConfigProvider>
  );
};

export default LenguageSwitcher;
