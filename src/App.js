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
import Columns from 'grommet/components/Columns'
import './App.css'

class App extends Component {
  render () {
    return (
      <Article scrollStep controls full>
        <Landing />
        <Section style={{ minHeight: '100vh' }}>
          <Box pad='large'>
            <Heading align='center' uppercase strong tag='h2'>What we offer</Heading>
          </Box>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>Interior Design</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>design</Label>} />
              </Box>
            </Box>
            <Box
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
            <Box
              align='center'
              pad='medium'>
              <Box className='my-container'>
                <Card heading={<Heading align='center' truncate margin='small' style={{ color: 'white' }} uppercase strong tag='h4'>Public spaces design</Heading>}
                  style={{ zIndex: 2 }}
                  pad='large'
                  label={<Label size='small' uppercase style={{ color: 'white' }}>architecture</Label>} />
              </Box>
            </Box>
            <Box
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
        <Section style={{ minHeight: '100vh', background: '#EDEEE9', position: 'relative' }} pad='none'>
          <div className='freaking-wrapper'>
              <div className='freaking-left'>
                <Heading tag='h3' margin='large'>
                  It's not the length of life its the depth of life
                  It's not the length of life its the depth of life
                  </Heading>
              </div>
              <div className='freaking-shadow'>
                <div className='freaking-shadow-title'>
                    It's not the length of life its the depth of life
                    It's not the length of life its the depth of life
                </div>
              </div>

          </div>
        </Section>
      </Article>
    )
  }
}

export default App
