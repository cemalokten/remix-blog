import styled from 'styled-components'

interface Props {
  readonly center?: boolean
  readonly mt?: number
  readonly mb?: number
  readonly post?: boolean
  readonly bg?: string
  readonly start?: boolean
  readonly end?: boolean
  readonly color?: string
}

export const Header = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  padding: 2rem;
  z-index: 200;
`
export const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  padding: 2rem;
  bottom: 0;
  z-index: 20;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const List = styled.li<Props>`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  padding-bottom: ${(props) => props.mb && `${props.mb}vw`};
`
export const Section = styled.section<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  background-color: ${(props) => (props.post ? '#F8F8F8' : 'none')};
  margin: ${(props) => (props.post ? '7.5rem 0rem 7.5rem 0rem' : '0')};
  justify-content: center;
  min-height: ${(props) => (props.post ? '0' : '100vh')};
  border-radius: 1rem;
  position: relative;
  z-index: ${(props) => (props.post ? '100' : '0')};
`
export const Article = styled.article<Props>`
  max-width: 75vw;
  padding-top: 4vw;
  padding-bottom: 10vw;
  margin-top: ${(props) => props.mt && `${props.mt}rem`};
`
export const Paragraph = styled.p`
  font-size: 1.4rem;
`
export const H1 = styled.h1<Props>`
  font-size: 4vw;
  font-weight: normal;
  text-align: center;
  font-family: 'LuculentRegular';
  margin-top: ${(props) => props.mt && `${props.mt}rem`};
  margin-bottom: ${(props) => props.mb && `${props.mb}rem`};
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
`

export const Tag = styled.span<Props>`
  font-size: 2vw;
  padding-top: 0.4rem;
  color: ${(props) => (props.color ? props.color : '#000000')};
  background-color: ${(props) => (props.bg ? props.bg : 'red')};
  padding-left: ${(props) => (props.start ? '1.2vw' : '0.8vw')};
  padding-right: ${(props) => (props.end ? '1.2vw' : '0.8vw')};
  border-top-left-radius: ${(props) => (props.start ? '2rem' : '0')};
  border-bottom-left-radius: ${(props) => (props.start ? '2rem' : '0')};
  border-top-right-radius: ${(props) => (props.end ? '2vw' : '0')};
  border-bottom-right-radius: ${(props) => (props.end ? '2vw' : '0')};
  font-family: 'LuculentRegular';
`
export const Button = styled.button`
  display: inline-block;
  border: solid 0px;
  border-radius: 2vw;
  margin: 0;
  padding-top: 0.4vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  text-decoration: none;
  background: #ffffff;
  color: #000000;

  font-family: 'LuculentRegular';
  font-size: 2vw;
  cursor: pointer;
  text-align: center;
  transition: background 100ms ease-in-out, transform 100ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background: #1807ff;
    color: #ffffff;
  }

  button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  button:active {
    transform: scale(0.99);
  }
`

export const Flex = styled.div<Props>`
  margin-top: ${(props) => (props.mt ? `${props.mt}rem` : '0')};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}rem` : '0')};
  display: flex;
  justify-content: center;
`

export const StyledLink = styled.link<Props>``
