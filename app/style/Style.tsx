import { StyleSheet, Platform } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
export const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  bottomStyle: {
    height: Platform.OS === 'ios' ? 35 : 50,
    width: '100%',
    justifyContent: 'flex-end',
    marginBottom: 0,
    backgroundColor: Colors.lighter
  },
  adStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'Blue'
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'Blue'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  settingsContainer: {
    backgroundColor: 'Blue',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  timeText: {
    fontSize: 40,
    textAlign: "center",
    color: 'white',
    //margin: 5,
  },
  dateText: {
    fontSize: 22.5,
    textAlign: "center",
    color: 'white',
    //margin: 5,
  },
  colorPreview: {
    width: 200, 
    backgroundColor: 'Blue', 
    margin: 20, 
    borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  colorPreviewText: {
    color: 'black', 
    textAlign: 'center', 
    padding: 10, 
    fontSize: 20
  }
})
