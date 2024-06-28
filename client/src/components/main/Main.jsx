import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Title from "../common/Title";
import MainPlayers from "./players/MainPlayers";
import MainMatch from "./match/MainMatch";
import MainManage from "./manage/MainManage";
import MainCommunity from "./community/MainCommunity";
import './Main.scss';

const Main = () => {
  const components = [
    { id: 1, component: MainMatch, name: 'match' },
    { id: 2, component: MainPlayers, name: 'players' },
    { id: 3, component: MainManage, name: 'manage' },
    { id: 4, component: MainCommunity, name: 'community' },
  ];

  return (
    <main id='main'>
      <div className="container">
        <Title title="Welcome to the sunrise soccer team" />
        <div className="section">
          {components.map((item) => {
            const Component = item.component;
            return (
              <AnimatedComponent key={item.id}>
                <Component />
              </AnimatedComponent>
            );
          })}
        </div>
      </div>
    </main>
  );
};

const AnimatedComponent = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible');
          } else {
            controls.start('hidden');
          }
        });
      },
      {
        threshold: 0.1, // 10% 정도 보이면 트리거
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
        y: { duration: 1 },
    }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default Main;