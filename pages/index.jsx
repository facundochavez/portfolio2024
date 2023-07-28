import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import HeroSection from './sections/Hero.section/Hero.section';
import MilestoneSection from './sections/Milestone.section/Milestone.section';
import milestones from '@/data/milestones.data.json';
import BrandsCarousel from './contents/BrandsCarousel.content/BrandsCarousel.content';
import YouTubeParallax from './contents/YouTubeParallax.content/YouTubeParallax.content';
import { useEffect, useState } from 'react';
import PrototypesCarousel from './contents/PrototypesCarousel.content/PrototypesCarousel.content';
import StartCodingVideo from './contents/StartCodingVideo.content/StartCodingVideo.content';
import FrontendVideo from './contents/FrontendVideo.content/FrontendVideo.content';
import BackendVideo from './contents/BackendVideo.content/BackendVideo.content';
import ClosingSection from './sections/Closing.section/Closing.section';

export default function Home() {
  const contents = [
    <BrandsCarousel />,
    <YouTubeParallax />,
    <PrototypesCarousel />,
    <StartCodingVideo />,
    <FrontendVideo />
  ];

  return (
    <div id='smoother-container'>
      <Head>
        <title>Facundo Chavez | PORTFOLIO 2023</title>
        <link rel='icon' href='/icons/favicon.svg' type='image/svg+xml' />
      </Head>
      <HeroSection />
      {milestones.map((milestone, index) => {
        if (milestone.id !== 'back-end') {
          return <MilestoneSection key={index} milestone={milestone} content={contents[index]} />;
        }
      })}
      <ClosingSection />
    </div>
  );
}
