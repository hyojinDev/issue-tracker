import React, { useState } from 'react';
import styled from 'styled-components';
import Loading from './Loading';

const ResultWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 1rem auto 2rem;
  overflow-y: auto;
  padding: 0 2rem;
  box-sizing: border-box;
`;

const ListWrap = styled.ul`
  & > li {
    width: 100%;
    padding: 2rem 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
    cursor: pointer;
    transition: ease-in-out 0.2s all;
    ${({ theme }) => theme.mixins.flexBox('column', 'flex-start', 'center')};
  }
`;

const TitleSection = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'space-between')};
  & > strong {
    color: #58a6ff;
    font-size: 20px;
    font-weight: bold;
    ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')};
    & > span {
      border-radius: 2em;
      color: ${({ theme }) => theme.color.lightGray};
      border: 1px solid ${({ theme }) => theme.color.lightGray};;
      padding: 2px 7px;
      font-size: 12px;
      font-weight: 500;
      margin-left: 10px;
    }
  }
  
`

const AccIcon = styled.i<{ isOpened: boolean }>`
  position: relative;
  width: 30px;
  height: 30px;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')};
  &:before,&:after {
    content:'';
    position: absolute;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.borderColor};
    transition: ease 0.3s all;
  }
  &:before {
    ${({ isOpened }) => isOpened && 'transform: rotate(90deg)'};
    width: 2px;
    height: 20px;
  }
  &:after {
    width: 20px;
    height: 2px;
  }
`;

const DropdownWrap = styled.div`
  &.close {
    opacity: 0;
    height: 0;
    transition: all 0.5s cubic-bezier(.42,.2,.08,1);
    overflow: hidden;
  }
  &.open {
    opacity: 1;
    height: auto;
    padding-top: 25px;
    transition: all 0.5s cubic-bezier(.42,.2,.08,1);
  }

`;

const NoResultMsg = styled.span`
  width: 100%;
  margin-top: 2rem;
  ${({ theme }) => theme.mixins.flexBox('row', 'center', 'center')};
  & > span {
    color: ${({ theme }) => theme.color.borderColor};
  }
`


const SearchResult = (props: any) => {
  const [current, setCurrent] = useState(-1);

  const dropDownHandler = (idx: number) => idx === current ? setCurrent(-1) : setCurrent(idx)

  return (
    <>
      {props.dataList && (
        <ResultWrapper>
          {Boolean(props.dataList.length) ? (
            <ListWrap>
              {props.dataList.map((list: any, idx: number) => (
                <li key={list.id} onClick={() => dropDownHandler(idx)}>
                  <TitleSection>
                    <strong>{list.name}<span>{list.visibility}</span></strong>
                    <AccIcon isOpened={idx === current ? true : false}></AccIcon>
                  </TitleSection>
                  <DropdownWrap className={idx === current ? 'open' : 'close'}>
                    <strong>sub menu</strong>
                  </DropdownWrap>
                </li>
              ))}
            </ListWrap>
          ) : (
            <NoResultMsg>
              <span>검색 결과가 없습니다.</span>
            </NoResultMsg>
          )}
        </ResultWrapper>
      )}
    </>
  )
}

export default SearchResult