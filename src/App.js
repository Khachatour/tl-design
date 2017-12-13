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
import Typist from 'react-typist'

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
                    <Typist avgTypingDelay={80}>
                      {`Architecture and design studio that fucks yo${(' '.repeat(3))}`}
                      <Typist.Backspace count={11} />
                    meets your needs
                    </Typist>
                  </Paragraph>
                </Box>
              </div>
            </div>
          </div>
        </Section>
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
        <Section style={{ minHeight: '100vh' }} pad='none'>
          <Box justify='start'
            full='vertical'
            colorIndex='neutral-4'>
            <Box direction='row' pad='large' basis='xxlarge'>
              <Paragraph size='large' className='last-page-paragraph'>
                Raised on hip-hop and foster care, defiant city kid Ricky
              gets a fresh start in the New Zealand countryside. He quickly finds himself
              at home with his new foster family: the loving Aunt Bella, the cantankerous
              Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
              Ricky to another home, both he and Hec go on the run in the bush. As a
              national manhunt ensues, the newly branded outlaws must face their
              options: go out in a blaze of glory or overcome their differences and
              survive as a family.
                </Paragraph>
            </Box>
          </Box>
        </Section>
      </Article>
    )
  }
}

export default App

// <Heading uppercase={false} align='center'>
//             enough talking,
//             <Heading margin='large' tag='h3' align='center' uppercase strong className='test-text'>see</Heading>
//             what we have done, or
//             <Heading margin='large' tag='h3' align='center' uppercase strong className='test-text'>read</Heading>
//             our blog, and if you want check out our
//             <Heading margin='large' tag='h3' align='center' uppercase strong className='test-text'>news</Heading>
//             </Heading>
