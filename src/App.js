import AllMeetUp from "./pages/AllMeetUp";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";
import MainNavigation from "./components/layout/MainNavigation";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path='/' exact={true}>
          <AllMeetUp />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
