import Head from 'next/head';
import HeroLayout from '@/pages/layouts/Hero.layout/Hero.layout';
import MilestoneLayout from '@/pages/layouts/Milestone.layout/Milestone.layout';
import ClosingLayout from '@/pages/layouts/Closing.layout/Closing.layout';
import milestones from '@/data/milestones.data.json';
import Header from '@/components/Header/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import DottedBackground from '@/components/DottedBackground/DottedBackground';

const Home = () => {

  return (
    <div id='smoother-container'>
      <Head>
        <title>Facundo Chavez | PORTFOLIO 2023</title>
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
      </Head>
      <DottedBackground />
      <Header />
      <HeroLayout />
      {milestones.map((milestone, index) => {
        if (milestone.id !== 'back-end') {
          return (
            <div key={index}>
              <MilestoneLayout index={index} milestone={milestone} />
            </div>
          );
        }
      })}
      <ClosingLayout />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
