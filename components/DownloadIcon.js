import React from 'react';
import Radium from 'radium';

const DownloadIcon = React.createClass({
  render: function() {
    const { style } = this.props;

    return (
      <svg style={[styles.base, style]} viewBox="0 0 45 60">
          <g id="Marketing-Site">
              <g id="Desktop-HD" transform="translate(-2111.000000, -1208.000000)">
                  <g id="Content" transform="translate(499.000000, 963.000000)">
                      <g id="CTA" transform="translate(1096.000000, 231.000000)">
                          <g id="Download-button">
                              <g id="Text" transform="translate(80.000000, 8.000000)">
                                  <g id="download" transform="translate(436.000000, 6.000000)">
                                      <path d="M31.6161165,30.3661165 L21.6161165,40.3661165 L23.3838835,40.3661165 L13.3838835,30.3661165 L11.6161165,32.1338835 L21.6161165,42.1338835 L22.5,43.017767 L23.3838835,42.1338835 L33.3838835,32.1338835 L31.6161165,30.3661165 L31.6161165,30.3661165 Z" id="Shape"></path>
                                      <path d="M21.25,0 L21.25,39.585 L23.75,39.585 L23.75,0 L21.25,0 L21.25,0 Z" id="Shape"></path>
                                      <path d="M12.5,17.5 L1.25,17.5 L0,17.5 L0,18.75 L0,58.75 L0,60 L1.25,60 L43.75,60 L45,60 L45,58.75 L45,18.75 L45,17.5 L43.75,17.5 L32.5,17.5 L32.5,20 L43.75,20 L42.5,18.75 L42.5,58.75 L43.75,57.5 L1.25,57.5 L2.5,58.75 L2.5,18.75 L1.25,20 L12.5,20 L12.5,17.5 L12.5,17.5 Z" id="Shape"></path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
    );
  }
});

const styles = {
  base: {
    fill: '#FFFFFF'
  }
};

export default Radium(DownloadIcon);
