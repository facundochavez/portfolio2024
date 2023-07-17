import TextBox from '@/components/TextBox/TextBox';
import styles from './YouTubeParallax.content.module.scss';
import milestones from '@/data/milestones.data.json';

const YoutubeParallax = ({isMobile}) => {

  //// COMPONENT
  return <div className={styles.youtube_parallax}>
    <TextBox text={milestones.filter((milestone) => milestone.id === 'youtube')[0].topText} />
    <div className={styles.youtube_parallax__channel}></div>
    <div className={styles.youtube_parallax__website}></div>
  </div>;
};

export default YoutubeParallax;
