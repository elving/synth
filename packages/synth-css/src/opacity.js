import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const opacity = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return getCSSDeclaration(tokens, `style:opacity:${tokenName}`)
}

export default opacity
