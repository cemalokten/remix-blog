import React from 'react'
import * as S from '../../styles'

type Props = {
  tags: string
  background: Array<string>
  date: string
  color: Array<string>
  rotation: Array<number>
}

function Tags({ tags, background, color, date, rotation, mb }: Props) {
  const tagList = tags.map((tag: string, id: number) => (
    <S.TagSingle bg={background[id]} color={color[id]} rotation={rotation[id]}>
      {tag}
    </S.TagSingle>
  ))

  return (
    <S.Flex mb={mb}>
      {tagList}
      <S.TagSingle
        end
        bg={background[tagList.length]}
        color={color[tagList.length]}
        rotation={rotation[tagList.length]}
      >
        {date}
      </S.TagSingle>
    </S.Flex>
  )
}

export default Tags
