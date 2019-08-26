import { node, object, string } from 'prop-types'
import { withSynth } from '@beatgig/synth-react'
import React from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  padding,
  margin,
} from '@beatgig/synth-styled-components'

import { baseStyles } from '../utils'

const Link = styled.a`
  ${baseStyles}
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

/**
 * @type {object}
 * @property {object} props
 * @property {boolean} props.hasIcon
 */
const Text = styled.span`
  flex-shrink: 0;
  margin-left: ${({ hasIcon }) => (hasIcon ? '16px' : '0')};
`

/**
 * @param {object} props
 * @param {number|string|undefined|boolean|object} props.children
 * @param {number|string|undefined|boolean|object} props.icon
 * @param {object} props.synth
 * @returns {object}
 */
const SidebarLink = ({ children, className, icon, synth }) => (
  <Link className={className} synth={synth}>
    {icon}
    <Text hasIcon={icon != undefined}>{children}</Text>
  </Link>
)

SidebarLink.propTypes = {
  children: node,
  className: string,
  icon: node,
  synth: object,
}

export default withSynth(SidebarLink)
