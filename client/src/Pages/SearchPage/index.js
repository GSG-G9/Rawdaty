import React from 'react';
import { useLocation } from 'react-router-dom';

import Search from '../../Components/Search';
import CardContainer from '../../Components/CardContainer';

import './style.css';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const query = useQuery();

  const queryObj = {
    q: query.get('q'),
    minPrice: query.get('minPrice'),
    maxPrice: query.get('maxPrice'),
    locationId: query.get('locationId'),
  };

  return (
    <div>
      <div className="search-top">
        <Search isRed />
      </div>
      <div className="search-results">
        <CardContainer data={[]} searchText={queryObj.q || 'رياض الأطفال'} />
      </div>
    </div>
  );
};

export default SearchPage;
