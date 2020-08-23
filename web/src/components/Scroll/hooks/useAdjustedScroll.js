import { useState, useCallback } from 'react';
import * as ReactDOM from 'react-dom';

export const useAdjustedScroll = ({ ref }) => {
  const [previousScroll, setPreviousScroll] = useState({});

  /**
   * Scrolls to the previous position or completely to bottom (on demand)
   */
  const adjust = useCallback(
    scrollToBottom => {
      if (!ref.current) return;

      const node = ReactDOM.findDOMNode(ref.current);
      const height =
        !scrollToBottom && previousScroll
          ? previousScroll.height
          : node.clientHeight;

      node.scrollTop = node.scrollHeight - height;

      // saves current scroll details
      if (previousScroll && node.scrollTop !== previousScroll.top) {
        setPreviousScroll({
          top: node.scrollTop,
          height: node.scrollHeight,
        });
      }
    },
    [ref, previousScroll]
  );

  return [adjust, previousScroll];
};
