import classes from "./NewMeetupFrom.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

const NewMeetupFrom = ({ onAddMeetup }) => {
  const titleRef = useRef(null),
    imageRef = useRef(null),
    addressRef = useRef(null),
    descriptionRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };

    onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Address</label>
          <input type='text' required id='address' ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Description</label>
          <textarea required id='description' rows='5' ref={descriptionRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupFrom;
