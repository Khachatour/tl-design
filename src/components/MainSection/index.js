import React from 'react'

import App from 'grommet/components/App'
import Article from 'grommet/components/Article'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
import Actions from 'grommet/components/icons/base/Actions'
import Menu from 'grommet/components/Menu'
import Section from 'grommet/components/Section'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Footer from 'grommet/components/Footer'
import Hero from 'grommet/components/Hero'
import Image from 'grommet/components/Image'
import AnimatedHeading from '../Animated-Heading'
import Columns from 'grommet/components/Columns'
import './index.css'

export const MainSection = () => {
  return (
    <App centered>
      <AnimatedHeading />
    </App>
  )
}
