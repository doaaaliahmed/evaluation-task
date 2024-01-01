"use client";
import { database } from "@/config/firebase";
import {
  updateDoc,
  arrayUnion,
  arrayRemove,
  doc,
  Timestamp,
  getDoc,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Speakers from "./components/Speakers";
import Events from "./components/Events";
import { IEvent } from "@/core/modal";
import Loader from "./components/Loader";

const Home = () => {
  const [events, setEvents] = useState<IEvent[]>();

  // const saveNotes = async () => {
  //   const events = doc(database, "events", "eventList");
  //   await updateDoc(events, {
  //     ev: arrayUnion({
  //       title: "Music world Tour",
  //       desc: "Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content. It helps designers plan out where the content will sit, without needing to wait for the content to be written and approved.",
  //       location: "Germany, Berlin",
  //       date: Timestamp.fromDate(new Date("August 19, 2024 9:00")),
  //       speaker: "Lysa sandiago",
  //     }),
  //   });
  // };

  useEffect(() => {
    const getEvent = async () => {
      const events = doc(database, "events", "eventList");
      const docSnap = await getDoc(events);
      if (docSnap.exists()) {
        setEvents(docSnap.data().ev);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getEvent();
  }, []);

  return (
    <>
      {!events ? (
        <Loader />
      ) : (
      
        <main className="w-full !overflow-x-hidden">
          <Navbar />
          <Hero firstEvent={events.at(0)!} />
          <Speakers />
          <Events events={events!} />
          {/* <button onClick={saveNotes}>AddEvent</button> */}
        </main>
      )}
    </>
  );
};

export default Home;
