import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

interface SynthFullLogoProps
  extends SynthReact.SynthComponentProps,
    React.SVGAttributes<SVGElement> {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A boolean flag to determine the color variant of the logo; The default is white.
   */
  dark?: boolean
  /**
   * A React `ref` object that will point to the icon's DOM element.
   */
  ref?: React.Ref<SVGElement>
}

type SynthFullLogoComponent = React.ForwardRefExoticComponent<
  SynthFullLogoProps
>

declare const FullLogo: React.ForwardRefExoticComponent<SynthFullLogoProps>

export { SynthFullLogoComponent, SynthFullLogoProps }
export default FullLogo
