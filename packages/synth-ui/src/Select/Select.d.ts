import * as React from 'react'
import * as styled from 'styled-components'
import * as SynthReact from '@beatgig/synth-react'

interface SynthSelectProps
  extends SynthReact.SynthComponentProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className?: string
  /**
   * A React `ref` object that will point to the select's DOM element.
   */
  ref?: React.Ref<HTMLSelectElement>
}

type SynthSelectComponent = React.ForwardRefExoticComponent<SynthSelectProps>
declare const Select: React.ForwardRefExoticComponent<SynthSelectProps>

/**
 * We expose the <Select> styles because other components use them to mimic it's
 * appearance. This approach eliminates the need to extend styled-components for
 * styling purposes which can cause TS errors because some component props are
 * meant for specific types of HTML elements.
 */
declare function setSelectStyles(): <T>(props: T) => string

export { setSelectStyles, SynthSelectComponent, SynthSelectProps }
export default Select
