import { Switch, Route, Redirect } from 'react-router-dom';

export const Third = () => {
  return (
    <div>
      <h1>New Third</h1>
      <Switch>
        <Route exact path="/third/21">
          <h1>This is 21!!!</h1>
        </Route>
        <Route exact path="/third/10">
          <h1>This is 10!!!</h1>
        </Route>
        <Redirect to="/third/21" />
      </Switch>
    </div>
  );
};
