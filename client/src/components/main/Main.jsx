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
    {component: MainMatch, name: 'match' },
    {component: MainPlayers, name: 'players' },
    {component: MainManage, name: 'manage' },
    {component: MainCommunity, name: 'community' },
  ];

  return (
    <main id='main'>
      <div className="container">
        <Title title="Welcome to the sunrise soccer team" backgroundImg='./img/bg-main.png'/>
        {components.map((item, id) => {
          const Component = item.component;
          return (
            <div className={`section ${item.name}`} key={id}>
              <AnimatedComponent>
                <Component />
              </AnimatedComponent>
            </div>
          );
        })}
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
        threshold: 0, // 10% 정도 보이면 트리거
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
      style={{ width: '100%', height: `100%` }}
    >
      {children}
    </motion.div>
  );
};

export default Main;