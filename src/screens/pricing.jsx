import React from 'react';
import styled from 'styled-components';
import Switch from '../components/switch/switch';
import PricingCard from '../components/pricing-card/pricing-card';
import PricingTable from '../components/table/table';
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
  transform: translate(-50%, 0%);
  top: 0;
  left: 50%;
  width: 1440px;
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
  padding: 45px 68px 45px 50px;
`;

const PricingHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 36px;
  border-bottom: 1.5px solid #E2EAF0;
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

const PricingCardSection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
`;

export default function PricingPage() {
  const tableData = [
    {title: 'Unlimited Free Tracking', important: false, typeA: 'FOREVER', typeB: 'FOREVER'},
    {title: 'Signature Ad', important: false, typeA: 'NEVER', typeB: 'NEVER'},
    {title: 'Mobile Apps (iOS, Android)', important: false, typeA: 'CHECKED', typeB: 'CHECKED'},
    {title: 'Email / Desktop Alerts', important: false, typeA: 'CHECKED', typeB: 'CHECKED'},
    {title: 'Ping Sequences', important: false, typeA: 'CHECKED', typeB: 'CHECKED'},
    {title: 'Signature Generator', important: false, typeA: 'CHECKED', typeB: 'CHECKED'},
    {title: 'Email Support', important: false, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'Group emails Tracked', important: false, typeA: 'BASIC', typeB: 'ADVANCED'},
    {title: 'Mail Analytics', important: false, typeA: 'BASIC', typeB: 'ADVANCED'},
    {title: 'Email Engagement Score', important: false, typeA: 'BASIC', typeB: 'ADVANCED'},
    {title: 'Subdomain configuration', important: false, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'Recipient Timeline', important: true, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'Ping Sequence Analyzer', important: true, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'AI Recommendations', important: true, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'Link Tracking', important: false, typeA: 'UNCHECKED', typeB: 'CHECKED'},
    {title: 'Attachment Tracking', important: false, typeA: 'UNCHECKED', typeB: 'CHECKED'}
  ]

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
          <PricingCardSection>
            <PricingCard 
              type='free' 
              price={0} 
              description='' 
            />
            <PricingCard 
              type='PRO'
              price={9.99}
              description='per user, billed yearly'
            />
          </PricingCardSection>
          <PricingTable tableData={tableData} />
        </PricingContent>
      </PricingPageBody>
    </PricingPageContainer>
  )
}
