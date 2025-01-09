import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { CirclePlus } from "lucide-react-native";
import { router } from "expo-router";

import OrdersContext from "@/context/orders/ordersContext";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import globalStyles from "@/styles/global";

export default function DishDetail() {
  const {
    state: { dish },
  } = useContext(OrdersContext);

  const { dishName, image, description, price } = dish;

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    router.push("/dishForm");
  };

  return (
    <>
      <Box style={globalStyles.container}>
        <View style={globalStyles.content}>
          <Center className="bg-white shadow-lg rounded py-5">
            <Heading className="text-center" size="xl" bold>
              {dishName}
            </Heading>
            <Image size="2xl" source={{ uri: image }} alt={dishName} />
            <Text className="text-neutral-400" size="md">
              {description}
            </Text>
            <Text className="text-slate-950" size="sm" bold>
              Precio: ${price}
            </Text>
          </Center>
        </View>
      </Box>

      <Fab
        style={[styles.fab, isPressed && styles.fabPressed]}
        size="md"
        placement="bottom center"
        onPress={handlePress}
      >
        <FabIcon as={CirclePlus} className="text-slate-950" />
        <FabLabel className="text-slate-950" bold>
          Agregar Platillo
        </FabLabel>
      </Fab>
    </>
  );
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: "white",
  },
  fabPressed: {
    backgroundColor: "#d1d5db",
  },
});
