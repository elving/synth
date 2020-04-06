import PropTypes from 'prop-types'
import React, { Fragment, forwardRef } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { CheckIcon } from '../Icons'
import { Spacer } from '../Spacer'
import { Label, Text } from '../Typography'

import { setIconFill, setIconSize } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div', import('@beatgig/synth-ui').CheckboxProps>}
 */
const IconContainer = styled.div`
  ${backgroundColor('control')}
  ${borderRadius()}
  ${padding('@spacing.1')}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: all 0.25s ease;

  :hover {
    ${backgroundColor('control:hover')}
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').CheckIconComponent>}
 */
const Icon = styled(CheckIcon)`
  ${setIconFill()}
  ${setIconSize()}
  cursor: pointer;
  opacity: 0;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'input', import('@beatgig/synth-ui').CheckboxComponentProps>}
 */
const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  cursor: pointer;
  position: absolute;
  opacity: 0;

  &:checked + ${IconContainer} {
    ${backgroundColor('control:focus')}
  }

  &:checked + ${IconContainer} > ${Icon} {
    opacity: 1;
  }
`

const Checkbox = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').CheckboxProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', label, synth, withoutLabelWrapper, ...props }, ref) => {
    const renderCheckbox = () => (
      <Fragment>
        <Input {...props} ref={ref} synth={synth} />
        <IconContainer synth={synth}>
          <Icon synth={synth} />
        </IconContainer>
      </Fragment>
    )

    const render = () => (
      <Fragment>
        {withoutLabelWrapper ? (
          <label>{renderCheckbox()}</label>
        ) : (
          renderCheckbox()
        )}
        {label ? <Spacer left inline scale={2} /> : null}
        {label ? <Text fontSize="@fontSizes.2">{label}</Text> : null}
      </Fragment>
    )

    return withoutLabelWrapper ? (
      render()
    ) : (
      <Label className={className}>{render()}</Label>
    )
  },
)

Checkbox.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * Used for displaying text along with the checkbox input.
   */
  label: PropTypes.string,
  /**
   * Boolean flag to determine if the checkbox should **not** be wrapper around a `label` element.
   */
  withoutLabelWrapper: PropTypes.bool,
}

Checkbox.defaultProps = {
  className: '',
  label: '',
  withoutLabelWrapper: false,
}

Checkbox.displayName = 'Checkbox'

export default withSynth(Checkbox)
