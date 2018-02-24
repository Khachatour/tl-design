/* @flow */
import React, { Component } from 'react'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Article from 'grommet/components/Article'
import Heading from 'grommet/components/Heading'
import Card from 'grommet/components/Card'
import Label from 'grommet/components/Label'
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import './fancy-button.css'
import './fancy-glitch.css'

class App extends Component {
  componentDidMount() {
    require('./text-animate.js')
  }
  render() {
    return (
      <Router>
        <Article scrollStep full>
          <Landing />
          <Section style={{ minHeight: '100vh' }}>
            <Box pad="large">
              <Heading align="center" uppercase strong tag="h2">
                What we offer
              </Heading>
            </Box>
            <Box direction="row" justify="center" align="center">
              <Box align="center" pad="medium">
                <Box className="my-container">
                  <Card
                    heading={
                      <Heading
                        align="center"
                        truncate
                        margin="small"
                        style={{ color: 'white' }}
                        uppercase
                        strong
                        tag="h4"
                      >
                        Interior Design
                      </Heading>
                    }
                    style={{ zIndex: 2 }}
                    pad="large"
                    label={
                      <Label size="small" uppercase style={{ color: 'white' }}>
                        design
                      </Label>
                    }
                  />
                </Box>
              </Box>
              <Box align="center" pad="medium">
                <Link to="/about">
                  <Box className="my-container">
                    <Card
                      heading={
                        <Heading
                          align="center"
                          truncate
                          margin="small"
                          style={{ color: 'white' }}
                          uppercase
                          strong
                          tag="h4"
                        >
                          Commercial territories
                        </Heading>
                      }
                      style={{ zIndex: 2 }}
                      pad="large"
                      label={
                        <Label
                          size="small"
                          uppercase
                          style={{ color: 'white' }}
                        >
                          architecture
                        </Label>
                      }
                    />
                  </Box>
                </Link>
              </Box>
            </Box>
            <Box direction="row" justify="center" align="center">
              <Box align="center" pad="medium">
                <Box className="my-container">
                  <Card
                    heading={
                      <Heading
                        align="center"
                        truncate
                        margin="small"
                        style={{ color: 'white' }}
                        uppercase
                        strong
                        tag="h4"
                      >
                        Public spaces design
                      </Heading>
                    }
                    style={{ zIndex: 2 }}
                    pad="large"
                    label={
                      <Label size="small" uppercase style={{ color: 'white' }}>
                        architecture
                      </Label>
                    }
                  />
                </Box>
              </Box>
              <Box align="center" pad="medium">
                <Box className="my-container">
                  <Card
                    heading={
                      <Heading
                        align="center"
                        truncate
                        margin="small"
                        style={{ color: 'white' }}
                        uppercase
                        strong
                        tag="h4"
                      >
                        exterior design
                      </Heading>
                    }
                    style={{ zIndex: 2 }}
                    pad="large"
                    label={
                      <Label size="small" uppercase style={{ color: 'white' }}>
                        design
                      </Label>
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Section>
          <Section
            style={{
              minHeight: '100vh',
              background: '#EDEEE9',
              position: 'relative'
            }}
            pad="none"
          >
            <div className="freaking-wrapper">
              <div className="freaking-glitch">
                {/* <canvas id="myCanvas" /> */}
                <header className="header">
                  <h1 className="glitched">Read or see</h1>
                </header>
              </div>
              <div className="freaking-top-side">
                <div className="freaking-buttons">
                  <button className="button">
                    Read our Blog
                    <div className="button__horizontal" />
                    <div className="button__vertical" />
                  </button>
                  <button className="button">
                    See our Portfolio
                    <div className="button__horizontal" />
                    <div className="button__vertical" />
                  </button>
                </div>
              </div>
            </div>
          </Section>
        </Article>
      </Router>
    )
  }
}

export default App
