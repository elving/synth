import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface CheckIconProps extends IconProps {}

type CheckIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & CheckIconProps

type CheckIconComponent = SynthReact.SynthComponent<
  CheckIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const CheckIcon: CheckIconComponent

export { CheckIconComponent, CheckIconComponentProps, CheckIconProps }
export default CheckIcon
