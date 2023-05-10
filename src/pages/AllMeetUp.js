import { DUMMY_DATA } from "../Data/dummy-data";

const AllMeetUp = () => {
  return (
    <div>
      AllMeetUp
      <ul>
        {DUMMY_DATA.map((data) => {
          return <li key={data.id}>{data.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default AllMeetUp;
