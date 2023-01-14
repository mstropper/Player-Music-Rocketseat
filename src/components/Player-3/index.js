import React from 'react';
import music from '../../assets/PostMalone.jpg'
import back from '../../assets/back.png'
import play from '../../assets/play.png'
import next from '../../assets/next.png'

import * as S from './styles'

const Player1 = () => {

  return (
    <S.Container>
      <S.Content>

        <S.AlignImage>
          <S.ImageMusic src={music}/>

            <S.AlignText> 
              <S.NameMusic>Congratuslations</S.NameMusic>
              <S.Band>Post Malone</S.Band>
            </S.AlignText>
        </S.AlignImage> 

        <S.AlignIcon>
          <S.BackIcon src={back}/>s
          <S.PlayIcon src={play}/>
          <S.NextIcon src={next}/>
        </S.AlignIcon>

      </S.Content>
    </S.Container>
  )
}

export default Player1