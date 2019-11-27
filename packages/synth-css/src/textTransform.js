import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const textTransform = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `typography:transform:${tokenName}`)
}

export default textTransform
