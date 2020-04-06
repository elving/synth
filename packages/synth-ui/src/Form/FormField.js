import PropTypes from 'prop-types'
import React, { Children, cloneElement, forwardRef } from 'react'

import FormRow from './FormRow'
import { Label, Small } from '../Typography'

const FormField = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').FormFieldProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      children = null,
      className = '',
      error,
      hint = null,
      label = null,
      withoutLabelWrapper,
      ...props
    },
    ref,
  ) => (
    <FormRow
      {...props}
      as={withoutLabelWrapper ? 'div' : 'label'}
      className={className}
      ref={ref}
    >
      <Label forwardedAs={withoutLabelWrapper ? 'label' : 'span'}>
        {label}
      </Label>
      {hint && <Small>{hint}</Small>}
      {Children.map(
        children,
        /**
         * @param {import('react').ReactElement<{ hasError: boolean }>} child
         */
        (child) => cloneElement(child, { hasError: !!error }),
      )}
      {error && <Small color="@Error.1">{error}</Small>}
    </FormRow>
  ),
)

FormField.propTypes = {
  /**
   * The elements you want to display within this component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The error message (if any) associated with the form elements displayed on the field.
   */
  error: PropTypes.string,
  /**
   * Used to provide an optional hint or instruction message related with the form elements displayed on the field.
   */
  hint: PropTypes.node,
  /**
   * Used to provide an optional label or title related with the form elements displayed on the field.
   */
  label: PropTypes.node,
  /**
   * Boolean flag used to determine if you want the form elements of the field to **not** be wrapped by a `label` element.
   */
  withoutLabelWrapper: PropTypes.bool,
}

FormField.defaultProps = {
  children: null,
  className: '',
  error: '',
  hint: null,
  label: null,
  withoutLabelWrapper: false,
}

FormField.displayName = 'FormField'

export default FormField
