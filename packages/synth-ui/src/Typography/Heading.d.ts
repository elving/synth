import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface HeadingProps extends SynthReact.BoxProps {
  /**
   * The elements you want to display within the heading component.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * Sets the element's heading level (h1, h2, etc.) and it's font-size accordingly
   */
  level?: HeadingLevel
  /**
   * A boolean flag to determine if the heading should be displayed *without* any margin.
   */
  withoutMargin?: boolean
}

type HeadingComponentProps = React.HTMLAttributes<HTMLHeadingElement> &
  React.RefAttributes<HTMLHeadingElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & HeadingProps

type HeadingComponent = SynthReact.SynthComponent<
  HeadingComponentProps,
  HTMLHeadingElement
>

/**
 * @since 1.3.0
 */
declare const Heading: HeadingComponent

export { HeadingComponent, HeadingComponentProps, HeadingLevel, HeadingProps }
export default Heading
