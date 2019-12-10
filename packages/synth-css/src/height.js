import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const height = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:height:${tokenName}`)
}

export default height
