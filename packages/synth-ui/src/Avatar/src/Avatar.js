import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  boxShadow,
  height,
  width,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../../utils'

/**
 * @param {object} props
 * @param {number} [props.scale=0]
 * @param {object} [props.synth]
 * @returns {string}
 */
const setSize = ({ scale = 0, synth }) => `
  ${height(`@avatars.${scale}`)({ synth })}
  ${width(`@avatars.${scale}`)({ synth })}
`

const Avatar = styled.img`
  ${baseStyles}
  ${backgroundColor('avatar')}
  ${boxShadow('avatar')}
  ${setSize}
  ${borderRadius('avatar')}
`

export default withSynth(Avatar)
