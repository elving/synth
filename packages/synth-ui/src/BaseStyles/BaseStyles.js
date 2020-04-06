import { backgroundColor } from '@beatgig/synth-styled-components'
import { createGlobalStyle } from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { setBaseStyles } from '../utils'

// @ts-ignore
import InterThinWOFF from '../assets/fonts/Inter-Thin.woff'
// @ts-ignore
import InterThinWOFF2 from '../assets/fonts/Inter-Thin.woff2'
// @ts-ignore
import InterThinItalicWOFF from '../assets/fonts/Inter-ThinItalic.woff'
// @ts-ignore
import InterThinItalicWOFF2 from '../assets/fonts/Inter-ThinItalic.woff2'
// @ts-ignore
import InterExtraLightWOFF from '../assets/fonts/Inter-ExtraLight.woff'
// @ts-ignore
import InterExtraLightWOFF2 from '../assets/fonts/Inter-ExtraLight.woff2'
// @ts-ignore
import InterExtraLightItalicWOFF from '../assets/fonts/Inter-ExtraLightItalic.woff'
// @ts-ignore
import InterExtraLightItalicWOFF2 from '../assets/fonts/Inter-ExtraLightItalic.woff2'
// @ts-ignore
import InterLightWOFF from '../assets/fonts/Inter-Light.woff'
// @ts-ignore
import InterLightWOFF2 from '../assets/fonts/Inter-Light.woff2'
// @ts-ignore
import InterLightItalicWOFF from '../assets/fonts/Inter-LightItalic.woff'
// @ts-ignore
import InterLightItalicWOFF2 from '../assets/fonts/Inter-LightItalic.woff2'
// @ts-ignore
import InterRegularWOFF from '../assets/fonts/Inter-Regular.woff'
// @ts-ignore
import InterRegularWOFF2 from '../assets/fonts/Inter-Regular.woff2'
// @ts-ignore
import InterItalicWOFF from '../assets/fonts/Inter-Italic.woff'
// @ts-ignore
import InterItalicWOFF2 from '../assets/fonts/Inter-Italic.woff2'
// @ts-ignore
import InterMediumWOFF from '../assets/fonts/Inter-Medium.woff'
// @ts-ignore
import InterMediumWOFF2 from '../assets/fonts/Inter-Medium.woff2'
// @ts-ignore
import InterMediumItalicWOFF from '../assets/fonts/Inter-MediumItalic.woff'
// @ts-ignore
import InterMediumItalicWOFF2 from '../assets/fonts/Inter-MediumItalic.woff2'
// @ts-ignore
import InterSemiBoldWOFF from '../assets/fonts/Inter-SemiBold.woff'
// @ts-ignore
import InterSemiBoldWOFF2 from '../assets/fonts/Inter-SemiBold.woff2'
// @ts-ignore
import InterSemiBoldItalicWOFF from '../assets/fonts/Inter-SemiBoldItalic.woff'
// @ts-ignore
import InterSemiBoldItalicWOFF2 from '../assets/fonts/Inter-SemiBoldItalic.woff2'
// @ts-ignore
import InterBoldWOFF from '../assets/fonts/Inter-Bold.woff'
// @ts-ignore
import InterBoldWOFF2 from '../assets/fonts/Inter-Bold.woff2'
// @ts-ignore
import InterBoldItalicWOFF from '../assets/fonts/Inter-BoldItalic.woff'
// @ts-ignore
import InterBoldItalicWOFF2 from '../assets/fonts/Inter-BoldItalic.woff2'
// @ts-ignore
import InterExtraBoldWOFF from '../assets/fonts/Inter-ExtraBold.woff'
// @ts-ignore
import InterExtraBoldWOFF2 from '../assets/fonts/Inter-ExtraBold.woff2'
// @ts-ignore
import InterExtraBoldItalicWOFF from '../assets/fonts/Inter-ExtraBoldItalic.woff'
// @ts-ignore
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
    ${backgroundColor('@primary')}
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
