import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function(handler) {
  React.render(<Handler />, document.getElementById('app'));
});
