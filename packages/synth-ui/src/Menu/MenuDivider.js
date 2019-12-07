import PropTypes from 'prop-types'
import React, { Fragment, forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Spacer } from '../Spacer'

import { setMenuDividerBorder } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').MenuDividerProps>}
 */
const StyledMenuDivider = styled.hr`
  ${setMenuDividerBorder()}
  margin: 0 auto;
  width: 100%;
`

const MenuDivider = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').MenuDividerProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', synth, ...props }, ref) => (
    <Fragment>
      <Spacer top />
      <StyledMenuDivider
        {...props}
        className={className}
        synth={synth}
        ref={ref}
      />
      <Spacer bottom />
    </Fragment>
  ),
)

MenuDivider.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
}

MenuDivider.defaultProps = {
  className: '',
}

MenuDivider.displayName = 'MenuDivider'

export default withSynth(MenuDivider)
