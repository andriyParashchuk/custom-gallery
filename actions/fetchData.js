export function fetchHasErrored(bool) {
  return {
    type: 'FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function fetchHasErroredTest(bool) {
  return {
    type: 'FETCH_HAS_ERRORED',
    hasErrored: bool
  };
}

export function fetchIsLoading(bool) {
  return {
    type: 'FETCH_IS_LOADING',
    isLoading: bool
  };
}

export function fetchSuccess(dataSource) {
  return {
    type: 'FETCH_DATA_SUCCESS',
    dataSource
  };
}

export function fetchData(url) {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));

    fetch(url).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      dispatch(fetchIsLoading(false));

      return response;
    }).then((response) => response.json())
    .then((dataSource) => dispatch(fetchSuccess(dataSource.photos)))
    .catch(() => dispatch(fetchHasErrored(true)));
  };
}
