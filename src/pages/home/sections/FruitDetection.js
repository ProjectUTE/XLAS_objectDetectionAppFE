import Preview from './Preview';

import object1 from '../../../assets/svg/object-1.svg';

function FruitDetection() {
  const props = {
    id: 'demo',
    title: 'Fruit Detection Using Tensorflow',
    description:
      'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
    imageUrl: object1,
    imageClassName: 'app__img',
  };
  return (
    <Preview
      id={props.id}
      imageClassName={props.imageClassName}
      title={props.title}
      description={props.description}
      imageUrl={props.imageUrl}
    />
  );
}

export default FruitDetection;
