import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface ArrowLeftIconProps extends IconProps {}

type ArrowLeftIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ArrowLeftIconProps

type ArrowLeftIconComponent = SynthReact.SynthComponent<
  ArrowLeftIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const ArrowLeftIcon: ArrowLeftIconComponent

export {
  ArrowLeftIconComponent,
  ArrowLeftIconComponentProps,
  ArrowLeftIconProps,
}

export default ArrowLeftIcon
