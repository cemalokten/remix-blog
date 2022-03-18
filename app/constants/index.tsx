// MENU OPTIONS
export const BLOG = 'BLOG'
export const INFO = 'INFO'
export const GITHUB = 'GITHUB'
export const EMAIL = 'EMAIL'

// MENU LINKS
export const BLOG_LINK = `../../posts`
export const INFO_LINK = `../`
export const GITHUB_LINK = `http://www.github.com/cemalokten`
export const EMAIL_LINK = 'mailto:hello@cemal.io'

// COLORS
export const WHITE = '#ffffff'
export const RED_A = '#ff0000'
export const RED_B = '#d50000'
export const RED_C = '#9a0000'
export const RED_D = '#540000'
export const GREEN_A = '#1aff00'
export const GREEN_B = '#40be00'
export const GREEN_C = '#2a670b'
export const GREEN_D = '#003a02'
export const BLUE_A = '#0019FF'
export const BLUE_B = '#0025d5'
export const BLUE_C = '#001ea6'
export const BLUE_D = '#001b7c'
export const BLUE_E = '#4bc9ff'
export const ORANGE_A = '#ff5b00'
export const ORANGE_B = '#d35000'
export const ORANGE_C = '#c42400'
export const ORANGE_D = '#fca400'
export const YELLOW_A = '#ffc400'
export const YELLOW_B = '#ffdd00'
export const YELLOW_C = '#ffea00'
export const YELLOW_D = '#FAFF00'
export const PURPLE_A = '#9AA9FF'
export const PURPLE_B = '#5300e8'
export const PINK_A = '#ff9b9b'
export const PINK_B = '#ffc8c8'
export const PINK_C = '#3d0023'

export const SIZE = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1120px',
  desktop: '2560px',
  mobileCalc: 2.5,
  tabletCalc: 2,
  laptopCalc: 1.5,
  desktopCalc: 1,
  baseP: 2,
  baseTag: 1.8,
  baseH1: 3,
}

// export const breakpoints = {
//   mobile: `(min-width: ${SIZE.mobile})`,
//   tablet: `(min-width: ${SIZE.tablet})`,
//   laptop: `(min-width: ${SIZE.laptop})`,
//   desktop: `(min-width: ${SIZE.desktop})`,
// }

export const breakpoints = {
  mobile: `(max-width: ${SIZE.mobile})`,
  tablet: `(max-width: ${SIZE.tablet})`,
  laptop: `(max-width: ${SIZE.laptop})`,
  desktop: `(max-width: ${SIZE.desktop})`,
}

// FONT
export const fontSize = {
  p: {
    mobile: `${SIZE.baseP * SIZE.mobileCalc}vw`,
    tablet: `${SIZE.baseP * SIZE.tabletCalc}vw`,
    laptop: `${SIZE.baseP * SIZE.laptopCalc}vw`,
    desktop: `${SIZE.baseP}vw`,
  },
  tag: {
    mobile: `${SIZE.baseTag * SIZE.mobileCalc}vw`,
    tablet: `${SIZE.baseTag * SIZE.tabletCalc}vw`,
    laptop: `${SIZE.baseTag * SIZE.laptopCalc}vw`,
    desktop: `${SIZE.baseTag}vw`,
  },
  h1: {
    mobile: `${SIZE.baseH1 * SIZE.mobileCalc}vw`,
    tablet: `${SIZE.baseH1 * SIZE.tabletCalc}vw`,
    laptop: `${SIZE.baseH1 * SIZE.laptopCalc}vw`,
    desktop: `${SIZE.baseH1}vw`,
  },
}
