import React from 'react'
import * as C from '../components'
import * as S from '../styles'
import * as CONST from '../constants'

export default function Index() {
  return (
    <S.Section center>
      <S.Article>
        <S.Paragraph>
          Hi my name is Cemal (Je-mal), I am a web developer in the making. Once
          upon a time I worked in the design industry, designing furniture and
          products.
        </S.Paragraph>
        <ul>
          <C.TagSingle background={CONST.RED_A} rotation={20} title="SQL" />
        </ul>
        <S.Paragraph>
          Lately, I&apos;ve been learning how to solve problems with lines of
          code instead of pieces of wood.
        </S.Paragraph>
      </S.Article>
    </S.Section>
  )
}
