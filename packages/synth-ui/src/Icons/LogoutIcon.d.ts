import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface LogoutIconProps extends IconProps {}

type LogoutIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & LogoutIconProps

type LogoutIconComponent = SynthReact.SynthComponent<
  LogoutIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const LogoutIcon: LogoutIconComponent

export { LogoutIconComponent, LogoutIconComponentProps, LogoutIconProps }
export default LogoutIcon
