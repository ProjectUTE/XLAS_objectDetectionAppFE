import PropTypes from 'prop-types';
import { Header, Footer, ScrollUp } from '../components';

function MainLayout({ children }) {
  return (
    <div id="app">
      <Header />
      <div className="main">{children}</div>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
