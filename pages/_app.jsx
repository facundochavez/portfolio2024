import GlobalProvider from '@/context/global.context';
import '@/styles/globals.scss';
import { ConfigProvider } from 'antd';

export default function App({ Component, pageProps }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#ffffff'
        }
      }}>
      <GlobalProvider>
        <Component {...pageProps} />
      </GlobalProvider>
    </ConfigProvider>
  );
}
