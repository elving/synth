import * as React from 'react'
import * as styled from 'styled-components'
import * as SynthReact from '@beatgig/synth-react'

interface SynthStyledComponentProps {
  synth?: SynthReact.SynthConsumerProps
  className?: string
}

declare type SynthStyledComponent<
  T extends
    | keyof JSX.IntrinsicElements
    | React.ComponentType<P>
    | React.RefForwardingComponent<any, P>,
  P = {}
> = styled.StyledComponent<
  T,
  any,
  P & SynthStyledComponentProps & React.ComponentPropsWithRef<T>,
  never
>

export { default as bindings, SynthStyledComponentsBindings } from './bindings'
export { SynthStyledComponentProps, SynthStyledComponent }
