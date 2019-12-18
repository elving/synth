import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface StarFullIconProps extends IconProps {}

type StarFullIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & StarFullIconProps

type StarFullIconComponent = SynthReact.SynthComponent<
  StarFullIconComponentProps,
  SVGElement
>

/**
 * @since 1.3.0
 */
declare const StarFullIcon: StarFullIconComponent

export { StarFullIconComponent, StarFullIconComponentProps, StarFullIconProps }
export default StarFullIcon
