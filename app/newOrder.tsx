import React from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button, ButtonGroup, ButtonText } from "@/components/ui/button";
import { Box } from "@/components/ui/box";
import globalStyles from "../styles/global";
import { Colors } from "../constants/Colors";

export default function NewOrder() {
  const { container, content } = globalStyles;

  return (
    <Box style={container}>
      <View style={[content, styles.content]}>
        <ButtonGroup>
          <Button
            className="px-4 py-2 rounded-md text-primary-400"
            action="primary"
          >
            <ButtonText className="bold uppercase text-typography-900">
              <Link href="/menu">Nueva Orden</Link>
            </ButtonText>
          </Button>
        </ButtonGroup>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
});
