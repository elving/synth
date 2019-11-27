import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthPopupProps
  extends SynthReact.SynthComponentProps,
    React.HTMLAttributes<HTMLDivElement> {
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
  popupRect?: DOMRect
  /**
   * A React `ref` object that will point to the popup's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
  /**
   * A boolean flag to determine if the popup should be rendered next to it's
   * trigger as opposed to rendering it on the specified `container`.
   */
  renderInPlace?: boolean
  /**
   * The trigger element's DOMRect object.
   */
  triggerRect?: object
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
  x?: 'left' | 'top' | 'center'
  /**
   * Offset for the popup's x position.
   */
  xOffset?: number | string
  /**
   * Y position of the popup.
   */
  y?: 'top' | 'bottom' | 'center'
  /**
   * Offset for the popup's y position.
   */
  yOffset?: number | string
}

type SynthPopupComponent = React.ForwardRefExoticComponent<SynthPopupProps>

declare const Popup: React.ForwardRefExoticComponent<SynthPopupProps>

export { SynthPopupProps, SynthPopupComponent }
export default Popup
