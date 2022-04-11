import styled, { keyframes, createGlobalStyle, css } from 'styled-components'
import * as CONST from '../constants'

interface Props {
  readonly center?: boolean
  readonly mt?: number
  readonly mb?: number
  readonly ml?: number
  readonly mr?: number
  readonly post?: boolean
  readonly bg?: string
  readonly bgHover?: string
  readonly start?: boolean
  readonly end?: boolean
  readonly color?: string
  readonly colorHover?: string
  readonly rotation?: number
  readonly rotationHover?: number
  readonly margin?: boolean
  readonly column?: boolean
  readonly border?: boolean
}

export const Header = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 1vw;
  z-index: 5;
  pointer-events: none;
  border-bottom: solid thin black;

  &media ${CONST.breakpoints.laptop} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.laptopCalc, 'vw')};
  }
  &media ${CONST.breakpoints.tablet} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.tabletCalc, 'vw')};
  }
  &media ${CONST.breakpoints.mobile} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.mobileCalc, 'vw')};
  }
`
export const Footer = styled.footer`
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding: 1vw;
  pointer-events: none;
  border-top: solid thin black;
  &media ${CONST.breakpoints.laptop} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.laptopCalc, 'vw')};
  }
  &media ${CONST.breakpoints.tablet} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.tabletCalc, 'vw')};
  }
  &media ${CONST.breakpoints.mobile} {
    padding: ${CONST.fontSize.calc(3, CONST.SIZE.mobileCalc, 'vw')};
  }
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
`
export const List = styled.ul<Props>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  list-style: none;
  padding-left: 0;
  border-bottom: solid thin black;
  padding-bottom: ${(props) => props.mb && `${props.mb}vw`};
  padding-top: ${(props) => props.mt && `${props.mt}vw`};
  padding-top: 2vw;
  padding-bottom: 2vw;
`
export const Article = styled.article<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  background-color: ${(props) => (props.post ? '#F8F8F8' : 'none')};
  min-height: ${(props) => (props.post ? '0' : '100vh')};
  border-radius: 2vw;

  margin-top: ${({ post, margin }) =>
    post || margin ? `${CONST.SIZE.baseSectionMargin}vw` : '0'};

  margin-bottom: ${({ post, margin }) =>
    post || margin ? `${CONST.SIZE.baseSectionMargin}vw` : '0'};

  z-index: ${(props) => (props.post ? '100' : '0')};

  @media ${CONST.breakpoints.laptop} {
    margin-top: ${({ post }) => (post ? '10.1vw' : 0)};
    margin-bottom: ${({ post }) => (post ? '10.1vw' : 0)};
  }
  @media ${CONST.breakpoints.tablet} {
    margin-top: ${({ post }) => (post ? '11.4vw' : 0)};
    margin-bottom: ${({ post }) => (post ? '11.4vw' : 0)};
  }

  @media ${CONST.breakpoints.mobile} {
    margin-top: ${({ post }) => (post ? '14.1vw' : 0)};
    margin-bottom: ${({ post }) => (post ? '14.1vw' : 0)};
  }
`
export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  border-bottom: ${({ border }) => (border ? 'solid thin black' : 'none')};
  padding-top: ${({ post }) => (post ? '3vw' : 0)};
  padding-bottom: ${({ post }) => (post ? '6vw' : 0)};

  // @media ${CONST.breakpoints.laptop} {
  //   max-width: 70vw;
  // }
  //
  // @media ${CONST.breakpoints.tablet} {
  //   max-width: 70vw;
  // }
  //
  // @media ${CONST.breakpoints.mobile} {
  //   max-width: 70vw;
  // }
`

const paragraphBaseStyle = css`
  max-width: 60vw;
  margin-top: 2vw;
  margin-bottom: 2vw;
  font-size: ${CONST.fontSize.p.desktop};

  @media ${CONST.breakpoints.laptop} {
    font-size: ${CONST.fontSize.p.laptop};
    max-width: 70vw;
  

  @media ${CONST.breakpoints.tablet} {
    font-size: ${CONST.fontSize.p.tablet};
    margin-top: 5vw;
    margin-bottom: 5vw;
    max-width: 70vw;
  }

  @media ${CONST.breakpoints.mobile} {
    font-size: ${CONST.fontSize.p.mobile};
    margin-top: 6vw;
    margin-bottom: 6vw;
    max-width: 70vw;
  }
`

export const Paragraph = styled.p`
  ${paragraphBaseStyle}
`

