// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (min-width: 776px) {
    flex-direction: row;
  }
`

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3b4b69;
  padding: 10px;
  @media screen and (min-width: 776px) {
    width: 50%;
  }
`

export const CreditCardHeading = styled.h1`
  font-family: Roboto;
  color: #ffffff;
  font-size: 24px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
`

export const HorizontalLine = styled.hr`
  width: 118px;
  background-color: yellow;
  border: 2px solid #ffd773;
  margin: 0;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    border: 5px solid #ffd773;
    border-radius: 5px;
    width: 173px;
  }
`

export const CardDetailsContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 80%;
  padding: 20px;
  border-radius: 20px;
  height: 300px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`

export const CardNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const CardHolderNameText = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: Roboto;
  color: #ffffff;
`

export const CardHolderName = styled.p`
  font-size: 22px;
  font-weight: bold;
  font-family: Roboto;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const PaymentCardContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 776px) {
    width: 50%;
  }
`
export const PaymentCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 4px 16px #d3d9e0;
  border-radius: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 776px) {
    min-width: 330px;
    max-width: 550px;
  }
`

export const PaymentCardHeading = styled.h1`
  color: #3b4b69;
  text-align: center;
  font-size: 20px;
  @media screen and (min-width: 776px) {
    font-size: 30px;
  }
`

export const CustomInput = styled.input`
  padding: 15px 15px 15px 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
  border: 1px solid #3b4b69;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 20px;
`
