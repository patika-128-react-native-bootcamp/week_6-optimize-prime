import { StyleSheet, Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: width*0.35,
    height: height*0.35
  }
});

