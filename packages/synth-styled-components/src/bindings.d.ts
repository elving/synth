import * as SynthCSS from '@beatgig/synth-css'
import * as SynthReact from '@beatgig/synth-react'

type SynthStyledComponentsBindings = {
  [Key in keyof SynthCSS.Bindings]: (
    tokenName?: string,
  ) => (props: SynthReact.SynthComponentProps) => ReturnType<SynthCSS.Bindings[Key]>
}

/**
 * A key-value map of CSS declarations to be used within style-components
 * CSS declarations. If no `tokenName` is given, the `base` token will be
 * used by default.
 * @since 2.0.0
 * @example
 * import styled from 'styled-components'
 * import { withSynth } from '@beatgig/synth-react'
 * import { backgroundColor, padding } from '@beatgig/synth-styled-components'
 *
 * const Example = withSynth(styled.button`
 *   ${backgroundColor('primaryButton')} \/** background-color: #333; *\/
 *   ${padding('primaryButton')} \/** padding: 6px 12px; *\/
 * `)
 */
declare const bindings: SynthStyledComponentsBindings

export { SynthStyledComponentsBindings }
export default bindings
