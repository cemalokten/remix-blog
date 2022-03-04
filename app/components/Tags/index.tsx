import React from 'react'
import * as S from '../../styles'

type Props = {
  tags: Array<String>
  background: Array<String>
  date: string
  color: Array<String>
}

function Tags({ tags, background, color, date }: Props) {
  console.log({ color })
  const tagList = tags.map((tag, id) => {
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
