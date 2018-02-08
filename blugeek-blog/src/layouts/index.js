import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Media from 'react-media'
import './index.css'
import "../styles/layout-overide.css"

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Blu Geek"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 2.5, paddingRight: "30px" }}>
                {children()}
              </div>
<div style={{ flex: 1 }}>
                <Sidebar
                  title="A blogról"
                  description="Minden ami Blu-ray! Filmek, Ps3 játékok, tesztek, vélemények, gondolatok."
                />
              </div>
            </div>
          )
        }
      </Media>
    </div>
  </div>
);


const Sidebar = (props) => (
  <div
      style={{
        border: '2px solid #e6e6e6',
        background: 'rgba(250, 250, 250, .8)',
        maxWidth: 960,
        opacity: '0,5',
        padding: '0.5rem',
        marginBottom: '25px'
      }}
      >
      <strong>{props.title}.</strong> {props.description}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
