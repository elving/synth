import { getPropertyToTokenMap } from '@beatgig/synth-css'

const bindingProperties = [
  ...Object.keys(getPropertyToTokenMap('camelCase')),
  'boxShadow',
  'border',
]

const bindings = bindingProperties.reduce(
  (bindings, cssProperty) => ({
    ...bindings,
    [cssProperty]: (tokenName) => ({ synth }) => synth[cssProperty](tokenName),
  }),
  {},
)

export default bindings
