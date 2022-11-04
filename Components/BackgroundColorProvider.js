import { StyleSheet, View, ImageBackground } from "react-native";

const BackgroundColorProvider = ({ children }) => {
  return (
  <ImageBackground source={"https://imgur.com/0PNVcwH.png"}  style={{width: '100%', height: '100%'}}>
      {children}
    </ImageBackground>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8ffc7",
  },
});

export default BackgroundColorProvider;
