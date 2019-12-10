import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface ModalActionsProps {
  /**
   * The elements you want to display within this component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type ModalActionsComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ModalActionsProps

type ModalActionsComponent = SynthReact.SynthComponent<
  ModalActionsComponentProps,
  HTMLDivElement
>

/**
 * @since 1.2.0
 */
declare const ModalActions: ModalActionsComponent

export { ModalActionsComponent, ModalActionsComponentProps, ModalActionsProps }
export default ModalActions
