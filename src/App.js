import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContxt from "./context/UserContext";
import Axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Header from "./layout/Header";

import Dashboard from "./components/Dashboard";
import AddService from "./dashboard/AddService";
import Manage from "./dashboard/Manage";
import Oder from "./dashboard/Oder";
import Edit from "./dashboard/Edit";

import errorr from "./error/errorr";
import Loading from "./loading/Loading";
import "./App.css";
import Home from "./components/Home";
import { ServerProvider } from "./contex/ServerContext";

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:8000/api/admin/tokenIsValied",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(
          "http://localhost:8000/api/admin/getUser",
          {
            headers: { "x-auth-token": token },
          }
        );
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();

    setTimeout(() => setSpinner(false), 1000, <Loading />);
  }, []);

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  return (
    <div className="App">
      {!spinner ? (
        <>
          <>
            <BrowserRouter>
              <ServerProvider>
                <UserContxt.Provider value={{ userData, setUserData }}>
                  <Header />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/Add" component={AddService} />
                    <Route exact path="/Manage" component={Manage} />
                    <Route exact path="/Oder" component={Oder} />
                    <Route exact path="/Edit/:id" component={Edit} />
                    <Route path="*" component={errorr}></Route>
                  </Switch>
                </UserContxt.Provider>
              </ServerProvider>
            </BrowserRouter>
          </>
        </>
      ) : (
        <>
          <Loading />
        </>
      )}
    </div>
  );
}

export default App;
