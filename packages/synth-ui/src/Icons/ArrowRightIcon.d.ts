import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface ArrowRightIconProps extends IconProps {}

type ArrowRightIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ArrowRightIconProps

type ArrowRightIconComponent = SynthReact.SynthComponent<
  ArrowRightIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const ArrowRightIcon: ArrowRightIconComponent

export {
  ArrowRightIconComponent,
  ArrowRightIconComponentProps,
  ArrowRightIconProps,
}

export default ArrowRightIcon
