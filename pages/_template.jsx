import React from 'react';
import Radium from 'radium';
import { link } from 'gatsby-helpers';

import DownloadIcon from '../components/DownloadIcon';

const Index = React.createClass({
  render: function() {
    return (
      <div
        className="page"
        style={styles.page}
      >
        <div
          className="container"
          style={styles.container}
        >
          <div
            className="cta"
            style={styles.cta.base}
          >
            <img
              src={link('/assets/mocksy-logo.svg')}
              style={styles.cta.logo}
            />
            <p style={styles.cta.description}>
              Easily and quickly create mockups from your screenshots.
            </p>
          </div>

          <div
            className="content"
            style={styles.content.base}
          >
             <section style={[
              styles.content.section,
              styles.content.screenshot.base
            ]}>
              <img
                src={link('/assets/screenshot.png')}
                style={styles.content.screenshot.image}
              />
            </section>

            <section style={[
              styles.content.section,
              styles.content.download.base
            ]}>
              <a
                key="download-button"
                href={link('/assets/Mocksy.zip')}
                download="Mocksy"
                style={styles.download.button.base}
              >
                <span
                  style={styles.download.button.text}
                >
                  Download App&nbsp;
                </span>

                <DownloadIcon style={styles.download.button.icon} />
              </a>

              <span style={styles.download.notice}>
                Currently available for Mac, Windows coming soon.
              </span>
            </section>
          </div>

          <footer style={styles.footer.base}>
            <span
              style={styles.footer.text}
            >
              Built by&nbsp;
              <a
                key="this-guy"
                href="https://slightlytyler.com"
                target="_blank"
                style={styles.footer.link}
              >
                this guy.
              </a>
            </span>
          </footer>
        </div>
      </div>
    );
  }
});

const styles = {
  page: {
    width: '100vw',
    height: '100vh',
    fontSize: '1em',
    lineHeight: 1,
    WebkitFontSmoothing: 'antialiased',
    color: 'white',
    backgroundImage: 'linear-gradient(-180deg, #EC7690 0%, #FF8A65 100%)'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: '60em',
    margin: '0 auto',
  },

  cta: {
    base: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '70%',
      paddingTop: '3em',
    },

    logo: {
      width: '100%',
      maxWidth: '70%',
      marginBottom: '.5em',
    },

    description: {
      fontSize: '2.5em',
      textAlign: 'center'
    }
  },

  content: {
    base: {
      display: 'flex'
    },

    section: {
      flex: 1
    },

    screenshot: {
      base: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      },

      image: {
        margin: 0,
      }
    },

    download: {
      base: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  },

  download: {
    button: {
      base: {
        display: 'flex',
        alignItems: 'center',
        padding: '.15em 1.15em',
        fontSize: '2em',
        color: 'white',
        textDecoration: 'none',
        border: 'calc(.05em + 1px) solid white',
        borderRadius: '.25em',
        cursor: 'pointer',

        ':hover': {
          color: '#EC7690',
          backgroundColor: 'white'
        }
      },

      text: {
        marginRight: '.15em',
      },

      icon: {
        height: '.9em',
        fill: 'currentColor',
        margin: 0,
      }
    },

    notice: {
      marginTop: '1em',
      fontSize: '.8em'
    }
  },

  footer: {
    base: {
      marginBottom: '2em',
    },

    text: {

    },

    link: {
      paddingBottom: '.25em',
      color: 'white',
      textDecoration: 'none',
      borderBottom: '2px solid #EC7690',

      ':hover': {
        opacity: '.85'
      }
    }
  }
};

export default Radium(Index);
