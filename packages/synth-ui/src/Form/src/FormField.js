import { bool, node, oneOfType, string } from 'prop-types'
import { color } from '@beatgig/synth-styled-components'
import { withSynth } from '@beatgig/synth-react'
import React, { Children, cloneElement } from 'react'
import styled from 'styled-components'

import FormRow from './FormRow'
import { Error, Label, Small } from '../../Typography'

/**
 * @typedef {object} Props
 * @property {import('react').ReactNode} [hint]
 * @property {string} [label]
 * @property {boolean|string} [error]
 * @property {import('react').ReactNode} [children]
 * @property {string} [className]
 */

const Hint = withSynth(styled(Small)`
  && {
    ${color('@Oslo')}
  }
`)

/**
 * @param {Props} props
 * @returns {import('react').ReactNode}
 */
const FormField = ({ hint, label, error, children, className, ...props }) => (
  <FormRow {...props} as="label" className={className}>
    <Label as="span">{label}</Label>
    {hint && <Hint>{hint}</Hint>}
    {Children.map(children, (child) =>
      cloneElement(child, { hasError: !!error }),
    )}
    {error && <Error>{error}</Error>}
  </FormRow>
)

FormField.propTypes = {
  hint: node,
  label: string,
  error: oneOfType([bool, string]),
  children: node,
  className: string,
}

FormField.defaultProps = {
  hint: null,
  children: null,
  className: '',
}

export default withSynth(FormField)
