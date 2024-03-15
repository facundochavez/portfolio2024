import TextBox from "@/components/TextBox/TextBox";
import styles from "./StoreLayout.content.module.scss";
import milestones from "@/data/milestones.data.json";
import { useEffect, useRef, useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useInView, useAnimation } from "framer-motion";

const StoreLayout = () => {
  const { viewportWidth } = useIsMobile();
  const [tailLength, setTailLength] = useState(0);
  const topTextStoreRef = useRef();
  const bottomContainerStoreRef = useRef();

  const isInView = useInView(topTextStoreRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("mugVisible");
    } else {
      controls.start("mugHidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  useEffect(() => {
    const handleTailLength = () => {
      const topTextRect = topTextStoreRef.current.getBoundingClientRect();
      const bottomContainerRect =
        bottomContainerStoreRef.current.getBoundingClientRect();

      const newTailLength = bottomContainerRect.top - topTextRect.bottom + 15;
      setTailLength(newTailLength);
    };
    setTimeout(() => {
      handleTailLength();
    }, 100);
    addEventListener("resize", handleTailLength);

    return () => {
      removeEventListener("resize", handleTailLength);
    };
  }, []);

  //// COMPONENT
  return (
    <div className={styles.store}>
      <div className={styles.store__top_container}>
        <motion.div
          className={styles.store__top_container__top_text}
          ref={topTextStoreRef}
        >
          <motion.div
            className={styles.store__top_container__top_text__mug_video}
            variants={{ mugHidden: { opacity: 0 }, mugVisible: { opacity: 1 } }}
            initial="mugHidden"
            animate={controls}
            transition={{ delay: viewportWidth < 900 ? 0.15 : 0.25, duration: 1 }}
          >
            <video muted autoPlay loop src="/videos/video-taza.webm" />
          </motion.div>
          <TextBox
            milestone={milestones.find((milestone) => milestone.id === "store")}
            tailLength={tailLength}
          />
        </motion.div>
        <div className={styles.store__top_container__twm_ad}>
          <a href="https://threewordsmug.com/" target="_blank">
            <motion.div className={styles.store__top_container__twm_ad__video}>
              <video
                muted
                autoPlay
                loop
                src="/videos/video-twm-marketing.webm"
              />
            </motion.div>
          </a>
        </div>
      </div>
      <motion.div
        className={styles.store__twm_website}
        ref={bottomContainerStoreRef}
      >
        <a href="https://threewordsmug.com/" target="_blank">
          <div className={styles.store__twm_website__video}>
            {viewportWidth < 500 ? (
              <video muted autoPlay src="/videos/video-twm-mobile.webm" />
            ) : viewportWidth < 650 ? (
              <video muted autoPlay src="/videos/video-twm-tablet.webm" />
            ) : (
              <video muted autoPlay src="/videos/video-twm-desktop.webm" />
            )}
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default StoreLayout;
