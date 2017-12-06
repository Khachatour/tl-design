/* @flow */
import React, { Component } from 'react'
import { MainSection } from './components/MainSection'
import AnimatedHeading from './components/Animated-Heading'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Article from 'grommet/components/Article'
import Heading from 'grommet/components/Heading'
import Headline from 'grommet/components/Headline'
import Card from 'grommet/components/Card'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
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
      <Article scrollStep controls full>
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
        <Section align='center' full='vertical'>
          <Box pad='large'>
            <Heading align='center' uppercase strong tag='h2'>What we offer</Heading>
          </Box>
          <Tiles fill>
            <Tile>
              <Card thumbnail='https://www.raic.org/sites/default/files/news_image/temple_web.jpg'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
            <Tile>
              <Card thumbnail='https://www.raic.org/sites/default/files/news_image/temple_web.jpg'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
            <Tile>
              <Card thumbnail='https://www.raic.org/sites/default/files/news_image/temple_web.jpg'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
            <Tile>
              <Card thumbnail='https://www.raic.org/sites/default/files/news_image/temple_web.jpg'
                heading='Sample Heading'
                label='Sample Label'
                description='Sample description providing more details.' />
            </Tile>
          </Tiles>
        </Section>
        <Section pad='large'
          justify='center'
          align='center'
          full='vertical'>
          <Headline margin='none'>Section 3</Headline>
        </Section>
      </Article>
    )
  }
}

export default App
