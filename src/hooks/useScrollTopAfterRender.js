import { useEffect } from 'react';

function useScrollTopAfterRender() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default useScrollTopAfterRender;
