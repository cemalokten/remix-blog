import React from 'react'
import * as C from '../components'
import * as S from '../styles'

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
          <S.TagSingle bg={'#88ff00'} rotation="-14" mt={3}>
            SQL
          </S.TagSingle>
          <S.TagSingle>REACT</S.TagSingle>
          <S.TagSingle>NODE.JS</S.TagSingle>
          <S.TagSingle>REMIX</S.TagSingle>
          <S.TagSingle>NEXT.JS</S.TagSingle>
          <S.TagSingle>REACT NATIVE</S.TagSingle>
          <S.TagSingle>TYPESCRIPT</S.TagSingle>
        </ul>
        <S.Paragraph>
          Lately, I&apos;ve been learning how to solve problems with lines of
          code instead of pieces of wood.
        </S.Paragraph>
      </S.Article>
    </S.Section>
  )
}
