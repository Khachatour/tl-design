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
import Label from 'grommet/components/Label'
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
        <Section>
          <Box pad='large'>
            <Heading align='center' uppercase strong tag='h2'>What we offer</Heading>
          </Box>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1'
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>Interior Design</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>design</Label>} />
              </Box>
            </Box>
            <Box basis='1'
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>Commercial territories</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>architecture</Label>} />
              </Box>
            </Box>
          </Box>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1'
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>Public spaces design</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>architecture</Label>} />
              </Box>
            </Box>
            <Box basis='1'
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>exterior design</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>design</Label>} />
              </Box>
            </Box>
          </Box>
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
