/* @flow */

import React, { PureComponent } from 'react'
import AnimatedHeading from '../Animated-Heading'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Section from 'grommet/components/Section'
import Typist from 'react-typist'
import './index.css'

type ILandingProps = {}

class Landing extends PureComponent<*, ILandingProps, *> {
  render () {
    return (
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
    )
  }   
}

export default Landing
