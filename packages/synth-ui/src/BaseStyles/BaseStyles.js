import { backgroundColor } from '@beatgig/synth-styled-components'
import { createGlobalStyle } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import PublicSansThinTTF from '../assets/fonts/PublicSans-Thin.ttf'
import PublicSansThinWOFF from '../assets/fonts/PublicSans-Thin.woff'
import PublicSansThinWOFF2 from '../assets/fonts/PublicSans-Thin.woff2'
import PublicSansThinItalicTTF from '../assets/fonts/PublicSans-ThinItalic.ttf'
import PublicSansThinItalicWOFF from '../assets/fonts/PublicSans-ThinItalic.woff'
import PublicSansThinItalicWOFF2 from '../assets/fonts/PublicSans-ThinItalic.woff2'
import PublicSansExtraLightTTF from '../assets/fonts/PublicSans-ExtraLight.ttf'
import PublicSansExtraLightWOFF from '../assets/fonts/PublicSans-ExtraLight.woff'
import PublicSansExtraLightWOFF2 from '../assets/fonts/PublicSans-ExtraLight.woff2'
import PublicSansExtraLightItalicTTF from '../assets/fonts/PublicSans-ExtraLightItalic.ttf'
import PublicSansExtraLightItalicWOFF from '../assets/fonts/PublicSans-ExtraLightItalic.woff'
import PublicSansExtraLightItalicWOFF2 from '../assets/fonts/PublicSans-ExtraLightItalic.woff2'
import PublicSansLightTTF from '../assets/fonts/PublicSans-Light.ttf'
import PublicSansLightWOFF from '../assets/fonts/PublicSans-Light.woff'
import PublicSansLightWOFF2 from '../assets/fonts/PublicSans-Light.woff2'
import PublicSansLightItalicTTF from '../assets/fonts/PublicSans-LightItalic.ttf'
import PublicSansLightItalicWOFF from '../assets/fonts/PublicSans-LightItalic.woff'
import PublicSansLightItalicWOFF2 from '../assets/fonts/PublicSans-LightItalic.woff2'
import PublicSansRegularTTF from '../assets/fonts/PublicSans-Regular.ttf'
import PublicSansRegularWOFF from '../assets/fonts/PublicSans-Regular.woff'
import PublicSansRegularWOFF2 from '../assets/fonts/PublicSans-Regular.woff2'
import PublicSansItalicTTF from '../assets/fonts/PublicSans-Italic.ttf'
import PublicSansItalicWOFF from '../assets/fonts/PublicSans-Italic.woff'
import PublicSansItalicWOFF2 from '../assets/fonts/PublicSans-Italic.woff2'
import PublicSansMediumTTF from '../assets/fonts/PublicSans-Medium.ttf'
import PublicSansMediumWOFF from '../assets/fonts/PublicSans-Medium.woff'
import PublicSansMediumWOFF2 from '../assets/fonts/PublicSans-Medium.woff2'
import PublicSansMediumItalicTTF from '../assets/fonts/PublicSans-MediumItalic.ttf'
import PublicSansMediumItalicWOFF from '../assets/fonts/PublicSans-MediumItalic.woff'
import PublicSansMediumItalicWOFF2 from '../assets/fonts/PublicSans-MediumItalic.woff2'
import PublicSansSemiBoldTTF from '../assets/fonts/PublicSans-SemiBold.ttf'
import PublicSansSemiBoldWOFF from '../assets/fonts/PublicSans-SemiBold.woff'
import PublicSansSemiBoldWOFF2 from '../assets/fonts/PublicSans-SemiBold.woff2'
import PublicSansSemiBoldItalicTTF from '../assets/fonts/PublicSans-SemiBoldItalic.ttf'
import PublicSansSemiBoldItalicWOFF from '../assets/fonts/PublicSans-SemiBoldItalic.woff'
import PublicSansSemiBoldItalicWOFF2 from '../assets/fonts/PublicSans-SemiBoldItalic.woff2'
import PublicSansBoldTTF from '../assets/fonts/PublicSans-Bold.ttf'
import PublicSansBoldWOFF from '../assets/fonts/PublicSans-Bold.woff'
import PublicSansBoldWOFF2 from '../assets/fonts/PublicSans-Bold.woff2'
import PublicSansBoldItalicTTF from '../assets/fonts/PublicSans-BoldItalic.ttf'
import PublicSansBoldItalicWOFF from '../assets/fonts/PublicSans-BoldItalic.woff'
import PublicSansBoldItalicWOFF2 from '../assets/fonts/PublicSans-BoldItalic.woff2'
import PublicSansExtraBoldTTF from '../assets/fonts/PublicSans-ExtraBold.ttf'
import PublicSansExtraBoldWOFF from '../assets/fonts/PublicSans-ExtraBold.woff'
import PublicSansExtraBoldWOFF2 from '../assets/fonts/PublicSans-ExtraBold.woff2'
import PublicSansExtraBoldItalicTTF from '../assets/fonts/PublicSans-ExtraBoldItalic.ttf'
import PublicSansExtraBoldItalicWOFF from '../assets/fonts/PublicSans-ExtraBoldItalic.woff'
import PublicSansExtraBoldItalicWOFF2 from '../assets/fonts/PublicSans-ExtraBoldItalic.woff2'