export const H1 = styled.h1<Props>`
  font-size: ${CONST.fontSize.h1.desktop};
  text-transform: uppercase;
  @media ${CONST.breakpoints.laptop} {
    font-size: ${CONST.fontSize.h1.laptop};
  }

  @media ${CONST.breakpoints.tablet} {
    font-size: ${CONST.fontSize.h1.tablet};
  }

  @media ${CONST.breakpoints.mobile} {
    font-size: ${CONST.fontSize.h1.mobile};
  }
  font-weight: normal;
  text-align: center;
  font-family: 'LuculentRegular';
  margin-top: ${(props) => props.mt && `${props.mt}rem`};
  margin-bottom: ${(props) => props.mb && `${props.mb}rem`};
  z-index: 999;
  &:hover {
    color: ${({ color }) => color && color};
  }
`

export const InfoBox = styled.div`
  margin-top: 2vw;
  margin-bottom: 2vw;
  padding: 4vw;
  &:before {
    content: '⭢ ';
  }
`

export const Close = styled.span`
  font-family: 'LuculentRegular';
  background-color: white;
  height: 4vw;
  width: 4rem;
  border-radius: 50%;
  border: solid thin;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
`

export const Tag = styled.span<Props>`
  padding-top: 0.4rem;
  color: ${(props) => (props.color ? props.color : '#000000')};
  background-color: ${(props) => (props.bg ? props.bg : 'red')};
  padding-left: ${(props) => (props.start ? '1.2vw' : '0.8vw')};
  padding-right: ${(props) => (props.end ? '1.2vw' : '0.8vw')};
  border-top-left-radius: ${(props) => (props.start ? '2vw' : '0')};
  border-bottom-left-radius: ${(props) => (props.start ? '2vw' : '0')};
  border-top-right-radius: ${(props) => (props.end ? '2vw' : '0')};
  border-bottom-right-radius: ${(props) => (props.end ? '2vw' : '0')};
  font-family: 'LuculentRegular';
`
export const TagSingle = styled.span<Props>`
  font-size: ${CONST.fontSize.tag.desktop};

  @media ${CONST.breakpoints.laptop} {
    font-size: ${CONST.fontSize.tag.laptop};
    padding-left: ${0.8 * CONST.SIZE.laptopCalc}vw;
    padding-right: ${0.8 * CONST.SIZE.laptopCalc}vw;
    padding-bottom: ${2.6 * CONST.SIZE.laptopCalc}vw;
    border-radius: ${2 * CONST.SIZE.laptopCalc}vw;
  }

  @media ${CONST.breakpoints.tablet} {
    font-size: ${CONST.fontSize.tag.tablet};
    padding-left: ${0.8 * CONST.SIZE.tabletCalc}vw;
    padding-right: ${0.8 * CONST.SIZE.tabletCalc}vw;
    padding-bottom: ${2.6 * CONST.SIZE.tabletCalc}vw;
    border-radius: ${2 * CONST.SIZE.tabletCalc}vw;
  }

  @media ${CONST.breakpoints.mobile} {
    font-size: ${CONST.fontSize.tag.mobile};
    padding-left: ${0.8 * CONST.SIZE.mobileCalc}vw;
    padding-right: ${0.8 * CONST.SIZE.mobileCalc}vw;
    padding-bottom: ${2.6 * CONST.SIZE.mobileCalc}vw;
    border-radius: ${2 * CONST.SIZE.mobileCalc}vw;
    margin-top: ${0.2 * CONST.SIZE.mobileCalc}vw;
    margin-bottom: ${0.2 * CONST.SIZE.mobileCalc}vw;
    margin-right: ${0.8 * CONST.SIZE.mobileCalc}vw;
  }

  color: ${({ color }) => color || '#000000'};
  background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  padding-bottom: 2vw;
  margin-right: ${(props) => (props.mr ? `${props.mr}vw` : '1.2vw')};
  border-radius: 2vw;
  font-family: 'LuculentRegular';
  display: inline-block;
  transform: ${({ rotation }) =>
    rotation ? `rotate(${rotation}deg)` : `rotate(0deg)`};
  height: 2vw;
  transition: 150ms ease-in-out background-color;
  &:hover {
    color: ${({ colorHover, color }) => colorHover || color};
    background-color: ${(props) => (props.bgHover ? props.bgHover : props.bg)};
  }
`

export const Button = styled.button<Props>`
  font-family: 'LuculentRegular';
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: solid 0px;
  margin: 0;
  background-color: transparent;
  text-decoration: none;
  font-size: 1.5vw;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  pointer-events: auto;
`

export const Marquee1 = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`

export const Span = styled.span`
  animation: ${Marquee1} 1.5s linear infinite;
  padding-top: 0.4vw;
  white-space: nowrap;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  position: relative;
  display: block;
`

export const Container = styled.div`
  position: absolute;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
`

export const Flex = styled.div<Props>`
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};
  display: flex;
  justify-content: center;
`

export const StyledLink = styled.link<Props>``

export const GlobalStyle = createGlobalStyle`
  p { ${paragraphBaseStyle}}
`
