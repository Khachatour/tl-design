/* @flow */
import React, { Component } from 'react'
import { Header } from './components/Header'
import { MainSection } from './components/MainSection'
import { Footer } from './components/Footer'
import Hero from 'grommet/components/Hero'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'
import Card from 'grommet/components/Card'
import Anchor from 'grommet/components/Anchor'
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
      <div>
        <Hero background={
          <Image src='https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
            fit='cover'
            full />
          }
          backgroundColorIndex='dark'
          size='large'
          style={{ minHeight: '100vh' }}>
          <Box direction='row'
            justify='center'
            align='center'>
            <Box basis='1/2'
              align='end'
              pad='medium' />
            <Box basis='1/2'
              align='start'
              pad='medium'>
              <Box colorIndex='grey-2-a'>
                <Card heading='Heading'
                  description='Hero description text.'
                  label='label'
                  link={<Anchor href='#'
                    primary
                    label='Link' />} />
              </Box>
            </Box>
          </Box>
        </Hero>
      </div>
    )
  }
}

export default App
