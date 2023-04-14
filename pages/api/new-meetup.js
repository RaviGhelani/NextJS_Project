import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import MeetUp from "../../model/meetup";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

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

      try{
        const meetup = new MeetUp(data);
        await meetup.save()
        res.status(201).json({ message: 'Meetup inserted!' });
      }catch(err){
        res.send(err)
      }


  }
}

export default handler;
