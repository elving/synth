/**
 * @param {{ value: string, label: string }[]} selectedTags
 * @param {number} groupAfter
 * @returns {{ value: string, label: string }[]}
 */
const getGroupedSelectedTags = (selectedTags, groupAfter) =>
  selectedTags.slice(groupAfter)

export default getGroupedSelectedTags
