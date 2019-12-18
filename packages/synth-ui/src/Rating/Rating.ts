import * as CSS from 'csstype'
import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface RatingProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The rating count.
   */
  rating?: number
  /**
   * A scale index from the `icons` synth token.
   */
  scale?: number
  /**
   * The total amount of reviews.
   */
  total?: number
  /**
   * A boolean flag to determine if the rating will be shown along the star icons.
   */
  withRating?: boolean
  /**
   * A boolean flag to determine if the total will be shown along the star icons.
   */
  withTotal?: boolean
}

type RatingComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & RatingProps

type RatingComponent = SynthReact.SynthComponent<
  RatingComponentProps,
  HTMLDivElement
>

/**
 * @since 1.4.0
 */
declare const Rating: RatingComponent

export { RatingComponent, RatingProps, RatingComponentProps }
export default Rating
