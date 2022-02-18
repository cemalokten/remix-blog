import React from 'react'
import { Link } from 'remix'
import styled from 'styled-components'

export const Header = styled.header`
  width: 100vw;
  position: fixed;
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
  padding: 10vw 2rem 2rem 2rem;
`
export const Article = styled.article`
  width: 100%;
`
export const Paragraph = styled.p`
  font-size: 1.4rem;
`

export default function Index() {
  return (
    <React.Fragment>
      <Header>
        <Nav>
          <List>
            <button>INFO</button>
          </List>
          <List>
            <Link to={'./posts'}>
              <button>BLOG</button>
            </Link>
          </List>
        </Nav>
      </Header>
      <Section>
        <Article>
          <Paragraph>
            Hi my name is Cemal (Je-mal), I am a web developer in the making.
            Once upon a time I worked in the design industry, designing
            furniture and products.
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
            Lately, I've been learning how to solve problems with lines of code
            instead of pieces of wood.
          </Paragraph>
        </Article>
      </Section>
      <Footer>
        <Nav>
          <List>
            <button>GITHUB</button>
          </List>
          <List>
            <button>EMAIL</button>
          </List>
        </Nav>
      </Footer>
    </React.Fragment>
  )
}
