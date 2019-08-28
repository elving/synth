import React from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import {
  backgroundColor,
  border,
  borderRadius,
  padding,
} from '@beatgig/synth-styled-components'

import { CheckIcon } from '../../Icons/src'
import { Spacer } from '../../Spacer'
import { Text } from '../../Typography'

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
  align-items: center;
  display: inline-flex;
  justify-content: center;
  transition: background-color 0.25s ease;
`

const Icon = styled(CheckIcon)`
  cursor: pointer;
  fill: ${({ synth }) => synth.getValue('@Porcelain')};
  opacity: 0;
`

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

const Checkbox = ({ className = '', label, synth, ...props }) => (
  <Container className={className} synth={synth}>
    <Input synth={synth} {...props} />
    <IconContainer synth={synth}>
      <Icon size={synth.getUnit('@fontSizes.2')} synth={synth} />
    </IconContainer>
    {label ? <Spacer left inline scale={1} /> : null}
    {label ? <Text synth={synth}>{label}</Text> : null}
  </Container>
)

export default withSynth(Checkbox)
