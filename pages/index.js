import MeetupList from "../components/meetups/MeetupList";
import mongoose from "mongoose";
import MeetUp from "../model/meetup";
import { Fragment } from 'react';
import Head from 'next/head';

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API
  const MONGODB_URI =
    "mongodb+srv://Ravi1411:Ravi1411@nodejs.19qxclq.mongodb.net/meetup?retryWrites=true&w=majority";

  mongoose
    .connect(MONGODB_URI)
    .then((result) => {
      console.log("connected...");
    })
    .catch((err) => {
      console.log(err);
    });

  let meetups;

  try {
    meetups = await MeetUp.find();
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
