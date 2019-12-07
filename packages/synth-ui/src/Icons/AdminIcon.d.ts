import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface AdminIconProps extends IconProps {}

type AdminIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & AdminIconProps

type AdminIconComponent = SynthReact.SynthComponent<
  AdminIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const AdminIcon: AdminIconComponent

export { AdminIconComponent, AdminIconComponentProps, AdminIconProps }
export default AdminIcon
