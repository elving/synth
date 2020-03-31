import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { IconProps } from '../Icon'

interface InboxIconProps extends IconProps {}

type InboxIconComponentProps = React.SVGAttributes<SVGElement> &
  React.RefAttributes<SVGElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & InboxIconProps

type InboxIconComponent = SynthReact.SynthComponent<
  InboxIconComponentProps,
  SVGElement
>

/**
 * @since 1.0.0
 */
declare const InboxIcon: InboxIconComponent

export { InboxIconComponent, InboxIconComponentProps, InboxIconProps }
export default InboxIcon
