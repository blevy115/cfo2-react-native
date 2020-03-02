import {useState} from 'react'
import { Dimensions } from 'react-native'

export default () => {
  const isPortrait = () => {
    const dim = Dimensions.get('screen')
    return dim.height >= dim.width;
  }
  const [orientation, setOrientation] = useState(isPortrait() ? 'portrait': 'landscape')
  Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait() ? 'portrait' : 'landscape')
  });
  return [orientation, setOrientation];
}
