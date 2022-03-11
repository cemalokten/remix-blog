import React from 'react'
import * as S from '../../styles'

type Props = {
  tags: Array<string>
  background: Array<string>
  date: string
  color: Array<string>
}

function Tags({ tags, background, color, date }: Props) {
  const tagList = tags.map((tag: string, id: number) => {
    if (id === 0)
      return (
        <S.Tag start bg={background[id]} color={color[id]}>
          {tag.toLocaleUpperCase()}
        </S.Tag>
      )
    return (
      <S.Tag bg={background[id]} color={color[id]}>
        {tag}
      </S.Tag>
    )
  })

  return (
    <S.Flex mb={1.5}>
      {tagList}
      <S.Tag end bg={background[tagList.length]} color={color[tagList.length]}>
        {date}
      </S.Tag>
    </S.Flex>
  )
}

export default Tags
