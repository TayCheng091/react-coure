import NewMeetupFrom from "../components/meetups/NewMeetupFrom";

const NewMeetUp = () => {
  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-get-start-42027-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <section>
      <h1>NewMeetUp</h1>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetUp;
