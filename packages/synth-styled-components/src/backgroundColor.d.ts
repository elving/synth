import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `background-color` property. If no
 * `tokenName` is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { backgroundColor } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${backgroundColor('primaryButton')} => background-color: #333;
 * `)
 */
declare function backgroundColor(tokenName?: string): <T>(props: T) => string

export default backgroundColor
