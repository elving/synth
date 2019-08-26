import styled from 'styled-components'
import { object } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../utils'

const Card = styled.div`
  ${baseStyles}
  ${backgroundColor('card')}
  ${borderRadius()}
  ${padding('card')}
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 2px 2px 4px rgba(0, 0, 0, 0.085);
`

Card.propTypes = {
  synth: object.isRequired,
}

export default withSynth(Card)
