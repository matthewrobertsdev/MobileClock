import {
  StyleSheet,
} from 'react-native';
export const styles = StyleSheet.create({
  adStyle: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgb(2, 76, 182)'
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(2, 76, 182)'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  settingsContainer: {
    backgroundColor: 'rgb(2, 76, 182)',
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
    backgroundColor: 'rgb(2, 76, 182)', 
    margin: 20, 
    borderRadius: 20
  },
  colorPreviewText: {
    color: 'black', 
    textAlign: 'center', 
    padding: 10, 
    fontSize: 20
  }
})
