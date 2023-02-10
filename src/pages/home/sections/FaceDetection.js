import Preview from './Preview';
import object1 from '../../../assets/svg/object-1.svg';

function FaceDetection() {
  const props = {
    title: 'Face Detection Using Open CV',
    description:
      'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
    imageUrl: object1,
  };
  return (
    <Preview
      title={props.title}
      description={props.description}
      imageUrl={props.imageUrl}
    />
  );
}

export default FaceDetection;
