import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface ChevronDownIconProps extends IconProps {}

type ChevronDownIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ChevronDownIconProps

type ChevronDownIconComponent = SynthReact.SynthComponent<
  ChevronDownIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const ChevronDownIcon: ChevronDownIconComponent

export {
  ChevronDownIconComponent,
  ChevronDownIconComponentProps,
  ChevronDownIconProps,
}

export default ChevronDownIcon
