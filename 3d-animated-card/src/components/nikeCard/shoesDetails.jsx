import React from 'react';
import styled from 'styled-components';
import {Marginer} from './marginer/index';
import NikeImg from '../../images/nike-logo.png'



const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 11px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
`;

/* const Price = styled.span`
  font-size: 18px;
  color: white;
  font-weight: 800;
  text-transform: uppercase;
`; */

const SpacedHorizContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyBotton = styled.button`
  padding: 10px 16px;
  background-color: #fbbe01;
  color: black;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 10px;

  &:hover{
    background-color: transparent;
    color: white;
    border: 3px solid #fbbe01;
  }

`;

const NIkeLogo = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    width: auto;
    height: 13px;
  }


`;

export default function shoesDetails(props) {
  return (
    <DetailsContainer>
      <SmallText>NIKE</SmallText>
      <SpacedHorizContainer>
        <MediumText>AIR JORDAN 1 MID SE GC</MediumText>
        <MediumText>$185</MediumText>
      </SpacedHorizContainer>
      <Marginer direction="vertical" margin="1.2em"/>
      <SpacedHorizContainer>
        <MediumText>They will be yours</MediumText>
        <BuyBotton>Buy</BuyBotton>
      </SpacedHorizContainer>
      <NIkeLogo>
        <img src={NikeImg} alt="nike-logo" />
      </NIkeLogo>
      
    </DetailsContainer>
  )
}

