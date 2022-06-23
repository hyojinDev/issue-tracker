import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  font-size: 1rem;
  margin-bottom: 0.6rem;
`;

const SearchWrap = styled.div`
  position: relative;
`;

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.navy};
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  height: 45px;
  padding: 0 1rem 0 3.5rem;
`;

const SearchIcon = styled.div`
  cursor: pointer;
  height: 45px;
  width: 50px;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent url('../assets/searchIcon.svg') no-repeat 50% / 20px auto;
  & > input {
    font-size: 0;
    text-indent: -9999px;
  }
`;

const Search = (props: any) => {

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => props.setValue(e.target.value)

  return (
    <div>
      <Title>Repository Name 검색</Title>
      <SearchWrap>
        <label htmlFor='search'>
          <Input
            id='search'
            type='text'
            placeholder='Repository Name을 입력해주세요.'
            onChange={inputChangeHandler}
            onKeyPress={(e) => e.key === 'Enter' ? props.searchRepoHandler() : false}
            value={props.value}
            autoComplete='off'
          />
          <SearchIcon onClick={props.searchRepoHandler}>
            <input type='submit' value='검색' />
          </SearchIcon>
        </label>
      </SearchWrap>
    </div>
  )
}

export default Search;