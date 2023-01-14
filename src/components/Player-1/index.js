import React from 'react';
import music from '../../assets/PostMalone.jpg'
import back from '../../assets/back.png'
import play from '../../assets/play.png'
import next from '../../assets/next.png'
import line from '../../assets/line.png'
import linemusic from '../../assets/contagem.png'
import linemusictwo from '../../assets/contagem-1.png'

import * as S from './styles'

const Player1 = () => {

  return (
    <S.Container>
      <S.Content>
      
        <S.ImageMusic src={music}/>

        <S.AlignText> 
          <S.NameMusic>Congratulations</S.NameMusic>
          <S.Band>Post Malone</S.Band>
        </S.AlignText> 

        <S.AlignIcon>
          <S.BackIcon src={back}/>
          <S.PlayIcon src={play}/>
          <S.NextIcon src={next}/>
        </S.AlignIcon>

        <S.Line src={line}/>

        <S.AlignNumber>
          <S.NumberMusic src={linemusictwo}/>
          <S.NumberMusic src={linemusic}/>
        </S.AlignNumber>

      </S.Content>
    </S.Container>
  )
}

export default Player1