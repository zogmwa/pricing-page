import React from 'react';
import styled from 'styled-components';
import Button from '../button/button';

const PricingCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => (props.type === 'default' ? '#FFFFFF' : 'linear-gradient(110.26deg, #1176DC -18.08%, #06A7F0 122.84%)')};
  width: 222px;
  color: ${props => (props.type === 'default' ? '#3C3C3C' : '#FFFFFF')};
  align-items: center;
  padding: 16px 0 26px 0;
`;

const PricingType = styled.span`
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  min-height: 16px;
`;

const PricingPrice = styled.span`
  font-family: 'Proxima Nova';
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
`;

const PricingDescription = styled.span`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  margin-bottom: 10px;
  min-height: 18px;
`

export default function PricingCard({ type, price, description }) {
  return (
    <PricingCardContainer type={type === 'free' ? 'default' : 'pro'}>
      <PricingType>{type !== 'free' ? type : ' '}</PricingType>
      <PricingPrice>{price !== 0 ? `$${price}/m` : 'FREE'}</PricingPrice>
      <PricingDescription>{description ? description : ' '}</PricingDescription>
      <Button 
        type={type === 'free' ? 'default' : 'yellow'} 
        text={type === 'free' ? 'Try It' : 'Buy It'} 
      />
    </PricingCardContainer>
  )
}
