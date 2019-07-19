import { bool, object } from 'prop-types'
import { getTokenValue, unit } from '@beatgig/synth-core'
import { margin } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import styled from 'styled-components'

import { baseStyles } from '../utils'
import { Flex } from '../Flex'

/**
 * @param {object} props
 * @param {boolean} [props.inline]
 * @param {object} [props.synth]
 */
const getFormElementMarginRight = ({ inline, synth }) =>
  inline ? unit(getTokenValue(synth.tokens, '@spacing.1')) : '0px'

/**
 * @param {object} props
 * @param {boolean} [props.inline]
 * @param {object} [props.synth]
 */
const getFormElementMarginBottom = ({ inline, synth }) =>
  inline ? '0px' : unit(getTokenValue(synth.tokens, '@spacing.1'))

const FormRow = styled(Flex).attrs(({ centered, inline }) => ({
  center: centered,
  column: !inline,
  textAlign: centered ? 'center' : 'left',
}))`
  ${baseStyles}
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
  ${margin('formRow')}

  & > * {
    margin-right: ${(props) => getFormElementMarginRight(props)};
    margin-bottom: ${(props) => getFormElementMarginBottom(props)};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }

  & > input {
    ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')}
  }

  &:last-child {
    margin-bottom: 0;
  }
`

FormRow.propTypes = {
  centered: bool,
  inline: bool,
  synth: object,
}

export default withSynth(FormRow)
