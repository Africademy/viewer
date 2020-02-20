import React from 'react';
import styled from 'styled-components';
import ScreenOptions from './ScreenOptions';
import { SCREEN_SIZES, HEADER_HEIGHT } from '../constants';
import ellipsis from '../style/ellipsis';

const Wrapper = styled.div`
  position: relative;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.app.secondaryBackground};
`;

const TopBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.app.primaryBackground};
  height: 230px;
  padding: 19px 80px;
  display: flex;
  justify-content: space-between;
`;

const TemplateName = styled.div`
  color: ${({ theme }) => theme.page.templateNameColor};
  font-size: 32px;
  ${ellipsis};
`;

const Container = styled.div`
  background: ${({ theme }) => theme.app.contentBackground};
  margin: ${HEADER_HEIGHT}px 80px 40px;
  border-radius: 8px;
  width: ${({ selectedSize }) => SCREEN_SIZES[selectedSize].size};
  height: 100%;
  z-index: 1;
  transition: 200ms;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
    0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
`;

const Page = ({ selectedTemplate, selectedSize, setSelectedSize, children }) => (
  <Wrapper>
    <TopBar>
      <TemplateName>{selectedTemplate?.name || 'No Template Selected'}</TemplateName>
      <ScreenOptions selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
    </TopBar>

    <Container selectedSize={selectedSize}>{children}</Container>
  </Wrapper>
);

export default Page;