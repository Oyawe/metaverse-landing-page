/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable quotes */

"use client";

import { motion } from "framer-motion";

import { TypingText, TitleText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10 `}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="object-cover w-full h-full" />
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute sm:bottom-20 top-24 sm:right-24 right-72 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-96 left-[17%] w-[125px] h-[100px] p-[6px] rounded-2xl bg-[#5d66a0]">
          <img src="card.png" alt="people" className="w-full h-full" />
        </div>
        <div className="absolute top-20 sm:right-[17%] right-[13%] w-[125px] h-[100px] p-[6px] rounded-2xl bg-[#5d66a0]">
          <img src="card.png" alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
