// @flow
import React, { PureComponent } from 'react'

import Heading from 'grommet/components/Heading'
import './index.css'

const LETTERS = ['t', 'l', '-', 'd', 'e', 's', 'i', 'g', 'n']

type IAnimatedHeadingState = {
  finished: boolean
}

class AnimatedHeading extends PureComponent<*, IAnimatedHeadingState, *> {
  constructor(props) {
    super(props)
    this.state = {
      finished: false
    }
  }

  componentDidMount() {
    LETTERS.map((elem, i) => {
      setTimeout(() => {
        const classNames = document.getElementById(`letter-object-${i + 1}`).classList.value
        document.getElementById(`letter-object-${i + 1}`).className = `${classNames} text-pop-up-top`
      }, i * 100)
    })
  }
  render() {
    return (
      <div>
        {LETTERS.map((letter, i) =>
          <Heading style={{ display: 'inline-block', color: 'black' }}
            strong
            uppercase
            tag='h1'
            id={`letter-object-${i + 1}`}
            key={i}>
            {letter}
          </Heading>
        )}
      </div>
    )
  }
}

export default AnimatedHeading
