import AllMeetUp from "./pages/AllMeetUp";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
