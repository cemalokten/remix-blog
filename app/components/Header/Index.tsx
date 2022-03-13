import React from 'react'
import { Link } from 'remix'
import * as S from '../../styles'
import * as C from '..'
import * as CONST from '../../constants'
import { useLocation } from 'react-router-dom'

type Props = {
  post: boolean
}

function Header() {
  const post = useLocation().pathname.includes('posts/')
  return (
    <S.Header>
      <S.Nav>
        <Link to={CONST.INFO_LINK}>
          <S.Button type="button" bg={CONST.BLUE_A}>
            <S.Container>
              <S.Span>{CONST.INFO}</S.Span>
            </S.Container>
          </S.Button>
        </Link>
        {post && <C.Close />}
        <Link to={CONST.BLOG_LINK}>
          <S.Button type="button" bg={CONST.PURPLE_A}>
            {CONST.BLOG}
          </S.Button>
        </Link>
      </S.Nav>
    </S.Header>
  )
}

export default Header
// TODO: Flashing buttons when on a page
