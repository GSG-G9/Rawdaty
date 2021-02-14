import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { notification } from 'antd';
import axios from 'axios';
import usePrevious from '../../utils/usePrevious';

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

  const prevQueryObj = usePrevious(queryObj);

  useEffect(() => {
    if (
      !prevQueryObj ||
      JSON.stringify(queryObj) !== JSON.stringify(prevQueryObj)
    ) {
      let unmounted = false;
      const source = axios.CancelToken.source();

      kindergartenSearchSchema
        .validate(queryObj)
        .then(({ q, minPrice, maxPrice, locationId }) =>
          axios.get(
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
    }
    return null;
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
          data={searchResults}
          searchText={queryObj.q || 'رياض الأطفال'}
        />
      </div>
    </div>
  );
};

export default SearchPage;
