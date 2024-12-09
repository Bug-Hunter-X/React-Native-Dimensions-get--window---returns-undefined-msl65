This error occurs when using the `Dimensions` API in React Native to get screen dimensions.  The `Dimensions.get('window')` method returns an object with `width` and `height` properties. However, if you try to access these properties before the component has fully mounted, or if the dimensions haven't been calculated yet, you'll encounter this error.

**Example:**
```javascript
import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window }) => {
      setDimensions(window);
    });

    return () => {
      Dimensions.removeEventListener('change', () => {});
    };
  }, []);

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;
```