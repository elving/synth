import * as React from 'react'
import * as styled from 'styled-components'
import * as SynthReact from '@beatgig/synth-react'

interface SelectProps {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
}

type SelectComponentProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  React.RefAttributes<HTMLSelectElement> & {
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
    forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  } & SelectProps

type SelectComponent = SynthReact.SynthComponent<
  SelectComponentProps,
  HTMLSelectElement
>

/**
 * @since 1.0.0
 */
declare const Select: SelectComponent

/**
 * We expose the <Select> styles because other components use them to mimic it's
 * appearance. This approach eliminates the need to extend styled-components for
 * styling purposes which can cause TS errors because some component props are
 * meant for specific types of HTML elements.
 * @since 1.1.0
 */
declare function setSelectStyles(): <T>(props: T) => string

export { SelectComponent, SelectComponentProps, SelectProps, setSelectStyles }
export default Select
