import React from "react";
import { Text, View } from "react-native";
import { Button } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import globalStyles from "../../styles/global";

export default function NewOrder() {
  const { container, button } = globalStyles;
  return (
    <Box style={container}>
      <View>
        <Button style={button}>
          <Text>Nueva Orden</Text>
        </Button>
      </View>
    </Box>
  );
}
