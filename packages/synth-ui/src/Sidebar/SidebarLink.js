import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
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
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'a', import('@beatgig/synth-ui').SidebarLinkProps>}
 */
const StyledSidebarLink = styled.a`
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

const SidebarLink = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SidebarLinkProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ children = null, className = '', icon = null, synth, ...props }, ref) => {
    const hasIcon = !isNil(icon)

    return (
      <StyledSidebarLink {...props} className={className} synth={synth}>
        {hasIcon ? icon : null}
        {hasIcon ? <Spacer inline left scale={1} /> : null}
        <Text>{children}</Text>
      </StyledSidebarLink>
    )
  },
)

SidebarLink.propTypes = {
  /**
   * The elements you want to display within the button.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * An optional icon component that can be rendered along side the
   * link's content.
   */
  icon: PropTypes.node,
}

SidebarLink.defaultProps = {
  children: null,
  className: '',
  icon: null,
}

SidebarLink.displayName = 'SidebarLink'

export default withSynth(SidebarLink)
