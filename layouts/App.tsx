import React, { useState, useEffect } from 'react'
import { getAllRepo } from '@utils/api';
import Search from '@components/Search';
import SearchResult from '@components/SearchResult';
import styled from 'styled-components';
import useSWR from 'swr';
import Modal from '@components/Modal';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const App = () => {
  const [value, setValue] = useState('');
  const { data } = useSWR('/getAllRepo', getAllRepo);
  const [repoList, setRepoList] = useState(data?.data || []);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset"
    };
  }, [isOpened]);

  useEffect(() => {
    if (!Boolean(value) && data) {
      setRepoList(data?.data);
      return;
    } else {
      searchRepoHandler();
    }
  }, [value, data]);

  const searchRepoHandler = () => {
    const filteredRepo = data?.data.filter((item: any) => item.name.indexOf(value) !== -1 ? item : false);
    setRepoList((prev: any) => filteredRepo);
  };

  const modalOpenHandler = () => setIsOpened(!isOpened);

  return (
    <>
      <Wrapper>
        <Search value={value} setValue={setValue} dataList={repoList} searchRepoHandler={searchRepoHandler} />
        <SearchResult dataList={repoList} modalOpenHandler={modalOpenHandler} />
      </Wrapper>
      <Modal data={data} isOpened={isOpened} modalOpenHandler={modalOpenHandler} />
    </>
  )
}

export default App