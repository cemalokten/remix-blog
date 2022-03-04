import React from 'react'
import { Link } from 'remix'
import * as S from '../../styles'
import * as C from '..'
import * as CONST from '../../constants'

type Props = {
  post: boolean
}

function Header({ post }: Props) {
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
