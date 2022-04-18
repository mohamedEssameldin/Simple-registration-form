import "./App.css";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router";
import Home from "./Home";
import AddCandiate from "./AddCandiate";
import { useDispatch } from "react-redux";
import { fetchInitialDta } from "../store/actions/candiate";
import { useEffect } from "react";
import EditCandiate from "./EditCandiate";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitialDta());
  }, []);
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/edit/:id' component={EditCandiate} />
        <Route path='/add' component={AddCandiate} />
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
};

export default App;
