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
}

export const Header = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 2rem;
  z-index: 200;
  pointer-events: none;
`
export const Footer = styled.footer`
  width: 100vw;
  position: fixed;
  bottom: 0;
  padding: 2rem;
  z-index: 20;
  pointer-events: none;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
`
export const List = styled.ul<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  list-style: none;
  padding-left: 0;
  padding-bottom: ${(props) => props.mb && `${props.mb}vw`};
  padding-top: ${(props) => props.mt && `${props.mt}vw`};
`
export const Section = styled.section<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  background-color: ${(props) => (props.post ? '#F8F8F8' : 'none')};
  min-height: ${(props) => (props.post ? '0' : '100vh')};
  border-radius: 2vw;
  margin: ${(props) => (props.post ? '7.5rem 0rem 7.5rem 0rem' : '0')};
  z-index: ${(props) => (props.post ? '100' : '0')};
`
export const Article = styled.article<Props>`
  max-width: 60vw;

  @media ${CONST.breakpoints.laptop} {
    max-width: 70vw;
  }

  @media ${CONST.breakpoints.tablet} {
    max-width: 70vw;
  }

  @media ${CONST.breakpoints.mobile} {
    max-width: 70vw;
  }
  padding-top: 4vw;
  padding-bottom: 10vw;
`

const paragraphBaseStyle = css`
  margin-top: 2vw;
  margin-bottom: 2vw;
  font-size: ${CONST.fontSize.p.desktop};

  @media ${CONST.breakpoints.laptop} {
    font-size: ${CONST.fontSize.p.laptop};
  }

  @media ${CONST.breakpoints.tablet} {
    font-size: ${CONST.fontSize.p.tablet};
    margin-top: 5vw;
    margin-bottom: 5vw;
  }

  @media ${CONST.breakpoints.mobile} {
    font-size: ${CONST.fontSize.p.mobile};
    margin-top: 6vw;
    margin-bottom: 6vw;
  }
`

export const Paragraph = styled.p`
  ${paragraphBaseStyle}
`

export const H1 = styled.h1<Props>`
  font-size: ${CONST.fontSize.h1.desktop};

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
  padding-bottom: 2.6vw;
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
  @media (max-width: 768px) {
    font-size: ${CONST.MOBILE_TAG};
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
