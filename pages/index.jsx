import Head from 'next/head';
import HeroLayout from '@/pages/layouts/Hero.layout/Hero.layout';
import MilestoneLayout from '@/pages/layouts/Milestone.layout/Milestone.layout';
import ClosingLayout from '@/pages/layouts/Closing.layout/Closing.layout';
import milestones from '@/data/milestones.data.json';
import Header from '@/components/Header/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import DottedBackground from '@/components/DottedBackground/DottedBackground';

const Home = () => {
  /*   const contents = [
    <BrandsCarousel />,
    <YouTubeParallax />,
    <PrototypesCarousel />,
    <StartCodingVideo />,
    <FrontendVideo />
  ]; */

  /*   const texts = [
    {
      topText: <BrandsTopText />
    },
    {
      topText: <YoutubeTopText />
    },
    {
      bottomText: <PrototypesBottomText />
    },
    {
      topText: <StartCodingTopText />,
      bottomText: <StartCodingBottomText />
    },
    {
      topText: <FrontendTopText />
    },
    {
      topText: <BackendTopText />,
      bottomText: <BackendBottomText />
    }
  ]; */

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
              <MilestoneLayout  key={index} index={index} milestone={milestone} />
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
