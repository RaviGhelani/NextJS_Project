import classes from './MeetupDetail.module.css';
import { useRouter } from "next/router";

function MeetupDetail(props) {
  const router = useRouter()
  console.log(router);

  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default MeetupDetail;