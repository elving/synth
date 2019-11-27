import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `width` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { width } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${width('primary')} => width: 100%;
 * `)
 */
declare function width(tokenName?: string): <T>(props: T) => string

export default width
