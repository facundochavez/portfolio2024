import Head from 'next/head';
import HeroLayout from '@/pages/layouts/Hero.layout/Hero.layout';
import LazyMilestoneLayout, {
  MilestoneLayout
} from '@/pages/layouts/Milestone.layout/Milestone.layout';
import LazyClosingLayout from '@/pages/layouts/Closing.layout/Closing.layout';
import milestones from '@/data/milestones.data.json';
import Header from '@/components/Header/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import DottedBackground from '@/components/DottedBackground/DottedBackground';
import ScrollMessage from '@/components/ScrollMessage/ScrollMessage';
import { useEffect } from 'react';

const Home = () => {
  return (
    <div id='smoother-container'>
      <Head>
        <title>Facundo Chavez | PORTFOLIO 2023</title>
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'></meta>
      </Head>
      <DottedBackground />
      <Header />
      <HeroLayout />
      <MilestoneLayout milestone={milestones.find((milestone) => milestone.id === 'brands')}/>
      {milestones.map((milestone, index) => {
        if (milestone.id !== 'back-end' && milestone.id !== 'brands') {
          return (
            <div key={index}>
              <LazyMilestoneLayout index={index} milestone={milestone} />
            </div>
          );
        }
      })}
      <LazyClosingLayout />
      <ScrollToTopButton />
      <ScrollMessage />
    </div>
  );
};

export default Home;
