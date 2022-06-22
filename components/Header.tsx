import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  background-color: ${({ theme }) => theme.color.navy};
  padding: 0.25rem 1rem;
  & > div {
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    align-items: center;
    ${({ theme }) => theme.mixins.flexBox('row', 'center', 'flex-start')}
    background: url('../assets/githubLogo.svg') no-repeat left center;
    & > a {
      color: ${({ theme }) => theme.color.white};
      font-weight: 500;
      font-size: 1.3rem;
      padding-left: 40px;
    }
  }
`

const Header = () => {
  return (
    <NavBar>
      <div><a href='/'>Issue Tracker</a></div>
    </NavBar>
  )
}

export default Header