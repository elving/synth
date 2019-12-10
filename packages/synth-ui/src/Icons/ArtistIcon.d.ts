import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface ArtistIconProps extends IconProps {}

type ArtistIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ArtistIconProps

type ArtistIconComponent = SynthReact.SynthComponent<
  ArtistIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const ArtistIcon: ArtistIconComponent

export { ArtistIconComponent, ArtistIconComponentProps, ArtistIconProps }
export default ArtistIcon
