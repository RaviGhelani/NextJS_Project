import MeetupDetail from "../../components/meetups/MeetupDetail";
import mongoose from "mongoose";
import MeetUp from "../../model/meetup";
import { Fragment } from 'react';
import Head from 'next/head';

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const MONGODB_URI =
    "mongodb+srv://Ravi1411:Ravi1411@nodejs.19qxclq.mongodb.net/meetup?retryWrites=true&w=majority";

  mongoose
    .connect(MONGODB_URI)
    .then((result) => {
      console.log("connected one...");
    })
    .catch((err) => {
      console.log(err);
    });

  let meetups;

  try {
    meetups = await MeetUp.find({}, { _id: 1 });
  } catch (err) {
    console.log(err);
  }

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  const MONGODB_URI =
    "mongodb+srv://Ravi1411:Ravi1411@nodejs.19qxclq.mongodb.net/meetup?retryWrites=true&w=majority";

  mongoose
    .connect(MONGODB_URI)
    .then((result) => {
      console.log("connected deatils...");
    })
    .catch((err) => {
      console.log(err);
    });

  let selectedMeetup;

  try {
    selectedMeetup = await MeetUp.findById(meetupId);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;
