import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  fontSize,
  padding,
} from '@beatgig/synth-styled-components'

import { CheckIcon } from '../Icons'
import { Spacer } from '../Spacer'
import { Text } from '../Typography'

import { setIconFill, setIconSize } from './utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'label'>}
 */
const Label = styled.label`
  ${fontSize('@fontSizes')}
  cursor: pointer;
  align-items: center;
  display: flex;
  position: relative;

  :focus {
    outline: 0 none;
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'div'>}
 */
const IconContainer = styled.div`
  ${border('input')}
  ${borderRadius()}
  ${padding('@spacing')}
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: all 0.25s ease;

  :hover {
    ${backgroundColor('input:hover')}
    ${border('input:hover')}
  }
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('react').ComponentType<import('@beatgig/synth-ui').SynthCheckIconProps>>}
 */
const Icon = styled(CheckIcon)`
  ${setIconFill()}
  ${setIconSize()}
  cursor: pointer;
  opacity: 0;
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'input'>}
 */
const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  cursor: pointer;
  position: absolute;
  opacity: 0;

  &:checked + ${IconContainer} {
    ${backgroundColor('input:focus')}
    ${border('input:focus')}
  }

  &:checked + ${IconContainer} > ${Icon} {
    opacity: 1;
  }
`

const Checkbox = ({
  className = '',
  label,
  ref,
  synth,
  withoutLabelWrapper,
  ...props
}) => {
  const render = () => (
    <Fragment>
      <Input {...props} ref={ref} synth={synth} />
      <IconContainer synth={synth}>
        <Icon synth={synth} />
      </IconContainer>
      {label ? <Spacer left inline scale={1} /> : null}
      {label ? <Text scale={1}>{label}</Text> : null}
    </Fragment>
  )

  return withoutLabelWrapper ? (
    render()
  ) : (
    <Label className={className} synth={synth}>
      {render()}
    </Label>
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  withoutLabelWrapper: PropTypes.bool,
}

export default withSynth(Checkbox)
