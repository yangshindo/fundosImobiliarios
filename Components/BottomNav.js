import React from "react";
import { AppBar, IconButton, HStack } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BottomNav = () => (
  <AppBar
    variant="bottom"
    color="#f7f6b0"
    tintColor="#2a5e21"
    title="Fundos Imobiliários"
    leading={props => (
      <IconButton icon={props => <Icon name="home" {...props} size={40}/>} {...props} />
    )}
    trailing={props => (
      <HStack>
      <IconButton
        icon={props => <Icon name="chart-line" {...props} size={40}/>}
        {...props}     
      />
            <IconButton
        icon={props => <Icon name="folder" {...props} size={40}/>}
        {...props}     
      />
      </HStack>

    )}
    style={{ position: "absolute", start: 0, end: 0, bottom: 0}}
  >
    
    
  </AppBar>
);

export default BottomNav;