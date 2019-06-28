import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Contacts from './Contacts';
import ContactEdit from './ContactEdit';
import ContactNew from './ContactNew';
import ContactView from './ContactView';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/contact/:id" component={ContactView} />
          <Route exact path="/contact/:id/edit" component={ContactEdit} />
          <Route exact path="/contact" component={ContactNew} />

          <Route component={Contacts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
