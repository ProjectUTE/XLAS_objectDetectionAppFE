import React from 'react';
import { useScrollTopAfterRender } from '../../hooks';
import DemoEditor from './sections/DemoEditor';
import Video from './sections/Video';

function Demo() {
  useScrollTopAfterRender();

  return (
    <React.Fragment>
      <Video />
      <DemoEditor />
    </React.Fragment>
  );
}

export default Demo;
