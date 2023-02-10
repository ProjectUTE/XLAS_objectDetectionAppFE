import { useEffect, useState } from 'react';
import { HiOutlineArrowNarrowUp } from 'react-icons/hi';

function ScrollUp() {
  const [isShow, setShow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrolled > 200) setShow(true);
      else if (scrolled < 200) setShow(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`scrollup ${isShow ? 'show-scroll' : ''}`}
      id="scroll-up"
      style={{ cursor: 'pointer' }}
    >
      <HiOutlineArrowNarrowUp className="scrollup__icon" />
    </div>
  );
}

export default ScrollUp;
