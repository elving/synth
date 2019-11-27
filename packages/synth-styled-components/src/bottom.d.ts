import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `bottom` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { bottom } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${bottom('primary')} => bottom: 15px;
 * `)
 */
declare function bottom(tokenName?: string): <T>(props: T) => string

export default bottom
