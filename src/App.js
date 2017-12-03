/* @flow */
import React, { Component } from 'react'
import { MainSection } from './components/MainSection'
import AnimatedHeading from './components/Animated-Heading'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Article from 'grommet/components/Article'
import Headline from 'grommet/components/Headline'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      posts: null
    }
  }

  render() {
    return (
      <Article scrollStep
        controls>
        <Section pad='none' >
          <div className='web-wrapper'>
            <div className='shadow-overlay'>
              <div className='landing-text'>
                <AnimatedHeading />
                <Box align='center'>
                  <Paragraph align='center'>
                    Architecture and design studio that meets your needs
                  </Paragraph>
                </Box>
              </div>
            </div>
          </div>
        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'
          colorIndex='grey-4'>
          <Headline margin='none'>
            Section 2
         </Headline>
        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'>
          <Headline margin='none'>
      Section 3
    </Headline>
        </Section>
      </Article>
    )
  }
}

export default App
