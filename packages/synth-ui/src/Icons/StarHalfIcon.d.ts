import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface StarHalfIconProps extends IconProps {}

type StarHalfIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & StarHalfIconProps

type StarHalfIconComponent = SynthReact.SynthComponent<
  StarHalfIconComponentProps,
  SVGElement
>

/**
 * @since 1.3.0
 */
declare const StarHalfIcon: StarHalfIconComponent

export { StarHalfIconComponent, StarHalfIconComponentProps, StarHalfIconProps }
export default StarHalfIcon
