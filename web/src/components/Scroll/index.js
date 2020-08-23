import React, { forwardRef, useRef, useCallback, useEffect } from 'react';
import { Container } from './styles';

import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import { useAdjustedScroll } from './hooks/useAdjustedScroll';

const Scroll = ({ count, loadMore, hasMore, children }) => {
  const selfRef = useRef(null);

  const [fetching, stopFetching, scroll] = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    ref: selfRef,
  });

  const [adjustScroll, previousScroll] = useAdjustedScroll({ ref: selfRef });

  useEffect(() => {
    if (!selfRef.current) return;

    if (fetching) {
      stopFetching();
      adjustScroll();
    }
  }, [selfRef, fetching, stopFetching, adjustScroll]);

  useEffect(() => {
    if (count === 15) {
      adjustScroll(true);
    }

    //console.log(selfRef.current.scrollTop);
  }, [count]);

  return <Container ref={selfRef}>{children}</Container>;
};

export default Scroll;
