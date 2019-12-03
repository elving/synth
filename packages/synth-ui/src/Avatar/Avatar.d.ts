import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthAvatarProps
  extends SynthReact.SynthComponentProps,
    React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the card's DOM element.
   */
  ref?: React.Ref<HTMLImageElement>
  /**
   * A scale index from the `avatars` synth token.
   */
  scale?: number
}

type SynthAvatarComponent = React.ComponentType<SynthAvatarProps>

/**
 * @since 1.0.0
 */
declare const Avatar: React.ForwardRefExoticComponent<SynthAvatarProps>

export { SynthAvatarComponent, SynthAvatarProps }
export default Avatar
