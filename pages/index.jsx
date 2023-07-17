import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import HeroSection from './sections/Hero.section/Hero.section';
import MilestoneSection from './sections/Milestone.section/Milestone.section';
import milestones from '@/data/milestones.data.json';
import BrandsCarousel from './contents/BrandsCarousel.content/BrandsCarousel.content';
import YouTubeParallax from './contents/YouTubeParallax.content/YouTubeParallax.content';
import { useEffect, useState } from 'react';


export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleIsMobile = () => {
      if (window.innerWidth < 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleIsMobile();

    addEventListener('resize', handleIsMobile);

    return () => {
      removeEventListener('resize', handleIsMobile);
    };
  }, []);

  const contents = [<BrandsCarousel isMobile={isMobile}/>, <YouTubeParallax isMobile={isMobile}/>];

  return (
    <div id='smoother-container'>
      <Head>
        <title>Facundo Chavez | PORTFOLIO 2023</title>
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
      </Head>
      <HeroSection />
      {milestones.map((milestone, index) => {
        return <MilestoneSection key={index} milestone={milestone} content={contents[index]} isMobile={isMobile} />;
      })}
    </div>
  );
}
