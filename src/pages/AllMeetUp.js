import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetUp = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-get-start-42027-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);

        const meetups = [];

        for (let key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }

        setMeetupData(meetups);
      });
  }, []);

  if (isLoading) return <section>Loading......</section>;

  return (
    <div>
      <h1>All Meet Up</h1>
      <MeetupList meetups={meetupData} />
    </div>
  );
};

export default AllMeetUp;
