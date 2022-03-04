import React from 'react'
import { Link } from 'remix'
import * as CONST from '../../constants'
import * as S from '../../styles'

function Close() {
  return (
    <S.Flex mb={2.2}>
      <Link to={CONST.BLOG_LINK}>
        <S.Button>✕</S.Button>
      </Link>
    </S.Flex>
  )
}
export default Close
