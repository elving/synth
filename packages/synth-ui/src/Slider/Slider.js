import PropTypes from 'prop-types'
import React, { Children, forwardRef, useRef, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { borderRadius } from '@beatgig/synth-styled-components'
import { last } from '@beatgig/array'
import { useElementOnScreen } from '@beatgig/hooks'
import { withSynth } from '@beatgig/synth-react'

import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'
import { Clickable } from '../Clickable'
import { Flex } from '../Flex'

import { styleProp } from '../utils'

const PreventSwipeNavigation = createGlobalStyle`
  body, html {
    overscroll-behavior-x: none;
  }
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const Container = styled(Flex)`
  position: relative;
`

/**
 * @type {import('@beatgig/synth-ui').ClickableComponent}
 */
const NavBtn = styled(Clickable)`
  border: 0 none;
  height: 100%;
  opacity: 1;
  position: absolute;
  top: 0;
  z-index: 10;

  :disabled {
    opacity: 0;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

/**
 * @type {import('@beatgig/synth-ui').ClickableComponent}
 */
const PrevBtn = styled(NavBtn)`
  background: rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  left: 0;

  :disabled {
    left: -100%;
  }
`

/**
 * @type {import('@beatgig/synth-ui').ClickableComponent}
 */
const NextBtn = styled(NavBtn)`
  background: rgba(0, 0, 0, 0.25);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.45) 100%
  );
  right: 0;

  :disabled {
    right: -100%;
  }
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const Item = styled(Flex)`
  margin-right: ${({ synth }) => synth.getUnit('space:@spacing.3')};
`

/**
 * @type {import('@beatgig/synth-styled-components').SynthStyledComponent<import('@beatgig/synth-ui').FlexComponent, import('@beatgig/synth-ui').SliderProps>}
 */
const Items = styled(Flex)`
  position: relative;
  z-index: 5;

  > * {
    width: calc(100% / ${styleProp('itemsToShow')});
  }
`

const Sizer = styled.div`
  left: -1000em;
  position: absolute;
  top: -1000em;
  width: calc(100% / ${styleProp('itemsToShow')});
`

/**
 * @type {import('@beatgig/synth-ui').FlexComponent}
 */
const ItemsWrapper = styled(Flex)`
  ${borderRadius()}
  -ms-overflow-style: none;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none;
  will-change: scroll-position;

  &::-webkit-scrollbar {
    height: 0px;
  }
`

const Slider = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').SliderProps & import('@beatgig/synth-react').SynthComponentProps} props
   */
  ({ className = '', children = null, itemsToShow = 1, synth }, ref) => {
    const $container = useRef(null)
    const $firstItem = useRef(null)
    const $lastItem = useRef(null)
    const $sizer = useRef(null)
    const totalItems = Children.count(children)
    const [isHovering, setHoveringState] = useState(false)

    const { isVisible: nextBtnDisabled } = useElementOnScreen($lastItem, {
      root: $container.current,
      threshold: 1.0,
    })

    const { isVisible: prevBtnDisabled } = useElementOnScreen($firstItem, {
      root: $container.current,
      threshold: 1.0,
    })

    const getItems = () =>
      $container.current
        ? Array.from($container.current.children[0].children).slice(1)
        : []

    const getFirstItemPosition = () =>
      $container.current && $sizer.current
        ? Math.round($container.current.scrollLeft / $sizer.current.offsetWidth)
        : 0

    const showNext = () => {
      const $items = getItems()

      const $nextItem =
        $items[getFirstItemPosition() + itemsToShow] || last($items)

      if ($nextItem) {
        $nextItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        })
      }
    }

    const showPrev = () => {
      const $items = getItems()
      const $nextItem =
        $items[getFirstItemPosition() - itemsToShow] || $items[0]

      if ($nextItem) {
        $nextItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        })
      }
    }

    const handleEnter = () => setHoveringState(true)
    const handleLeave = () => setHoveringState(false)

    return (
      <Container centerY fullWidth justifyContent="space-between" ref={ref}>
        {isHovering && <PreventSwipeNavigation />}

        {totalItems > itemsToShow && (
          <PrevBtn
            icon={<ArrowLeftIcon scale={6} />}
            disabled={prevBtnDisabled}
            onClick={showPrev}
          />
        )}

        <ItemsWrapper
          center
          fullWidth
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onTouchEnd={handleLeave}
          onTouchStart={handleEnter}
          ref={$container}
          synth={synth}
        >
          <Items itemsToShow={itemsToShow} full>
            <Sizer ref={$sizer} />
            {Children.map(children, (child, index) => (
              <Item
                shrink={0}
                synth={synth}
                ref={
                  index === 0
                    ? $firstItem
                    : index + 1 === totalItems
                    ? $lastItem
                    : null
                }
              >
                {child}
              </Item>
            ))}
          </Items>
        </ItemsWrapper>

        {totalItems > itemsToShow && (
          <NextBtn
            icon={<ArrowRightIcon scale={6} />}
            disabled={nextBtnDisabled}
            onClick={showNext}
          />
        )}
      </Container>
    )
  },
)

Slider.propTypes = {
  /**
   * The elements you want to display within this slider component.
   */
  children: PropTypes.node,
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The number of items you want to be visible.
   */
  itemsToShow: PropTypes.number,
}

Slider.defaultProps = {
  children: null,
  className: '',
  itemsToShow: 1,
}

Slider.displayName = 'Slider'

export default withSynth(Slider)
