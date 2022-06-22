import React from 'react';
import styled from 'styled-components';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Wrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  padding: 80px 1rem 0;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

export default Layout;