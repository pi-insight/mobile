import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, PermissionStatus } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <Camera type={type}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
