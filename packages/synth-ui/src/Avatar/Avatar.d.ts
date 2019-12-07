import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface AvatarProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A scale index from the `avatars` synth token.
   */
  scale?: number
  /**
   * Url pointing to the user's avatar.
   */
  src: string
}

type AvatarComponentProps = React.ImgHTMLAttributes<HTMLImageElement> &
  React.RefAttributes<HTMLImageElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & AvatarProps

type AvatarComponent = SynthReact.SynthComponent<
  AvatarComponentProps,
  HTMLImageElement
>

/**
 * @since 1.0.0
 */
declare const Avatar: AvatarComponent

export { AvatarComponent, AvatarProps, AvatarComponentProps }
export default Avatar
