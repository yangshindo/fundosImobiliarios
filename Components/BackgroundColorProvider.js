import { StyleSheet, View } from "react-native";

const BackgroundColorProvider = ({children}) => {
    return (
      <View style={styles.container}>{children}</View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8ffc7",
    },
  });

  export default BackgroundColorProvider