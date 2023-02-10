import PropTypes from 'prop-types';
import { BiSkipNext } from 'react-icons/bi';
import { MdLiveTv } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Preview({ title, description, imageUrl, imageClassName, id }) {
  return (
    <section className="app section container" id={id}>
      <div className="app__container grid">
        <div className="app__data">
          <h2 className="section__title-center">{title}</h2>
          <p className="app__description">{description}</p>
          <div className="app__buttons">
            <NavLink to={`/demo`} className="button button-flex">
              <BiSkipNext className="button__icon" />
              Demo Now
            </NavLink>
            <a href="#" className="button button-flex">
              <MdLiveTv className="button__icon" />
              Watch Demo
            </a>
          </div>
        </div>
        <img
          src={imageUrl}
          alt=""
          className={`svg__img svg__color ${imageClassName}`}
          style={{ borderRadius: '10px', height: '100%' }}
        />
      </div>
    </section>
  );
}

export default Preview;

Preview.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
};
