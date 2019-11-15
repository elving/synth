export const getGridItemGutter = ({ synth }) => synth.getUnit('@spacing.2')

export const setGridItemWidth = ({ columns, synth }) => {
  const gutter = synth.getUnit('@spacing.2')
  return `width: calc(100% / ${columns} - (${gutter} - ${gutter} / ${columns}));`
}
