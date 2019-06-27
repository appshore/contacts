import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Contacts from './Contacts';
import ContactView from './ContactView';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          {/* special routes to download documents */}
          <Route path="/contact/:id" component={ContactView} />

          {/* standard routes */}
          <Route component={Contacts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