const fonts = {
  weight100: {
    ttf: PublicSansThinTTF,
    woff: PublicSansThinWOFF,
    woff2: PublicSansThinWOFF2,
    italic: {
      ttf: PublicSansThinItalicTTF,
      woff: PublicSansThinItalicWOFF,
      woff2: PublicSansThinItalicWOFF2,
    },
  },
  weight200: {
    ttf: PublicSansExtraLightTTF,
    woff: PublicSansExtraLightWOFF,
    woff2: PublicSansExtraLightWOFF2,
    italic: {
      ttf: PublicSansExtraLightItalicTTF,
      woff: PublicSansExtraLightItalicWOFF,
      woff2: PublicSansExtraLightItalicWOFF2,
    },
  },
  weight300: {
    ttf: PublicSansLightTTF,
    woff: PublicSansLightWOFF,
    woff2: PublicSansLightWOFF2,
    italic: {
      ttf: PublicSansLightItalicTTF,
      woff: PublicSansLightItalicWOFF,
      woff2: PublicSansLightItalicWOFF2,
    },
  },
  weight400: {
    ttf: PublicSansRegularTTF,
    woff: PublicSansRegularWOFF,
    woff2: PublicSansRegularWOFF2,
    italic: {
      ttf: PublicSansItalicTTF,
      woff: PublicSansItalicWOFF,
      woff2: PublicSansItalicWOFF2,
    },
  },
  weight500: {
    ttf: PublicSansMediumTTF,
    woff: PublicSansMediumWOFF,
    woff2: PublicSansMediumWOFF2,
    italic: {
      ttf: PublicSansMediumItalicTTF,
      woff: PublicSansMediumItalicWOFF,
      woff2: PublicSansMediumItalicWOFF2,
    },
  },
  weight600: {
    ttf: PublicSansSemiBoldTTF,
    woff: PublicSansSemiBoldWOFF,
    woff2: PublicSansSemiBoldWOFF2,
    italic: {
      ttf: PublicSansSemiBoldItalicTTF,
      woff: PublicSansSemiBoldItalicWOFF,
      woff2: PublicSansSemiBoldItalicWOFF2,
    },
  },
  weight700: {
    ttf: PublicSansBoldTTF,
    woff: PublicSansBoldWOFF,
    woff2: PublicSansBoldWOFF2,
    italic: {
      ttf: PublicSansBoldItalicTTF,
      woff: PublicSansBoldItalicWOFF,
      woff2: PublicSansBoldItalicWOFF2,
    },
  },
  weight800: {
    ttf: PublicSansExtraBoldTTF,
    woff: PublicSansExtraBoldWOFF,
    woff2: PublicSansExtraBoldWOFF2,
    italic: {
      ttf: PublicSansExtraBoldItalicTTF,
      woff: PublicSansExtraBoldItalicWOFF,
      woff2: PublicSansExtraBoldItalicWOFF2,
    },
  },
}

const generateFontFaces = () => () =>
  Object.keys(fonts).reduce(
    (fontFaces, fontWeight) => `
  ${fontFaces}

  @font-face {
    font-family: 'PublicSans';
    font-weight: ${fontWeight.replace('weight', '')};
    font-style: normal;
    font-display: swap;
    src: url(${fonts[fontWeight].woff2}) format("woff2"), 
      url(${fonts[fontWeight].woff}) format("woff"), 
      url(${fonts[fontWeight].ttf}) format("truetype");
  }

  @font-face {
    font-family: 'PublicSans';
    font-weight: ${fontWeight.replace('weight', '')};
    font-style: italic;
    font-display: swap;
    src: url(${fonts[fontWeight].italic.woff}) format("woff2"),
      url(${fonts[fontWeight].italic.woff2}) format("woff"),
      url(${fonts[fontWeight].italic.ttf}) format("truetype");
  }
`,
    '',
  )

const BaseStyles = createGlobalStyle`  
  ${generateFontFaces()}

  body, html {
    ${setBaseStyles()}
    ${backgroundColor('@Thunder')}
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *,
  *:after,
  *:before {
    color: inherit;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    box-sizing: inherit;
  }
`

export default withSynth(BaseStyles)
