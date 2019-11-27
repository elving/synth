import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const fontSize = (tokens, name = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:size:${name}`)
}

export default fontSize
