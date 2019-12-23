import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SliderProps {
  /**
   * The items you want to display within the slider.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The number of items you want to be visible.
   */
  itemsToShow?: number
}

type SliderComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SliderProps

type SliderComponent = SynthReact.SynthComponent<
  SliderComponentProps,
  HTMLDivElement
>

/**
 * @since 1.x.x
 */
declare const Slider: SliderComponent

export { SliderComponent, SliderComponentProps, SliderProps }
export default Slider
