import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface CloseIconProps extends IconProps {}

type CloseIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & CloseIconProps

type CloseIconComponent = SynthReact.SynthComponent<
  CloseIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const CloseIcon: CloseIconComponent

export { CloseIconComponent, CloseIconComponentProps, CloseIconProps }
export default CloseIcon
