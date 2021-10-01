import React from "react";
import { ScreenProps } from "../../types";
import { Center, Text } from "native-base";

export default function Teams({ navigation }: ScreenProps) {
  return (
    <Center p={8} bg='white' safeArea flex={1}>
      <Text>Times</Text>
    </Center>
  );
}
