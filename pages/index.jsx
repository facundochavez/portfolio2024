import Head from 'next/head';
import HeroLayout from './layouts/Hero.layout/Hero.layout';
import MilestoneLayout from './layouts/Milestone.layout/Milestone.layout';
import milestones from '@/data/milestones.data.json';
import BrandsCarousel from './contents/BrandsCarousel.content/BrandsCarousel.content';
import YouTubeParallax from './contents/YouTubeParallax.content/YouTubeParallax.content';
import PrototypesCarousel from './contents/PrototypesCarousel.content/PrototypesCarousel.content';
import StartCodingVideo from './contents/StartCodingVideo.content/StartCodingVideo.content';
import FrontendVideo from './contents/FrontendVideo.content/FrontendVideo.content';
import BackendVideo from './contents/BackendVideo.content/BackendVideo.content';
import ClosingLayout from './layouts/Closing.layout/Closing.layout';
import Header from '@/components/Header/Header';
import ScrollToTopButton from '@/components/ScrollToTopButton/ScrollToTopButton';
import DottedBackground from '@/components/DottedBackground/DottedBackground';

const Home = () => {
  const contents = [
    <BrandsCarousel />,
    <YouTubeParallax />,
    <PrototypesCarousel />,
    <StartCodingVideo />,
    <FrontendVideo />
  ];

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
      {contents.map((content, index) => {
        if (milestones[index].id !== 'back-end') {
          return <MilestoneLayout key={index} milestone={milestones[index]} content={content} />;
        }
      })}
      <ClosingLayout />
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
