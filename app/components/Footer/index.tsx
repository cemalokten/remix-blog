import React from 'react'
import { Link } from 'remix'
import * as S from '../../styles'
import * as CONST from '../../constants'
import { GREEN_A, PINK_B } from '../../constants'

function Footer() {
  return (
    <S.Footer>
      <S.Nav>
        <a href={CONST.GITHUB_LINK}>
          <S.Button type="button">
            <S.TagSingle bgHover={CONST.PURPLE_B} colorHover="#FFFFFF">
              {CONST.GITHUB}
            </S.TagSingle>
          </S.Button>
        </a>
        <a href={CONST.EMAIL_LINK}>
          <S.Button type="button">
            <S.TagSingle bgHover={CONST.BLUE_C} colorHover="#FFFFFF">
              {CONST.EMAIL}
            </S.TagSingle>
          </S.Button>
        </a>
      </S.Nav>
    </S.Footer>
  )
}

export default Footer
