import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import steps from '@/data/steps.data.json';
import Content1 from '@/components/Content1/Content1';
import Content2 from '@/components/Content2/Content2';

export default function Home() {
  const contents = [<Content1 />, <Content2 />];

  console.log(steps);
  return (
    <div id='smoother-container'>
      <Head>
        <title>Facundo Chavez | PORTFOLIO 2023</title>
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
      </Head>
      <HeroSection />
      {steps.map((step, index) => {
        return <ContentSection key={index} step={step} content={contents[index]} />;
      })}
    </div>
  );
}
