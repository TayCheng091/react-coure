import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_DATA } from "../Data/dummy-data";

const AllMeetUp = () => {
  return (
    <div>
      <h1>All Meet Up</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </div>
  );
};

export default AllMeetUp;
