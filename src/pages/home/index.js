import React from 'react';
import {
  Banner,
  ContactUs,
  FaceDetection,
  FruitDetection,
  HowToWork,
} from './sections';
import { useScrollTopAfterRender } from '../../hooks';

function Home() {
  useScrollTopAfterRender();

  return (
    <React.Fragment>
      <Banner />
      <HowToWork />
      <FruitDetection />
      <FaceDetection />
      <ContactUs />
    </React.Fragment>
  );
}

export default Home;
