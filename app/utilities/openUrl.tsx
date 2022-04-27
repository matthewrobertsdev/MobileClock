import { Linking, Alert } from 'react-native';

export default function openUrl(url) {
  Linking.openURL(url)
    .catch(err => {
      console.error("Failed opening page because: ", err)
      Alert.alert("Failed to Open Page", "Failed to open the webpage.",
        [
          {
            text: "Got it.",
            onPress: () => { },
            style: "default",
          },
        ])
    })
}
