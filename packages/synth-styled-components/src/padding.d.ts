import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `padding` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { padding } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${padding('primary')} => padding: 10px 15px;
 * `)
 */
declare function padding(tokenName?: string): <T>(props: T) => string

export default padding
