import * as React from 'react'

import { InputProps } from '../Input'

interface EditableProps extends InputProps {}

type EditableComponentProps = React.InputHTMLAttributes<HTMLInputElement> &
  React.RefAttributes<HTMLInputElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & EditableProps

type EditableComponent = SynthReact.SynthComponent<
  EditableComponentProps,
  HTMLInputElement
>

/**
 * @since 1.1.0
 */
declare const Editable: EditableComponent

export { EditableComponent, EditableComponentProps, EditableProps }
export default Editable
