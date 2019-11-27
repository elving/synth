import PropTypes from 'prop-types'
import styled from 'styled-components'
import { margin } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import {
  setAlignItems,
  setChildMargin,
  setChildWidth,
  setFlexDirection,
  setJustifyContent,
  setTextAlign,
} from './utils'

const StyledFormRow = styled.div`
  ${setBaseStyles()}
  ${margin('formRow')}
  ${setAlignItems()}
  ${setFlexDirection()}
  ${setJustifyContent()}
  ${setTextAlign()}
  display: flex;
  width: 100%;

  & > * {
    ${setChildMargin()}
    ${setChildWidth()}

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const FormRow = withSynth(StyledFormRow)

FormRow.propTypes = {
  ...FormRow.propTypes,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  inline: PropTypes.bool,
}

export default FormRow
