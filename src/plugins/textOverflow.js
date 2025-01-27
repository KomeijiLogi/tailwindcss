export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.truncate': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
        },
      },
      variants('textOverflow')
    )

    addUtilities(
      {
        '.overflow-ellipsis': { 'text-overflow': 'ellipsis' },
        '.overflow-clip': { 'text-overflow': 'clip' },
      },
      variants('textOverflow')
    )
  }
}
