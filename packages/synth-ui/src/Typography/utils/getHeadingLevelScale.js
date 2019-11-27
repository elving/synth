/**
 * @param {string} level
 * @returns {number}
 */
const getHeadingLevelScale = (level) => {
  const levelScaleMap = {
    h1: 5,
    h2: 4,
    h3: 3,
    h4: 2,
    h5: 1,
    h6: 0,
  }

  return levelScaleMap[level] || 0
}

export default getHeadingLevelScale
