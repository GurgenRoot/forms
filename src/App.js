import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Step1 from "./Step1";

const App = () => {

  const Step2 = () => <h1>STEP 2</h1>
  const Step3 = () => <h1>STEP 3</h1>
  const Result = () => <h1>Result</h1>

  return (
    <>
      <Header/>
      <Router>
          <Switch>
              <Route exact path='/' component={Step1}/>
              <Route path='/step2' component={Step2}/>
              <Route path='/step3' component={Step3}/>
              <Route path='/result' component={Result}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;
