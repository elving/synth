/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {number} groupAfter
 * @returns {{ value: string, label: string }[]}
 */
const getUngroupedSelectedTags = (selectedTags, groupAfter) =>
  selectedTags.slice(0, groupAfter)

export default getUngroupedSelectedTags
