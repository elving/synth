/**
 * @param {string} level
 * @returns {number}
 */
const getHeadingLevelScale = (level) => {
  const levelScaleMap = {
    h1: 6,
    h2: 5,
    h3: 4,
    h4: 3,
    h5: 2,
    h6: 1,
  }

  return levelScaleMap[level] || 1
}

export default getHeadingLevelScale
