import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { isNil } from '@beatgig/is'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  padding,
  margin,
} from '@beatgig/synth-styled-components'

import { Spacer } from '../Spacer'
import { Text } from '../Typography'

import { setBaseStyles } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'a'>}
 */
const Link = styled.a`
  ${setBaseStyles()}
  ${backgroundColor('@Shark')}
  ${borderRadius()}
  ${fontSize('text')}
  ${fontWeight('control')}
  ${margin('formRow')}
  ${padding('@spacing.2')}
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  display: flex;
  width: 100%;
  transition: all 0.2s ease-in-out 0s;

  :hover {
    ${backgroundColor('@Mako')}
    text-decoration: none;
  }

  :last-child {
    margin-bottom: 0;
  }
`

const SidebarLink = ({
  children = null,
  className = '',
  icon = null,
  synth,
}) => {
  const hasIcon = !isNil(icon)

  return (
    <Link className={className} synth={synth}>
      {hasIcon ? icon : null}
      {hasIcon ? <Spacer inline left scale={1} /> : null}
      <Text hasIcon={icon != undefined}>{children}</Text>
    </Link>
  )
}

SidebarLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.node,
}

export default withSynth(SidebarLink)
