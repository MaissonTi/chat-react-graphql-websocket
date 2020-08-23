import { useState, useEffect, useCallback } from 'react';

export const useInfiniteScroll = ({ ref, hasMore, onLoadMore }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [scroll, setScroll] = useState({});

  const handleScroll = useCallback(() => {
    setScroll({
      top: ref.current.scrollTop,
      height: ref.current.scrollHeight,
      offHeight: ref.current.offsetHeight,
    });

    if (ref.current.scrollTop === 0 && isFetching === false && hasMore) {
      setIsFetching(true);
    }
  }, [ref, isFetching, hasMore]);

  useEffect(() => {
    const elem = ref.current;

    if (!elem) {
      return;
    }

    elem.addEventListener('scroll', handleScroll);

    return () => {
      elem.removeEventListener('scroll', handleScroll);
    };
  }, [ref, handleScroll]);

  // loads more if fetching has started
  useEffect(() => {
    if (isFetching) {
      onLoadMore();
    }
  }, [isFetching, onLoadMore]);

  const stopFetching = useCallback(() => {
    setIsFetching(false);
  }, []);

  return [isFetching, stopFetching, scroll];
};

export default useInfiniteScroll;
