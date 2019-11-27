import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `border` property. If no `tokenName` is
 * given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { border } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${border('primary')} => border: 1px solid #333;
 * `)
 */
declare function border(tokenName?: string): <T>(props: T) => string

export default border
