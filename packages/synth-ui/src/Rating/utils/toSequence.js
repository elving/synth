import {
  RATING_STAR_EMPTY,
  RATING_STAR_HALF,
  RATING_STAR_FULL,
} from '../constants'

/**
 * Returns an array representation of the given `rating` as a star-based rating.
 * @param {number} rating
 * @returns {string[]}
 */
const toSequence = (rating) => {
  let counter = 1
  const sequence = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = fullStars !== rating
  const filledStars = Math.ceil(rating)

  while (counter <= 5) {
    if (counter <= filledStars) {
      sequence.push(
        hasHalfStar && counter - 1 === fullStars
          ? RATING_STAR_HALF
          : RATING_STAR_FULL,
      )
    } else {
      sequence.push(RATING_STAR_EMPTY)
    }

    counter += 1
  }

  return sequence
}

export default toSequence
