import React from "react";
import { Text, View } from "react-native";
import { Button } from "@/components/ui/button";
export default function NewOrder() {
  return (
    <View>
      <Button size="sm" variant="solid" action="secondary">
        <Text>Nueva Orden</Text>
      </Button>
    </View>
  );
}
