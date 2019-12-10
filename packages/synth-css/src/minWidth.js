import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const minWidth = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `size:minWidth:${tokenName}`)
}

export default minWidth
