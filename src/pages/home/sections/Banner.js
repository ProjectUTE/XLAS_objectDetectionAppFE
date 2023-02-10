import banner from '../../../assets/svg/banner.svg';

function Banner() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <img src={banner} alt="" className="svg__img svg__color home__img" />
        <div className="home__data">
          <h1 className="home__title">
            Order Products <br /> Faster Easier
          </h1>
          <p className="home__description">
            Order your favorite foods at any time and we will deliver them right
            to where you are.
          </p>
          <a href="#" className="button">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;
