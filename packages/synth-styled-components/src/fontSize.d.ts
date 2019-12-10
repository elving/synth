import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `font-size` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { fontSize } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${fontSize('primary')} => font-size: 16px;
 * `)
 */
declare function fontSize(tokenName?: string): <T>(props: T) => string

export default fontSize
