import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

type PopupXPosition = 'left' | 'right' | 'center'
type PopupYPosition = 'top' | 'bottom' | 'center'

type PopupDOMRect = {
  x: number
  y: number
  top: number
  left: number
  right: number
  width: number
  height: number
  bottom: number
}

interface PopupProps {
  /**
   * The element in which you want to render the popup; the default
   * is `document.getElementById('root')`.
   */
  container?: HTMLElement
  /**
   * The elements you want to display within the popup.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The popup element's DOMRect object.
   */
  popupRect?: PopupDOMRect | DOMRect
  /**
   * A boolean flag to determine if the popup should be rendered next to it's
   * trigger as opposed to rendering it on the specified `container`.
   */
  renderInPlace?: boolean
  /**
   * The trigger element's DOMRect object.
   */
  triggerRect?: PopupDOMRect | DOMRect
  /**
   * If true, the popup's height will match it's target's height.
   */
  useTriggerHeight?: boolean
  /**
   * If true, the popup's width will match it's target's width.
   */
  useTriggerWidth?: boolean
  /**
   * X position of the popup.
   */
  x?: PopupXPosition
  /**
   * Offset for the popup's x position.
   */
  xOffset?: number | string
  /**
   * Y position of the popup.
   */
  y?: PopupYPosition
  /**
   * Offset for the popup's y position.
   */
  yOffset?: number | string
}

type PopupComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & PopupProps

type PopupComponent = SynthReact.SynthComponent<
  PopupComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Popup: PopupComponent

export {
  PopupComponent,
  PopupComponentProps,
  PopupDOMRect,
  PopupProps,
  PopupXPosition,
  PopupYPosition,
}

export default Popup
