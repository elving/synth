import PropTypes from 'prop-types'
import React, { Children, cloneElement } from 'react'

import FormRow from './FormRow'
import { Label, Small } from '../Typography'

import { withForwardedRef } from '../utils'

const FormField = ({
  children = null,
  className = '',
  error,
  hint = null,
  label = null,
  ref,
  withoutLabelWrapper,
  ...props
}) => (
  <FormRow
    {...props}
    as={withoutLabelWrapper ? 'div' : 'label'}
    className={className}
    ref={ref}
  >
    <Label as={withoutLabelWrapper ? 'label' : 'span'}>{label}</Label>
    {hint && <Small>{hint}</Small>}
    {Children.map(children, (child) =>
      cloneElement(child, { hasError: !!error }),
    )}
    {error && <Small intent="danger">{error}</Small>}
  </FormRow>
)

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.node,
  label: PropTypes.node,
  withoutLabelWrapper: PropTypes.bool,
}

export default withForwardedRef(FormField)
