import React from 'react';
import { RouteHandler, Link, State } from 'react-router';

import Radium from 'radium';


const Index = React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div style={styles.test}>Test</div>
    );
  }
});

const styles = {
  test: { color: 'red' }
};

export default Radium(Index);
