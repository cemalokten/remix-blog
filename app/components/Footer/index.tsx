import React from 'react'
import { Link } from 'remix'
import * as S from '../../styles'
import * as CONST from '../../constants'

function Footer() {
  return (
    <S.Footer>
      <S.Nav>
        <S.List>
          <a href={CONST.GITHUB_LINK}>
            <S.Button type="button">{CONST.GITHUB}</S.Button>
          </a>
        </S.List>
        <S.List>
          <a href={CONST.EMAIL_LINK}>
            <S.Button type="button">{CONST.EMAIL}</S.Button>
          </a>
        </S.List>
      </S.Nav>
    </S.Footer>
  )
}

export default Footer
