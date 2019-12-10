import * as React from 'react'
import * as styled from 'styled-components'
import { SynthConsumerProps } from '@beatgig/synth-react'

interface SynthStyledComponentProps {
  synth?: SynthConsumerProps
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

export { default as backgroundColor } from './backgroundColor'
export { default as border } from './border'
export { default as borderRadius } from './borderRadius'
export { default as bottom } from './bottom'
export { default as boxShadow } from './boxShadow'
export { default as color } from './color'
export { default as fontFamily } from './fontFamily'
export { default as fontSize } from './fontSize'
export { default as fontWeight } from './fontWeight'
export { default as height } from './height'
export { default as left } from './left'
export { default as letterSpacing } from './letterSpacing'
export { default as lineHeight } from './lineHeight'
export { default as margin } from './margin'
export { default as maxHeight } from './maxHeight'
export { default as maxWidth } from './maxWidth'
export { default as minHeight } from './minHeight'
export { default as minWidth } from './minWidth'
export { default as opacity } from './opacity'
export { default as outline } from './outline'
export { default as padding } from './padding'
export { default as right } from './right'
export { default as textDecoration } from './textDecoration'
export { default as textTransform } from './textTransform'
export { default as top } from './top'
export { default as width } from './width'
export { default as zIndex } from './zIndex'
export { SynthStyledComponentProps, SynthStyledComponent }
