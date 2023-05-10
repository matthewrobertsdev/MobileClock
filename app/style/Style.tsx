import { StyleSheet } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
export const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  bottomStyle: {
    height: 30,
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
    marginTop: -52,
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
    zIndex: 2,
    display: 'flex',
    width: '100%',
    backgroundColor: 'Blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
  },
  timeText: {
    fontSize: 40,
    textAlign: "center",
    color: 'white',
  },
  dateText: {
    fontSize: 22.5,
    textAlign: "center",
    color: 'white',
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
