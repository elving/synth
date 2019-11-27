import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'
import { fontWeight } from '@beatgig/synth-styled-components'

import Text from './Text'

const StyledLabel = styled(Text).attrs(() => ({
  as: 'label',
}))`
  ${fontWeight('control')}
  line-height: 1.25;
  cursor: default;
  align-self: center;
  display: flex;
`

const Label = withSynth(StyledLabel)

Label.propTypes = {
  ...Label.propTypes,
  ...Text.propTypes,
}

export default Label
