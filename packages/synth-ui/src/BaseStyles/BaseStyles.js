import { backgroundColor } from '@beatgig/synth-styled-components'
import { createGlobalStyle } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

import InterThinWOFF from '../assets/fonts/Inter-Thin.woff'
import InterThinWOFF2 from '../assets/fonts/Inter-Thin.woff2'
import InterThinItalicWOFF from '../assets/fonts/Inter-ThinItalic.woff'
import InterThinItalicWOFF2 from '../assets/fonts/Inter-ThinItalic.woff2'
import InterExtraLightWOFF from '../assets/fonts/Inter-ExtraLight.woff'
import InterExtraLightWOFF2 from '../assets/fonts/Inter-ExtraLight.woff2'
import InterExtraLightItalicWOFF from '../assets/fonts/Inter-ExtraLightItalic.woff'
import InterExtraLightItalicWOFF2 from '../assets/fonts/Inter-ExtraLightItalic.woff2'
import InterLightWOFF from '../assets/fonts/Inter-Light.woff'
import InterLightWOFF2 from '../assets/fonts/Inter-Light.woff2'
import InterLightItalicWOFF from '../assets/fonts/Inter-LightItalic.woff'
import InterLightItalicWOFF2 from '../assets/fonts/Inter-LightItalic.woff2'
import InterRegularWOFF from '../assets/fonts/Inter-Regular.woff'
import InterRegularWOFF2 from '../assets/fonts/Inter-Regular.woff2'
import InterItalicWOFF from '../assets/fonts/Inter-Italic.woff'
import InterItalicWOFF2 from '../assets/fonts/Inter-Italic.woff2'
import InterMediumWOFF from '../assets/fonts/Inter-Medium.woff'
import InterMediumWOFF2 from '../assets/fonts/Inter-Medium.woff2'
import InterMediumItalicWOFF from '../assets/fonts/Inter-MediumItalic.woff'
import InterMediumItalicWOFF2 from '../assets/fonts/Inter-MediumItalic.woff2'
import InterSemiBoldWOFF from '../assets/fonts/Inter-SemiBold.woff'
import InterSemiBoldWOFF2 from '../assets/fonts/Inter-SemiBold.woff2'
import InterSemiBoldItalicWOFF from '../assets/fonts/Inter-SemiBoldItalic.woff'
import InterSemiBoldItalicWOFF2 from '../assets/fonts/Inter-SemiBoldItalic.woff2'
import InterBoldWOFF from '../assets/fonts/Inter-Bold.woff'
import InterBoldWOFF2 from '../assets/fonts/Inter-Bold.woff2'
import InterBoldItalicWOFF from '../assets/fonts/Inter-BoldItalic.woff'
import InterBoldItalicWOFF2 from '../assets/fonts/Inter-BoldItalic.woff2'
import InterExtraBoldWOFF from '../assets/fonts/Inter-ExtraBold.woff'
import InterExtraBoldWOFF2 from '../assets/fonts/Inter-ExtraBold.woff2'
import InterExtraBoldItalicWOFF from '../assets/fonts/Inter-ExtraBoldItalic.woff'
import InterExtraBoldItalicWOFF2 from '../assets/fonts/Inter-ExtraBoldItalic.woff2'

const fonts = {
  weight100: {
    woff: InterThinWOFF,
    woff2: InterThinWOFF2,
    italic: {
      woff: InterThinItalicWOFF,
      woff2: InterThinItalicWOFF2,
    },
  },
  weight200: {
    woff: InterExtraLightWOFF,
    woff2: InterExtraLightWOFF2,
    italic: {
      woff: InterExtraLightItalicWOFF,
      woff2: InterExtraLightItalicWOFF2,
    },
  },
  weight300: {
    woff: InterLightWOFF,
    woff2: InterLightWOFF2,
    italic: {
      woff: InterLightItalicWOFF,
      woff2: InterLightItalicWOFF2,
    },
  },
  weight400: {
    woff: InterRegularWOFF,
    woff2: InterRegularWOFF2,
    italic: {
      woff: InterItalicWOFF,
      woff2: InterItalicWOFF2,
    },
  },
  weight500: {
    woff: InterMediumWOFF,
    woff2: InterMediumWOFF2,
    italic: {
      woff: InterMediumItalicWOFF,
      woff2: InterMediumItalicWOFF2,
    },
  },
  weight600: {
    woff: InterSemiBoldWOFF,
    woff2: InterSemiBoldWOFF2,
    italic: {
      woff: InterSemiBoldItalicWOFF,
      woff2: InterSemiBoldItalicWOFF2,
    },
  },
  weight700: {
    woff: InterBoldWOFF,
    woff2: InterBoldWOFF2,
    italic: {
      woff: InterBoldItalicWOFF,
      woff2: InterBoldItalicWOFF2,
    },
  },
  weight800: {
    woff: InterExtraBoldWOFF,
    woff2: InterExtraBoldWOFF2,
    italic: {
      woff: InterExtraBoldItalicWOFF,
      woff2: InterExtraBoldItalicWOFF2,
    },
  },
}

const generateFontFaces = () => () =>
  Object.keys(fonts).reduce(
    (fontFaces, fontWeight) => `
  ${fontFaces}

  @font-face {
    font-family: 'Inter';
    font-weight: ${fontWeight.replace('weight', '')};
    font-style: normal;
    font-display: swap;
    src: 
      url(${fonts[fontWeight].woff2}) format("woff2"), 
      url(${fonts[fontWeight].woff}) format("woff");
  }

  @font-face {
    font-family: 'Inter';
    font-weight: ${fontWeight.replace('weight', '')};
    font-style: italic;
    font-display: swap;
    src: 
      url(${fonts[fontWeight].italic.woff}) format("woff2"),
      url(${fonts[fontWeight].italic.woff2}) format("woff");
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
