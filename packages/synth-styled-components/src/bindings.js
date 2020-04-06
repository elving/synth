import { getPropertyToTokenMap } from '@beatgig/synth-css'

/**
 * @typedef {keyof import('@beatgig/synth-styled-components').SynthStyledComponentsBindings} Binding
 */

const bindingProperties = [
  ...Object.keys(getPropertyToTokenMap('camelCase')),
  'boxShadow',
  'border',
]

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponentsBindings}
 */
const bindings = bindingProperties.reduce(
  /**
   * @param {object} bindings
   * @param {Binding} cssProperty
   */
  (bindings, cssProperty) => ({
    ...bindings,
    [cssProperty]: (tokenName) => ({ synth }) => synth[cssProperty](tokenName),
  }),
  {},
)

export default bindings
