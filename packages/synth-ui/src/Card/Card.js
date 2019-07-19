import styled from 'styled-components'
import { object } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../utils'
import { Flex } from '../Flex'

const Card = styled(Flex).attrs(() => ({
  column: true,
}))`
  ${baseStyles}
  ${backgroundColor('card')}
  ${borderRadius()}
  ${padding('card')}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 2px 2px 4px rgba(0, 0, 0, 0.085);
  width: 100%;
`

Card.propTypes = {
  synth: object.isRequired,
}

export default withSynth(Card)
