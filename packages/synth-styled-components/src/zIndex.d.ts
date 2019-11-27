import { SynthConsumerProps } from '@beatgig/synth-react'

/**
 * Returns CSS declaration for the `z-index` property. If no `tokenName`
 * is given, the `base` token will be used by default.
 * @since 1.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { zIndex } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${zIndex('primary')} => z-index: 2;
 * `)
 */
declare function zIndex(tokenName?: string): <T>(props: T) => string

export default zIndex
