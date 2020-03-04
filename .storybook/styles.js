import { setBaseStyles } from '../packages/synth-ui/src'
import { withSynth } from '../packages/synth-react/src'
import { createGlobalStyle } from 'styled-components'

import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  margin,
  padding,
} from '../packages/synth-styled-components/src'

const Styles = createGlobalStyle`
  * {
    font-family: Inter, -apple-system, system-ui, BlinkMacSystemFont, Segoe UI,Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Helvetica Neue, Helvetica, Arial, sans-serif !important;
  }

  pre, code {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
  }

  body, html {
    ${setBaseStyles()}
    background-color: transparent;
  }

  body, html, #root {
    height: 100%;
    width: 100%;
  }

  .sbdocs {      
    && {
      &.sbdocs-wrapper {
        ${padding('@spacing.6')}
      }

      code {
        ${borderRadius()}
        ${fontSize('@fontSizes.2')}
        background-color: rgba(255, 255, 255, 0.055);
        border: 1px solid rgba(255,255,255,.035);
        padding: 1px 2px 2px;
      }

      .simplebar-content code {
        background-color: transparent;
        border-color: transparent;
      }

      .sbdocs-content {
        max-width: 1024px;
      }

      .sbdocs-h1,
      .sbdocs-h2,
      .sbdocs-h3,
      .sbdocs-h4,
      .sbdocs-h5,
      .sbdocs-h6 {
        color: #fff;
        border: 0 none;
        padding: 0;
        ${fontWeight('heading')}
        ${margin('heading')}
      }

      .sbdocs-p,
      .sbdocs-li {
        color: #a7a9be;
        ${fontSize('text')}        
        
        &.sbdocs-p {
          ${margin('paragraph')}
        }

        a {
          ${color('@BeatGig.1')}
          ${fontSize('text')}
          text-decoration: underline;
        }
      }

      .sbdocs-table {
        width: 100%;

        thead tr, thead th, tbody tr, tbody td {
          border: 0 none;
        }

        thead tr {
          border-bottom: 1px solid ${({ synth }) =>
            synth.getValue('color:@Shark')};
        }

        th {
          ${color('@Oslo')}
        }
        
        tr {
          background-color: transparent;

          &:nth-child(even) {
            background-color: rgba(255, 255, 255, 0.035);
          }

          td {
            &:first-child {
              border-top-left-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
              border-bottom-left-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
            }

            &:last-child {
              border-top-right-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
              border-bottom-right-radius: ${({ synth }) =>
                synth.getUnit('size:radius')};
            }        
          }
        }

        th, td {
          border-left: 0 none;
          border-right: 0 none;
          padding: 10px;
        }
      }

      [data-simplebar="init"] + div {
        background-color: transparent;
      }
    }
  }
`

export default withSynth(Styles)
