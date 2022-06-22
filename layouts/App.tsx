import React, { useState, useEffect } from 'react'
import { getAllRepo, getCurrentRepo } from '@utils/api';
import Search from '@components/Search';
import SearchResult from '@components/SearchResult';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

const App = () => {
  const [loading, setLoading] = useState(true);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    getAllRepositories();
  }, []);

  const getAllRepositories = async () => {
    setLoading(true);
    const res = await getAllRepo();
    if (res?.ok) {
      setSearchList((prev) => prev.concat(res.data));
    }
    setLoading(false);
  }

  return (
    <Wrapper>
      <Search />
      <SearchResult searchList={searchList} loading={loading} />
    </Wrapper>
  )
}

export default App