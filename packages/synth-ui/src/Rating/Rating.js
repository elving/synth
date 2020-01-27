import PropTypes from 'prop-types'
import React, { forwardRef, Fragment } from 'react'
import styled from 'styled-components'
import { withSynth } from '@beatgig/synth-react'

import { Flex } from '../Flex'
import { Small } from '../Typography'
import { Spacer } from '../Spacer'
import { StarEmptyIcon, StarFullIcon, StarHalfIcon } from '../Icons'

import { toSequence } from './utils'

import {
  RATING_STAR_EMPTY,
  RATING_STAR_HALF,
  RATING_STAR_FULL,
} from './constants'

const Rating = forwardRef(
  /**
   * @param {import('@beatgig/synth-ui').RatingProps} props
   */
  (
    {
      className = '',
      rating = 0,
      scale = 1,
      synth,
      total = 0,
      withRating = false,
      withTotal = false,
      ...props
    },
    ref,
  ) => (
    <Flex
      {...props}
      alignItems="center"
      className={className}
      ref={ref}
      synth={synth}
    >
      {toSequence(rating).map((type) => {
        switch (type) {
          case RATING_STAR_EMPTY: {
            return (
              <Fragment>
                <StarEmptyIcon
                  fill={synth.getValue('color:@BeatGig.1')}
                  scale={scale}
                />
                <Spacer inline right />
              </Fragment>
            )
          }

          case RATING_STAR_HALF: {
            return (
              <Fragment>
                <StarHalfIcon
                  fill={synth.getValue('color:@BeatGig.1')}
                  scale={scale}
                />
                <Spacer inline right />
              </Fragment>
            )
          }

          case RATING_STAR_FULL: {
            return (
              <Fragment>
                <StarFullIcon
                  fill={synth.getValue('color:@BeatGig.1')}
                  scale={scale}
                />
                <Spacer inline right />
              </Fragment>
            )
          }

          default: {
            return (
              <Fragment>
                <StarEmptyIcon
                  fill={synth.getValue('color:@BeatGig.1')}
                  scale={scale}
                />
                <Spacer inline right />
              </Fragment>
            )
          }
        }
      })}

      {withRating && <Small>{rating}</Small>}
      {withRating && withTotal && <Spacer inline right />}
      {withTotal && <Small>({total})</Small>}
    </Flex>
  ),
)

Rating.propTypes = {
  /**
   * Required to properly extend styled-components.
   * @see {@link https://www.styled-components.com/docs/api#caveat-with-classname}
   */
  className: PropTypes.string,
  /**
   * The rating count.
   */
  rating: PropTypes.number,
  /**
   * A scale index from the `icons` synth token.
   */
  scale: PropTypes.number,
  /**
   * The total amount of reviews.
   */
  total: PropTypes.number,
  /**
   * A boolean flag to determine if the rating will be shown along the star icons.
   */
  withRating: PropTypes.bool,
  /**
   * A boolean flag to determine if the total will be shown along the star icons.
   */
  withTotal: PropTypes.bool,
}

Rating.defaultProps = {
  children: null,
  className: '',
  rating: 0,
  scale: 1,
  total: 0,
  withRating: false,
  withTotal: false,
}

Rating.displayName = 'Rating'

export default withSynth(Rating)
