import { isTokenDeclaration } from '@beatgig/synth-core'

import backgroundColor from './backgroundColor'
import border from './border'
import borderRadius from './borderRadius'
import bottom from './bottom'
import boxShadow from './boxShadow'
import color from './color'
import fontFamily from './fontFamily'
import fontSize from './fontSize'
import fontWeight from './fontWeight'
import height from './height'
import left from './left'
import letterSpacing from './letterSpacing'
import lineHeight from './lineHeight'
import margin from './margin'
import maxHeight from './maxHeight'
import maxWidth from './maxWidth'
import minHeight from './minHeight'
import minWidth from './minWidth'
import opacity from './opacity'
import outline from './outline'
import padding from './padding'
import right from './right'
import textDecoration from './textDecoration'
import textTransform from './textTransform'
import top from './top'
import width from './width'
import zIndex from './zIndex'

const withTokens = (tokens) => {
  if (!isTokenDeclaration(tokens)) {
    throw new TypeError(
      'Invalid param `tokens` supplied, expected a valid Synth token declaration.',
    )
  }

  return {
    backgroundColor: (tokenName) => backgroundColor(tokens, tokenName),
    border: (tokenName) => border(tokens, tokenName),
    borderRadius: (tokenName) => borderRadius(tokens, tokenName),
    bottom: (tokenName) => bottom(tokens, tokenName),
    boxShadow: (tokenName) => boxShadow(tokens, tokenName),
    color: (tokenName) => color(tokens, tokenName),
    fontFamily: (tokenName) => fontFamily(tokens, tokenName),
    fontSize: (tokenName) => fontSize(tokens, tokenName),
    fontWeight: (tokenName) => fontWeight(tokens, tokenName),
    height: (tokenName) => height(tokens, tokenName),
    left: (tokenName) => left(tokens, tokenName),
    letterSpacing: (tokenName) => letterSpacing(tokens, tokenName),
    lineHeight: (tokenName) => lineHeight(tokens, tokenName),
    margin: (tokenName) => margin(tokens, tokenName),
    maxHeight: (tokenName) => maxHeight(tokens, tokenName),
    maxWidth: (tokenName) => maxWidth(tokens, tokenName),
    minHeight: (tokenName) => minHeight(tokens, tokenName),
    minWidth: (tokenName) => minWidth(tokens, tokenName),
    opacity: (tokenName) => opacity(tokens, tokenName),
    outline: (tokenName) => outline(tokens, tokenName),
    padding: (tokenName) => padding(tokens, tokenName),
    right: (tokenName) => right(tokens, tokenName),
    textDecoration: (tokenName) => textDecoration(tokens, tokenName),
    textTransform: (tokenName) => textTransform(tokens, tokenName),
    top: (tokenName) => top(tokens, tokenName),
    width: (tokenName) => width(tokens, tokenName),
    zIndex: (tokenName) => zIndex(tokens, tokenName),
  }
}

export default withTokens
