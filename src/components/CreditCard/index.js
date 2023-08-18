// Write your code here

import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  CardDetailsContainer,
  PaymentCardContainer,
  PaymentCardHeading,
  CreditCardHeading,
  HorizontalLine,
  CardNumber,
  PaymentCardDetails,
  CustomInput,
  CardHolderNameText,
  CardHolderName,
} from './styledComponents'

const CreditCard = () => {
  const [name, setName] = useState('')
  const [cardNumber, setCardNumber] = useState('')

  const onChangeCardNumber = event => setCardNumber(event.target.value)
  const onChangeName = event => setName(event.target.value)

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>Credit Card</CreditCardHeading>
        <HorizontalLine />
        <CardDetailsContainer data-testid="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardHolderNameText>CARDHOLDER NAME</CardHolderNameText>
          <CardHolderName>{name.toUpperCase()}</CardHolderName>
        </CardDetailsContainer>
      </CreditCardContainer>
      <PaymentCardContainer>
        <PaymentCardDetails>
          <PaymentCardHeading>Payment Method</PaymentCardHeading>
          <CustomInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <CustomInput
            type="text"
            placeholder="Cardholder Name"
            value={name}
            onChange={onChangeName}
          />
        </PaymentCardDetails>
      </PaymentCardContainer>
    </MainContainer>
  )
}

export default CreditCard
