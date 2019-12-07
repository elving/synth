import PropTypes from 'prop-types'
import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { unit } from '@beatgig/synth-core'

import { styleProp } from '../utils'

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<'svg', import('@beatgig/synth-ui').MiniLogoProps>}
 */
const StyledSvg = styled.svg`
  height: ${unit(styleProp('height'))};
  width: ${unit(styleProp('width'))};
`

const MiniLogo = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').MiniLogoProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  (
    {
      className = '',
      dark = false,
      height = '333px',
      width = 'auto',
      ...props
    },
    ref,
  ) => {
    const fill = dark ? '#1E1C21' : '#FCFDFD'

    return (
      <StyledSvg
        {...props}
        className={className}
        height={height}
        ref={ref}
        viewBox="0 0 316 333"
        width={width}
      >
        <path
          d="M315.165 191.791L315.2 190.48H264.425C256.18 204.106 241.21 213.212 224.101 213.212C207.026 213.212 192.021 204.106 183.777 190.48H132.001C142.66 231.425 179.845 261.642 224.101 261.642C238.278 261.642 251.696 258.537 263.804 252.984L265.011 252.466C258.871 271.404 241.107 285.098 220.169 285.098C218.203 285.098 216.305 284.96 214.408 284.719V332.493C216.305 332.596 218.203 332.7 220.169 332.7C271.91 332.7 313.993 291.376 315.234 239.91H315.303V191.791H315.165"
          fill={fill}
        />
        <path
          d="M224.114 71.312C198.655 71.312 175.575 81.3163 158.499 97.5648C170.504 109.432 179.405 124.473 183.786 141.308H183.82C192.1 127.854 207.107 118.919 224.114 118.919C241.087 118.919 255.955 127.923 264.269 141.377H315.913C304.908 101.015 267.961 71.312 224.114 71.312"
          fill={fill}
        />
        <path
          d="M132.022 190.594H131.888C123.608 204.004 108.756 212.956 91.7923 212.956C74.795 212.956 59.9431 203.971 51.6288 190.494H0C10.9963 230.858 47.9413 260.561 91.7923 260.561C117.204 260.561 140.303 250.571 157.367 234.311C145.332 222.477 136.414 207.457 132.022 190.594"
          fill="#FAC62A"
        />
        <path
          d="M51.4715 141.375C59.7249 127.765 74.7158 118.669 91.7953 118.669C108.908 118.669 123.866 127.765 132.153 141.375H183.795C173.15 100.445 136.06 70.227 91.7953 70.227C77.6466 70.227 64.2051 73.3263 52.1113 78.8848V0.561707H0.70459V141.375H51.4715Z"
          fill="#FAC62A"
        />
      </StyledSvg>
    )
  },
)

MiniLogo.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * A boolean flag to determine the color variant of the logo; The default is white.
   */
  dark: PropTypes.bool,
  /**
   * An optional height to be given to the logo.
   */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * An optional width to be given to the logo.
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

MiniLogo.defaultProps = {
  className: '',
  dark: false,
  height: '331px',
  width: 'auto',
}

MiniLogo.displayName = 'MiniLogo'

export default MiniLogo
