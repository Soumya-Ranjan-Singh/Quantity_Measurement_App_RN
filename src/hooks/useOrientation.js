/* eslint-disable no-shadow */
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useOrientation = () => {
  const {width, height} = Dimensions.get('window');

  const [orientation, setOrientation] = useState(
    width > height ? 'landscape' : 'portrait',
  );

  const handleOrientationChange = ({window}) => {
    const {width, height} = window;
    setOrientation(width > height ? 'landscape' : 'portrait');
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      handleOrientationChange,
    );
    return () => {
      subscription.remove();
    };
  });

  return (value1, value2) => {
    return orientation === 'portrait' ? value1 : value2;
  };
};
