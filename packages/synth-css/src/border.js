import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const border = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  const borderWidth = getCSSDeclaration(tokens, `size:border:${tokenName}`)
  const borderStyle = getCSSDeclaration(tokens, `style:border:${tokenName}`)
  const borderColor = getCSSDeclaration(tokens, `color:border:${tokenName}`)

  return `${borderWidth} ${borderStyle} ${borderColor}`
}

export default border
