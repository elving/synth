// @ts-nocheck
import PropTypes from 'prop-types'
import React, { Children, useRef, useState, useReducer } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'
import { Clickable } from '../Clickable'
import { Flex } from '../Flex'

import { initReducer, reducer } from './reducer'
import { ACTION_ENABLE, ACTION_SHOW_NEXT, ACTION_SHOW_PREV } from './actions'

const PreventSwipeNavigation = createGlobalStyle`
  body, html {
    overscroll-behavior-x: none;
  }
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const Items = styled(Flex)`
  z-index: 1;
  overflow: visible;
  position: relative;
  transform: translate3d(
    -${({ itemsToShow, firstPosition }) => (100 / itemsToShow) * (firstPosition - 1)}%,
    0,
    0
  );
  transition: ${({ speed, easing }) => `transform ${speed}ms ${easing}`};

  > * {
    width: calc(100% / ${({ itemsToShow }) => itemsToShow});
  }
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const ItemsWrapper = styled(Flex)`
  overflow-x: scroll;
  overflow-x: ${({ isEnabled }) => ((isEnabled ? 'scroll' : 'hidden'))};
  overflow-y: visible;
`

const Slider = ({ speed, easing, children, itemsToShow }) => {
  const lastDeltaX = useRef(0)
  const lastScrollLeft = useRef(0)
  const scrollDisabled = useRef(false)
  const [isHovering, setHoveringState] = useState(false)

  const [state, dispatch] = useReducer(
    reducer,
    {
      firstPosition: 1,
      totalItems: Children.count(children),
      itemsToShow,
    },
    initReducer,
  )

  const enable = () => {
    lastScrollLeft.current = 0
    scrollDisabled.current = false
    dispatch({ type: ACTION_ENABLE })
  }

  const showNext = () => dispatch({ type: ACTION_SHOW_NEXT })
  const showPrev = () => dispatch({ type: ACTION_SHOW_PREV })
  const handleMouseEnter = () => setHoveringState(true)
  const handleMouseLeave = () => setHoveringState(false)

  const handleWheel = (event) => {
    console.log(event.deltaX)
    if (event.deltaX > 2) {
      lastDeltaX.current = event.deltaX
      console.log('b')
      // showNext()
    } else if (event.deltaX < -2) {
      lastDeltaX.current = event.deltaX
      console.log('c')
      // showPrev()
    }
  }

  const handleScroll = (event) => {
    console.log(event.target.scrollLeft)
    if (scrollDisabled.current) {
      event.preventDefault()
      return false
    }

    if (event.target.scrollLeft > lastScrollLeft.current) {
      scrollDisabled.current = true
      lastScrollLeft.current = 0
      console.log('right 1')
      showNext()
    } else if (event.target.scrollLeft < lastScrollLeft.current) {
      scrollDisabled.current = true
      lastScrollLeft.current = 0
      console.log('left 2')
      showPrev()
    }

    lastScrollLeft.current = event.target.scrollLeft
  }

  return (
    <Flex centerY fullWidth justifyContent="space-between">
      {isHovering && <PreventSwipeNavigation />}

      {state.itemsToShow < state.totalItems && (
        <Clickable
          icon={<ArrowLeftIcon scale={5} />}
          disabled={!state.isEnabled || !state.canShowPrev}
          onClick={state.isEnabled && state.canShowPrev ? showPrev : undefined}
          withoutPadding
        />
      )}

      <ItemsWrapper
        center
        fullWidth
        isEnabled={!scrollDisabled.current}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        onTouchStart={() => {
          console.log('onTouchStart')
        }}
        onTouchEnd={() => {
          console.log('onTouchEnd')
        }}
      >
        <Items
          centerY
          easing={easing}
          firstPosition={state.firstPosition}
          full
          itemsToShow={state.itemsToShow}
          onTransitionEnd={enable}
          speed={speed}
        >
          {Children.map(children, (child, index) => (
            <Flex key={`slider-${index}`} padding="@spacing.2" shrink={0}>
              {child}
            </Flex>
          ))}
        </Items>
      </ItemsWrapper>

      {state.itemsToShow < state.totalItems && (
        <Clickable
          icon={<ArrowRightIcon scale={5} />}
          disabled={!state.isEnabled || !state.canShowNext}
          onClick={state.isEnabled && state.canShowNext ? showNext : undefined}
          withoutPadding
        />
      )}
    </Flex>
  )
}

