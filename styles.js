import Dimensions from 'Dimensions';
import {StyleSheet} from 'react-native';

const windowSize = Dimensions.get('window')

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FDFDFD'
  },
  header: {
    width: windowSize.width,
    padding: 10,
    backgroundColor: 'darkseagreen'
  },
  box: {
    borderBottomColor: '#000033',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowSize.width
  },
  button: {
    padding: 10,
    margin: 5,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: 'darkseagreen'
  },
  budgetItem: {
    color: 'darkslategray',
    fontFamily: 'Courier',
    fontSize: 18,
    margin: 5
  }
});
