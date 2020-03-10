import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface ArtistCardProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * The artist object holding their information to be displayed.
   * @todo This structure will eventually change once we have the DB model structure
   * locked down; When that happens, we should define an reusable interface.
   */
  artist?: {
    avatar: string
    genres: {
      id: string
      name: string
    }[]
    id: string
    rating: number
    stageName: string
  }
}

type ArtistCardComponentProps = React.HTMLAttributes<HTMLDivElement> &
  React.RefAttributes<HTMLDivElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ArtistCardProps

type ArtistCardComponent = SynthReact.SynthComponent<
  ArtistCardComponentProps,
  HTMLDivElement
>

/**
 * @since 1.4.0
 */
declare const ArtistCard: ArtistCardComponent

export { ArtistCardComponent, ArtistCardProps, ArtistCardComponentProps }
export default ArtistCard
