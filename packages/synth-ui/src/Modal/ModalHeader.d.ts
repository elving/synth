import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface ModalHeaderProps {
  /**
   * The elements you want to display within modal's header.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A function used to close the modal when clicking on it's overlay
   * background. This function will generally be provided by the `usePopup` hook.
   */
  close?()
  /**
   * A callback function that is called whenever the user clicks on the modal's
   * close button.
   */
  onCloseClick?()
}

type ModalHeaderComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ModalHeaderProps

type ModalHeaderComponent = SynthReact.SynthComponent<
  ModalHeaderComponentProps,
  HTMLDivElement
>

/**
 * @since 1.3.0
 */
declare const ModalHeader: ModalHeaderComponent

export { ModalHeaderComponent, ModalHeaderComponentProps, ModalHeaderProps }
export default ModalHeader
