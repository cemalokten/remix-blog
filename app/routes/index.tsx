import React from 'react'
import { Link } from 'remix'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  padding: 2rem;
`
export const Footer = styled.footer`
  position: fixed;
  width: 100vw;
  padding: 2rem;
  bottom: 0;
`
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const List = styled.li`
  list-style: none;
`

export const Section = styled.section`
  width: 100vw;
  padding: 2rem;
`

export const Article = styled.article`
  width: 100%;
`

export const Paragraph = styled.p`
  font-size: 1.3rem;
`

export default function Index() {
  return (
    <React.Fragment>
      <Header>
        <Nav>
          <List>INFO</List>
          <List>BLOG</List>
        </Nav>
      </Header>
      <Section>
        <Article>
          <Paragraph>
            I am a London based Web Developer. Mostly working across (but not
            limited to) the food, drink, hospitality and lifestyle sectors, with
            experience in graphic and editorial design for screen and print.
          </Paragraph>
          <ul>
            <li>SQL</li>
            <li>REACT</li>
            <li>NODE.JS</li>
            <li>REMIX</li>
            <li>NEXT.JS</li>
            <li>REACT NATIVE</li>
            <li>TYPESCRIPT</li>
          </ul>
          <Paragraph>
            Specialising in: Brand identity Promotional material Social media /
            marketing assets Printed matter Signage Packaging
          </Paragraph>
        </Article>
      </Section>
      <Footer>
        <Nav>
          <List>GITHUB</List>
          <List>EMAIL</List>
        </Nav>
      </Footer>
    </React.Fragment>
  )
}
