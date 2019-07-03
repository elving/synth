export const tokens = {
  '@black': '#131313',
  '@blue': '#006FBB',
  '@font':
    '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
  '@green': '#50B83C',
  '@grey': '#3B3B3B',
  '@lightBlack': '#272727',
  '@lighterGrey': '#949494',
  '@lightGrey': '#4B4B4B',
  '@red': '#DE3618',
  '@white': '#F4F4F4',

  color: {
    background: {
      button: '@lightGrey',
      'button:hover': '@grey',
    },

    text: {
      button: '@white',
    },
  },

  size: {
    border: {
      button: '0px',
    },

    radius: {
      button: '4px',
    },
  },

  space: {
    padding: {
      button: '6px 12px',
    },
  },

  style: {
    border: {
      button: 'none',
    },
  },

  typography: {
    font: {
      button: '@font',
    },

    size: {
      button: '14px',
    },
  },
}
