import * as React from 'react'

interface SynthScrollIntoViewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The elements you want to scroll into view upon rendering.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the component's DOM element.
   */
  ref?: React.Ref<HTMLDivElement>
  /**
   * A boolean flag to determine if the component's `children` should be scrolled
   * into view upon rendering them.
   */
  shouldScroll?: boolean
  /**
   * Options to be passed on to the `scrollIntoView` function.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#Parameters}
   */
  options?: ScrollIntoViewOptions
}

type SynthScrollIntoViewComponent = React.ComponentType<
  SynthScrollIntoViewProps
>
declare const ScrollIntoView: React.ForwardRefExoticComponent<SynthScrollIntoViewProps>

export { SynthScrollIntoViewComponent, SynthScrollIntoViewProps }
export default ScrollIntoView
