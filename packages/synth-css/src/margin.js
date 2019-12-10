import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const margin = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `space:margin:${tokenName}`)
}

export default margin
