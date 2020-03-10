import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface CardProps {
  /**
   * The elements you want to display within the card.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type CardComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & CardProps

type CardComponent = SynthReact.SynthComponent<
  CardComponentProps,
  HTMLDivElement
>

/**
 * @since 1.0.0
 */
declare const Card: CardComponent

export { CardComponent, CardComponentProps, CardProps }
export default Card
