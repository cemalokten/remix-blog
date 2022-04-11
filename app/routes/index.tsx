import React from 'react'
import * as C from '../components'
import * as S from '../styles'
import * as CONST from '../constants'

export default function Index() {
  return (
    <S.Article mt={10} center>
      <S.Section>
        <S.Paragraph>
          I am a London based Web Developer. Mostly working across the food,
          drink, hospitality and lifestyle sectors, with experience in graphic
          and editorial design for screen and print.
        </S.Paragraph>
      </S.Section>
      <S.Section>
        <S.List mt={4} mb={3} center>
          <C.TagSingle background={CONST.GREEN_A} rotation={-6} title="REACT" />
          <C.TagSingle
            background={CONST.YELLOW_D}
            rotation={6}
            title="REACT NATIVE"
          />
          <C.TagSingle
            background={CONST.BLUE_A}
            color={CONST.WHITE}
            rotation={4}
            title="SQL"
          />
          <C.TagSingle background={CONST.RED_A} rotation={10} title="GIT" />
          <C.TagSingle
            background={CONST.PURPLE_A}
            rotation={-5}
            title="NODEJS"
          />
          <C.TagSingle background={CONST.ORANGE_A} rotation={2} title="REMIX" />
          <C.TagSingle
            background={CONST.ORANGE_C}
            rotation={-4}
            title="NEXTJS"
          />
          <C.TagSingle
            background={CONST.BLUE_D}
            color={CONST.WHITE}
            rotation={-3}
            title="POSTGRES"
          />
          <C.TagSingle
            background={CONST.PINK_B}
            color={CONST.WHITE}
            rotation={2}
            title="CSS"
          />
          <C.TagSingle
            background={CONST.GREEN_D}
            color={CONST.WHITE}
            rotation={-5}
            title="HTML"
          />
          <C.TagSingle
            background={CONST.BLUE_E}
            color={CONST.WHITE}
            rotation={2}
            title="TYPESCRIPT"
          />
          <C.TagSingle
            background={CONST.PINK_C}
            color={CONST.WHITE}
            rotation={-4}
            title="GRAPHQL"
          />
        </S.List>
      </S.Section>
      <S.Section>
        <S.Paragraph>
          We created features to arrange and shift the characters: you can make
          them jump over the baseline or hang from the top. See for yourself on
          the Gravity page, or download the full & free trials.
        </S.Paragraph>
      </S.Section>
    </S.Article>
  )
}
