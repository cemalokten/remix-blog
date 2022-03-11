import React from 'react'
import * as S from '../../styles'

type Props = {
  rotation: number
  background: string
  title: string
  color?: string
  mt?: number
  mb?: number
  ml?: number
  mr?: number
}

function TagSingle({
  title,
  background,
  color,
  rotation,
  mt,
  mb,
  ml,
  mr,
}: Props) {
  return (
    <li>
      <S.TagSingle
        bg={background}
        rotation={rotation}
        mt={mt}
        mb={mb}
        ml={ml}
        mr={mr}
        color={color}
      >
        {title}
      </S.TagSingle>
    </li>
  )
}

export default TagSingle
