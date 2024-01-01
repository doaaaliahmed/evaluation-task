"use client";
import { FC } from "react";
import Image from "next/image";
import moment from "moment";
import { itemVariant, listVariant } from "@/core/framerVariables";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { IEvent } from "@/core/modal";

type IProps = {
  events: IEvent[];
};

const Events: FC<IProps> = ({ events }) => {
  const router = useRouter();
  const path = usePathname();
  const openEventDetail = (id: string) => {
    router.push(`/event/${id}`);
  };
  return (
    <section className="py-14 px-4 sm:px-14">
      <div className=" mx-auto px-4 md:px-8 ">
        <motion.div
          variants={listVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-16"
        >
          {events?.map((ev) => (
            <motion.div
              onClick={() => openEventDetail(ev.id)}
              variants={itemVariant}
              key={ev.title}
              whileHover={{
                scale: 1.02,
              }}
              className="cursor-pointer shadow-2xl  rounded-md py-8 px-4 md:px-8 grid  grid-cols-1 gap-6 md:grid-cols-4"
            >
              <Image
                src={`/${ev.speaker}.webp`}
                className="object-cover w-full h-52 col-span-1 bg-center bg-gray-500 rounded-md"
                alt="Kutty"
                loading="lazy"
                width={300}
                height={300}
              />
              <div className="col-span-1 md:col-span-3">
                <p className="mb-2 -mt-1 text-sm font-normal text-gray-500 ">
                  {moment(ev.date.seconds * 1000).format("MMMM Do YYYY")}
                </p>
                <h2 className="mb-2 text-2xl font-extrabold leading-snug text-purple-700">
                  {ev.title}
                </h2>
                <p className="mb-3 text-base font-normal text-gray-500">
                  {ev.desc}
                </p>
                <p className="mb-3  font-normal">
                  <span>By </span>{" "}
                  <span className="text-base text-purple-700">
                    {ev.speaker}
                  </span>
                </p>
                <p className="mb-3 text-sm font-normal text-gray-500 flex items-center justify-start gap-2">
                  <span>
                    <Image
                      src="/location-pin-svgrepo-com.svg"
                      width={20}
                      height={20}
                      alt="loc-icon"
                    />
                  </span>{" "}
                  <span>{ev.location}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default Events;
