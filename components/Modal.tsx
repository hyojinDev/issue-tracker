import React, { useEffect } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  data: any;
  isOpened: boolean;
  modalOpenHandler: () => void
};

const Wrapper = styled.div<{ isOpened: boolean }>`
  background: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  top: ${({ isOpened }) => isOpened ? '50px' : '100%'};
  position: fixed;
  left: 0;
  text-align: left;
  z-index: 999;
`

const Header = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  padding: 1rem;
  border-bottom: 1px solid #bbb;
`

const CloseButton = styled.button`
  background: url('../assets/exitDown.svg') no-repeat center / 100%;
  width: 34px;
  height: 34px;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')}
`

const Modal = ({ data, isOpened, modalOpenHandler }: LayoutProps) => {

  return (
    <Wrapper isOpened={isOpened}>
      <Header>
        <h3>{data?.data[0].name}</h3>
        <CloseButton onClick={() => modalOpenHandler()} />
      </Header>

    </Wrapper>
  )
}

export default Modal