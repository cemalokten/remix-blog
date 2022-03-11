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
        <S.List>
          <Link to={CONST.INFO_LINK}>
            <S.Button type="button">{CONST.INFO}</S.Button>
          </Link>
        </S.List>
        {post && (
          <S.List>
            <C.Close />
          </S.List>
        )}
        <S.List>
          <Link to={CONST.BLOG_LINK}>
            <S.Button type="button">{CONST.BLOG}</S.Button>
          </Link>
        </S.List>
      </S.Nav>
    </S.Header>
  )
}

export default Header
