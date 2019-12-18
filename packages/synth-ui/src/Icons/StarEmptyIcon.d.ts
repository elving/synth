import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface StarEmptyIconProps extends IconProps {}

type StarEmptyIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & StarEmptyIconProps

type StarEmptyIconComponent = SynthReact.SynthComponent<
  StarEmptyIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const StarEmptyIcon: StarEmptyIconComponent

export {
  StarEmptyIconComponent,
  StarEmptyIconComponentProps,
  StarEmptyIconProps,
}

export default StarEmptyIcon
