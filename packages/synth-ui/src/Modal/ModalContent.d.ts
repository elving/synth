import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface ModalContentProps {
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

type ModalContentComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ModalContentProps

type ModalContentComponent = SynthReact.SynthComponent<
  ModalContentComponentProps,
  HTMLDivElement
>

/**
 * @since 1.2.0
 */
declare const ModalContent: ModalContentComponent

export { ModalContentComponent, ModalContentComponentProps, ModalContentProps }
export default ModalContent
