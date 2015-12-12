import React from 'react';

module.exports = React.createClass({
  render: function() {
    var post = this.props.page.data
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html: post.body}}/>
      </div>
    );
  }
});
