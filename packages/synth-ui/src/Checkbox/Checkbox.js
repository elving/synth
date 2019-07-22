import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
  padding,
} from '@beatgig/synth-styled-components'

import { Text } from '../Text'
import { CheckIcon } from '../Icons'

const Container = styled.label`
  cursor: pointer;
  align-items: center;
  display: flex;
  position: relative;

  :focus {
    outline: 0 none;
  }
`

const IconContainer = styled.div`
  ${border('input')}
  ${borderRadius()}
  ${boxShadow('outlineControl')}
  ${padding('@spacing')}  
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: background-color 0.25s ease;

  :hover {
    ${backgroundColor('control')}
  }
`

const Icon = styled(CheckIcon)`
  fill: ${({ synth }) => synth.getValue('@Porcelain')};
  opacity: 0;
`

const Input = styled.input.attrs(() => ({
  type: 'checkbox',
}))`
  position: absolute;
  opacity: 0;

  &:active + ${IconContainer} {
    ${backgroundColor('control:active')}
  }

  &:checked + ${IconContainer} {
    ${backgroundColor('control:focus')}
  }

  &:checked + ${IconContainer} > ${Icon} {
    opacity: 1;
  }
`

const Label = styled(Text)`
  margin-left: ${({ synth }) => synth.getUnit('@spacing.1')};
`

const Checkbox = ({ className = '', label, synth, ...props }) => (
  <Container className={className} synth={synth}>
    <Input synth={synth} {...props} />
    <IconContainer synth={synth}>
      <Icon size={synth.getValue('typography:size:control')} synth={synth} />
    </IconContainer>
    {label ? <Label synth={synth}>{label}</Label> : null}
  </Container>
)

export default withSynth(Checkbox)
