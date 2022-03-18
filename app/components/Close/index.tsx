import React from 'react'
import { Link } from 'remix'
import * as CONST from '../../constants'
import * as S from '../../styles'

function Close() {
  return (
    <Link to={CONST.BLOG_LINK}>
      <S.Button>
        <S.TagSingle bgHover={CONST.RED_A}>X</S.TagSingle>
      </S.Button>
    </Link>
  )
}

export default Close
