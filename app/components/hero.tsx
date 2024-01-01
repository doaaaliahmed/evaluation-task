"use client";

import moment from "moment";
import { FC } from "react";
import { motion } from "framer-motion";
import { itemVariant, listVariant } from "@/core/framerVariables";
import { IEvent } from "@/core/modal";

type IProps = {
  firstEvent: IEvent;
};

const Hero: FC<IProps> = ({ firstEvent }) => {
  return (
    <div className="relative hero-bg  min-h-screen w-screen ">
      {firstEvent && (
        <>
          <motion.div
            variants={listVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-11/12 px-8 pt-32 md:px-20 sm:max-w-xl lg:max-w-3xl "
          >
            <motion.p
              variants={itemVariant}
              className=" text-md xl:text-2xl text-gray-300 "
            >
              <span>
                {moment(firstEvent.date.seconds * 1000).format("MMMM Do YYYY")}
              </span>
              <span>, {firstEvent.location}</span>
            </motion.p>
            <motion.div
              variants={itemVariant}
              className="h-0.5 w-24 bg-white text-white my-6"
            ></motion.div>
            <motion.h1
              variants={itemVariant}
              className="mb-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black capitalize text-gray-200 "
            >
              {firstEvent.title}
            </motion.h1>
            <motion.button
              variants={itemVariant}
              className="text-white bg-indigo-900 hover:bg-indigo-600 border-0 outline-none text-xl py-3 px-6 rounded-md"
            >
              Get Started
            </motion.button>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Hero;
