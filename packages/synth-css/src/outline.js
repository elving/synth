import { getCSSDeclaration, isTokenDeclaration } from '@beatgig/synth-core'

const outline = (tokens, tokenName = 'base') => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  const outlineWidth = getCSSDeclaration(tokens, `size:outline:${tokenName}`)
  const outlineStyle = getCSSDeclaration(tokens, `style:outline:${tokenName}`)
  const outlineColor = getCSSDeclaration(tokens, `color:outline:${tokenName}`)
  const outlineOffset = getCSSDeclaration(tokens, `space:outline:${tokenName}`)

  return `${outlineWidth} ${outlineStyle} ${outlineColor} ${outlineOffset}`
}

export default outline
