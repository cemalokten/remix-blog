import React from 'react'
import { Link } from 'remix'
import { useLocation } from 'react-router-dom'
import * as S from '../../styles'
import * as C from '..'
import * as CONST from '../../constants'

type Props = {
  post: boolean
}

function Header() {
  const post = useLocation().pathname.includes('posts/')
  return (
    <S.Header>
      <S.Nav>
        <Link to={CONST.INFO_LINK}>
          <S.Button type="button">
            <S.TagSingle bgHover={CONST.BLUE_A} colorHover="#FFFFFF">
              {CONST.INFO}
            </S.TagSingle>
          </S.Button>
        </Link>
        {post && <C.Close />}
        <Link to={CONST.BLOG_LINK}>
          <S.Button type="button">
            <S.TagSingle bgHover={CONST.ORANGE_A} colorHover="#FFFFFF">
              {CONST.BLOG}
            </S.TagSingle>
          </S.Button>
        </Link>
      </S.Nav>
    </S.Header>
  )
}

export default Header
// TODO: Flashing buttons when on a page
