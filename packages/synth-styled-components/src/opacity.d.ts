import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `opacity` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { opacity } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${opacity('primary')} => opacity: 1;
 * `)
 */
declare function opacity(tokenName?: string): <T>(props: T) => string

export default opacity
