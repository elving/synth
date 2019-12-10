import * as React from 'react'
import * as SynthReact from '@beatgig/synth-react'

import { HeadingProps } from '../Typography'

interface ModalTitleProps extends HeadingProps {
  /**
   * The elements you want to display within heading.
   */
  children?: React.ReactNode
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type ModalTitleComponentProps = React.HTMLAttributes<HTMLHeadingElement> &
  React.RefAttributes<HTMLHeadingElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & ModalTitleProps

type ModalTitleComponent = SynthReact.SynthComponent<
  ModalTitleComponentProps,
  HTMLHeadingElement
>

/**
 * @since 1.2.0
 */
declare const ModalTitle: ModalTitleComponent

export { ModalTitleComponent, ModalTitleComponentProps, ModalTitleProps }
export default ModalTitle
