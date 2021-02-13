import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { notification } from 'antd';
import Axios from 'axios';

import Search from '../../Components/Search';
import CardContainer from '../../Components/CardContainer';
import createSearchUrl from '../../utils/createSearchUrl';
import kindergartenSearchSchema from '../../utils/validation/kindergartenSearchSchema';

import './style.css';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();
  const query = useQuery();

  const queryObj = {
    q: query.get('q'),
    minPrice: query.get('minPrice'),
    maxPrice: query.get('maxPrice'),
    locationId: query.get('locationId'),
  };
  useEffect(() => {
    let unmounted = false;
    const source = Axios.CancelToken.source();

    kindergartenSearchSchema
      .validate(queryObj)
      .then(({ q, minPrice, maxPrice, locationId }) =>
        Axios.get(
          `/api/v1${createSearchUrl(q, minPrice, maxPrice, locationId)}`
        )
      )
      .then(({ data: { data } }) => {
        if (!unmounted) {
          setSearchResults(data);
        }
      })
      .catch((error) => {
        if (!unmounted) {
          const { name: errorName, response } = error;
          if (
            errorName === 'ValidationError' ||
            response.data.error === 'Validation Error'
          ) {
            history.push('/');
          } else {
            notification.open({
              message: 'حدث خطأ في السيرفر, يرجى المحاولة لاحقا',
            });
          }
        }
      });

    return () => {
      unmounted = true;
      source.cancel('Cancelling in cleanup');
    };
  }, [query]);

  return (
    <div>
      <div className="search-top">
        <Search
          isRed
          dorpListOptions={[{ id: 2, value: 'asda', disabled: false }]}
        />
      </div>
      <div className="search-results">
        <CardContainer
          data={[...searchResults]}
          searchText={queryObj.q || 'رياض الأطفال'}
        />
      </div>
    </div>
  );
};

export default SearchPage;
