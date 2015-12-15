import React from 'react';
import DocumentTitle from 'react-document-title';
import { link } from 'gatsby-helpers';

import { TypographyStyle } from 'utils/typography'


module.exports = React.createClass({
  render: function() {
    var title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en" style={{ fontSize: '1.1vw', boxSizing: 'border-box' }}>
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <link href='https://fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css' />
          <TypographyStyle/>
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src={link("/bundle.js")}/>
        </body>
      </html>
    );
  }
});
