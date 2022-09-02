import React from 'react';
import styled from 'styled-components';
import Switch from '../components/switch/switch';
import containerVector from '../assets/bg.png';

const PricingPageContainer = styled.div`
  position: relative;
`;

const PricingPageBody = styled.div`
  background: linear-gradient(103.83deg, #1854CE -49.97%, #00C0FA 141.31%);
  width: 100%;
  height: 665px;
  position: absolute;
  top: 0;
`;

const ImageVector = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const PricingContent = styled.div`
  width: 893px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 67px;
  transform: translate(-50%, 0%);
  left: 50%;
  background: #FFFFFF;
  box-shadow: 2px 2px 35px rgba(25, 25, 31, 0.1);
  border-radius: 40px;
  padding: 45px 0 45px 0;
`;

const PricingHeader = styled.div`
  display: flex;
  justify-content: center;
`;

const SwitchLabel = styled.span`
  color: #0D88E3;
  font-size: 18px;
  line-height: 25px;
  margin-right: 16px;
`;

const SwitchContent = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #797A88;
  margin-left: 18px;
`;

export default function PricingPage() {
  return (
    <PricingPageContainer>
      <PricingPageBody>
        <ImageVector src={containerVector} />
        <PricingContent>
          <PricingHeader>
            <SwitchLabel>Monthly Pricing</SwitchLabel>
            <Switch />
            <SwitchContent>Anuual Pricing - save 30%!</SwitchContent>
          </PricingHeader>
        </PricingContent>
      </PricingPageBody>
    </PricingPageContainer>
  )
}
