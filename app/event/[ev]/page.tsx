"use client";
import Loader from "@/app/components/Loader";
import Navbar from "@/app/components/Navbar";
import { database } from "@/config/firebase";
import { IEvent } from "@/core/modal";
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import Image from "next/image";

import { useEffect, useState } from "react";

const EventDetail = ({ params }: { params: { ev: string } }) => {
  const [event, setEvent] = useState<IEvent>();

  useEffect(() => {
    const getEvent = async () => {
      const events = doc(database, "events", "eventList");
      const docSnap = await getDoc(events);
      if (docSnap.exists()) {
        setEvent(docSnap.data().ev.find((el: IEvent) => el.id === params.ev));
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getEvent();
  }, []);

  return (
    <>
      {!event ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="bg-fixed event bg-center bg-cover bg-no-repeat min-h-screen w-full ">
            <section className="	 px-4 pt-32 w-full">
              <div className="w-full md:ml-20 sm:w-9/12 lg:w-8/12 xl:w-6/12 flex flex-col gap-2">
                <h1 className="mb-3 text-3xl lg:text-6xl text-gray-300 font-bold leading-tight">
                  {event.title}
                </h1>
                <p className="flex items-center gap-2 text-sm">
                  <span>
                    <Image
                      src="/location-pin-svgrepo-com.svg"
                      width={15}
                      height={15}
                      alt="loc-icon"
                    />
                  </span>
                  <span>{event.location}</span>
                </p>
                <div className="flex items-center gap-6">
                  <p className="flex items-center gap-2">
                    <Image
                      src="/date-range-svgrepo-com.svg"
                      width={15}
                      height={15}
                      alt="loc-icon"
                    />

                    <span>
                      {moment(event.date.seconds * 1000).format("MMMM Do YYYY")}
                    </span>
                  </p>
                  <span>{moment(event.date.seconds * 1000).format("LT")}</span>
                </div>

                <p className="mb-5 text-md  md:text-lg">{event.desc}</p>

                <div className="avatar-group -space-x-4 ">
                  <div className="avatar">
                    <div className="w-10">
                      <Image
                        width={70}
                        height={70}
                        alt="user"
                        src="/Lysa sandiago.webp"
                      />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10">
                      <Image
                        width={70}
                        height={70}
                        alt="user"
                        src="/Martiana dialan.webp"
                      />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10">
                      <Image
                        width={70}
                        height={70}
                        alt="user"
                        src="/Micheal colorand.webp"
                      />
                    </div>
                  </div>
                  <div className="avatar">
                    <div className="w-10">
                      <Image
                        width={70}
                        height={70}
                        alt="user"
                        src="/Vicky tanson.webp"
                      />
                    </div>
                  </div>
                  <div className="avatar placeholder">
                    <div className="w-10 bg-neutral text-neutral-content">
                      {/* <span>+ {event.users.length}</span> */}
                      <span>+5</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
};

export default EventDetail;
