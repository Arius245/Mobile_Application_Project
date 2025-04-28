import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
const Spinner = ({size, color}) => {
	return (
	  <View style={styles.spinnerContainer}>
    	<ActivityIndicator 
        size={ typeof size === "undefined" ? "large" : size }
				color={ typeof color === "undefined" ? "gray" : color }
      />
  	</View>
	)
};

export default Spinner;

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});