Slider.propTypes = {
  /**
   * @type {number} The speed of the item transition in milliseconds.
   */
  speed: PropTypes.number,

  /**
   * @type {Number|string} The amount of padding each item will have in order
   * to separate them.
   * @example "50%"
   * @example 10 // Will be converted to "10px"
   */
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @type {number} The easing function for the item transition.
   */
  easing: PropTypes.string,

  /**
   * @type {*} The items to be displayed.
   */
  children: PropTypes.node,

  /**
   * @type {string} Prefix used to generate the `key` prop when rendering
   * the item clones.
   */
  keyPrefix: PropTypes.string.isRequired,

  /**
   * @type {number} The amount of items to display at the same time.
   */
  itemsToShow: PropTypes.number,
}

Slider.defaultProps = {
  speed: 300,
  gutter: 0,
  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  children: null,
  itemsToShow: 1,
}

export default Slider

// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import React, { forwardRef } from 'react'
// import { borderRadius, boxShadow } from '@beatgig/synth-styled-components'
// import { Text, withSynth } from '@beatgig/synth-react'

// import { Background } from '../Background'
// import { Flex } from '../Flex'
// import { Heading } from '../Typography'
// import { Rating } from '../Rating'
// import { Spacer } from '../Spacer'

// /**
//  * @type {import('@beatgig/synth-ui').BackgroundComponent}
//  */
// const StyledBackground = styled(Background)`
//   ${borderRadius()}
//   ${boxShadow('subtle')}
// `

// /**
//  * @type {import('@beatgig/synth-ui').FlexComponent}
//  */
// const Content = styled(Flex)`
//   text-align: center;
// `

// const ArtistCard = forwardRef(
//   /**
//    * @param {import('@beatgig/synth-ui').ArtistCardProps & import('@beatgig/synth-react').SynthComponentProps} props
//    */
//   ({ className = '', artist, synth }, ref) => (
//     <Flex column className={className} fullWidth ref={ref}>
//       <StyledBackground
//         image={artist.avatar}
//         position="center center"
//         ratio=".85"
//         repeat="no-repeat"
//         size="cover"
//         synth={synth}
//         width="100%"
//       />
//       <Spacer scale={1} bottom />
//       <Content center column fullWidth>
//         <Heading level="h5" weight="@fontWeights" withoutMargin>
//           {artist.stageName}
//         </Heading>
//         <Spacer bottom />
//         <Text color="meta">
//           {artist.genres.map(({ name }) => name).join(', ')}
//         </Text>
//         <Spacer bottom />
//         <Rating scale={1} rating={artist.rating} />
//       </Content>
//     </Flex>
//   ),
// )

// ArtistCard.propTypes = {
//   /**
//    * Required to properly extend styled-components.
//    * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
//    */
//   className: PropTypes.string,
//   /**
//    * The artist object holding their information to be displayed.
//    */
//   artist: PropTypes.exact({
//     avatar: PropTypes.string,
//     genres: PropTypes.arrayOf(
//       PropTypes.exact({
//         id: PropTypes.string,
//         name: PropTypes.string,
//       }),
//     ),
//     id: PropTypes.string,
//     rating: PropTypes.number,
//     stageName: PropTypes.string,
//   }),
// }

// ArtistCard.defaultProps = {
//   className: '',
// }

// ArtistCard.displayName = 'ArtistCard'

// export default withSynth(ArtistCard)
