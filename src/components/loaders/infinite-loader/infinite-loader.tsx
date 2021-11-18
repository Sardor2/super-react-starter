import React from 'react';
import useElementOnScreen from '../../../hooks/use-element-on-screen';
import Spinner from '../spinner';

interface Props {
  hasMore: boolean | undefined;
  loadMore: () => void;
  loading?: boolean;
}

const InfiniteLoader: React.FC<Props> = (props) => {
  const targetRef = useElementOnScreen({
    enabled: !!props.hasMore,
    onScreen: () => {
      props.loadMore();
    },
    rootMargin: '50%',
    threshold: 0.2,
  });

  return (
    <>
      {props.children}
      {props.loading ? <Spinner loaderSize={22} loading height={20} /> : null}
      <span
        aria-label="bottom"
        ref={targetRef}
        style={{ visibility: 'hidden' }}
      />
    </>
  );
};

InfiniteLoader.defaultProps = {
  loading: false,
};

export default InfiniteLoader;
