import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//public components
import NavBar from './components/public/NavBar'
import Home from './components/public/Home'
import Footer from './components/public/Footer'
import Email from './components/public/Email'

//users components
import SingUp from './components/users/SingUp'
import LogIn from './components/users/LogIn'
import AuthRoute from './components/users/AuthRoute'

//organizers components
import OrganizerProfile from './components/organizers/OrganizerProfile'

// Owner components
import OwnerProfile from './components/eventOwner/OwnerProfile'

//events components
import ShowOneEvent from './components/events/ShowOneEvent'
import AllEvents from './components/events/AllEvents'

//admin
import AdminLogIn from './components/admin/LogIn'
import AdminAuthRoute from './components/admin/AdminAuthRoute'

//applying form 
import ApplyingFormOwner from './components/applyingForm/ApplyingFormOwner'
import ApplyingFormOrgnizer from './components/applyingForm/ApplyingFormOrgnizer'
import AppliedOrganizers from './components/applyingForm/AppliedOrganizers'
import MyAppliedForm from './components/applyingForm/MyAppliedForm'


function App() {
  const [selectEvent, setSelectEvent] = useState([])
  const [selectOrganizer, setSelectOrganizer] = useState([])
  // const [editUser, setEditUser] = useState({});
  const [dataLoading, setDataloading] = useState(false)
  const [auth, setAuth] = useState({ currentUser: null, isLoggedIn: false });

  const userLogin = () => {
    if (localStorage.jwtToken) {
      const jwtToken = localStorage.jwtToken;
      const currentUser = jwt_decode(jwtToken, "SECRET").user;
      setAuth({ currentUser, isLoggedIn: true });
    } else {
      setAuth({ currentUser: null, isLoggedIn: false });
    }

    setDataloading(true)
  };

  useEffect(userLogin, []);

  return (
    <div>
      { dataLoading &&

        <Router>
          {auth.isLoggedIn ?
            <>
              {auth.currentUser.role == "owner" ? <>
              <Route exact path="/addApplying/:id">
                  <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} auth={auth} />
                  <ApplyingFormOwner setSelectEvent={setSelectEvent} auth={auth} />
                  <Footer />
                </Route>

                <Route exact path="/appliedOrganizers/:id">
                  <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} auth={auth} />
                  <AppliedOrganizers setSelectEvent={setSelectEvent} auth={auth} />
                  <Footer />
                </Route>

                {/* Owner Pages */}
                <Route exact path="/MyEvents">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <AuthRoute setSelectEvent={setSelectEvent} auth={auth} user={auth.currentUser} />
                  <Footer />
                </Route>


                {/* ONLY one page (edit&event) */}
                <Route path="/editEvent/:id">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <AuthRoute auth={auth} />
                  <Footer />
                </Route>

                <Route path="/addEvent">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <AuthRoute auth={auth} user={auth.currentUser} />
                  <Footer />
                </Route>


                {/*      <Route path="/AllOrganizers/:id">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <ShowOneOrganizer
                    setAuth={setAuth}
                    user={auth.currentUser}
                    selectOrganizer={selectOrganizer} />
                  <Footer />
                </Route>
 */}
 
{/*                 <Route exact path="/AllOrganizers">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <AllOrganizers setSelectOrganizer={setSelectOrganizer} />
                  <Footer />
                </Route> */}

                <Route path="/OwnerProfile">
                  <NavBar auth={auth} loginCallback={userLogin} />
                  <OwnerProfile
                    setAuthCallBack={setAuth}
                    user={auth.currentUser}
                  />
                  <Footer />
                </Route>

              </> : <>
                  {/* Organizer Pages */}

                  <Route exact path="/MyAppliedForm">
                    <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} auth={auth} />
                    <MyAppliedForm setSelectEvent={setSelectEvent} auth={auth} />
                    <Footer />
                  </Route>

                  <Route exact path="/organizerApplying/:id">
                    <NavBar auth={auth} loginCallback={userLogin} />
                    {/* <NavBar isLoggedIn={auth.isLoggedIn} loginCallback={userLogin} /> */}
                    <ApplyingFormOrgnizer setSelectEvent={setSelectEvent} auth={auth} />
                    <Footer />
                  </Route>

                  {/*         <Route exact path="/applying">
                    <NavBar auth={auth} loginCallback={userLogin} />
                    <ApplyingForm setSelectEvent={setSelectEvent} auth={auth} user={auth.currentUser} />
                    <Footer />
                  </Route>  */}

                  <Route path="/OrganizerProfile">
                    <NavBar auth={auth} loginCallback={userLogin} />
                    <OrganizerProfile
                    setAuthCallBack={setAuth}
                    user={auth.currentUser}
                    />
                    <Footer />
                  </Route>

                </>}

              <Route path="/AllEvents/:id">
                <NavBar auth={auth} loginCallback={userLogin} />
                <ShowOneEvent
                  setAuth={setAuth}
                  user={auth.currentUser}
                  selectEvent={selectEvent} />
              </Route>

              <Route exact path="/AllEvents">
                <NavBar auth={auth} loginCallback={userLogin} />
                <AllEvents auth={auth} setSelectEvent={setSelectEvent} />
                <Footer />
              </Route>

              {/* Admin Pages */}
              <Route path="/ControlPanel">
                <NavBar auth={auth} loginCallback={userLogin} />
                <AdminAuthRoute
                  user={auth.currentUser}
                  setAuth={setAuth}
                  auth={auth} />
                <Footer />
              </Route>

              <Route path="/admin">
                <NavBar auth={auth} loginCallback={userLogin} />
                <AdminLogIn
                  loginCallback={userLogin} />
                <Footer />
              </Route>

            </> : <> </>}
          {/* Public Pages */}

          <Route exact path="/">
            <Home />
            <Footer />
          </Route>

          <Route exact path="/login">
            <NavBar auth={auth} loginCallback={userLogin} />
            <LogIn loginCallback={userLogin} setAuth={setAuth}
              auth={auth} />
            <Footer />
          </Route>

          <Route exact path="/signup">
            <NavBar auth={auth} loginCallback={userLogin} />
            <SingUp loginCallback={userLogin} />
            <Footer />
          </Route>

          <Route exact path="/contactEmail">
            <NavBar auth={auth} loginCallback={userLogin} />
            <Email />
            <Footer />
          </Route>


          {/*   <Route exact path="*">
           <Error />
             </Route>   */}

          {/*        </Switch> 
 */}       </Router>
      }

    </div>
  );
}

export default App;
