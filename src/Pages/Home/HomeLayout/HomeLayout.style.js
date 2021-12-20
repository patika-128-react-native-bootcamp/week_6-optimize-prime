import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    justifyContent: "space-around",
  },
  comicContainer: {
    width: width * 0.5,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 150,
  },
  title: {
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontFamily: "Proxima Nova Semibold",
    color: "black"
  },
  titleContainer: {
    height: 50,
    justifyContent: 'center',
  }
});
