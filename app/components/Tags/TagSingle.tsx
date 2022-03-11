import React from 'react'
import * as S from '../../styles'

type Props = {
  rotation: number
  background: string
  title: string
}

function TagSingle({ title, background, rotation }: Props) {
  return (
    <S.TagSingle bg={background} rotation={rotation}>
      {title}
    </S.TagSingle>
  )
}

export default TagSingle
