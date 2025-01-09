import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Plus, Minus } from "lucide-react-native";
import OrdersContext from "@/context/orders/ordersContext";

import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui";
import { ButtonIcon } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { CirclePlus } from "lucide-react-native";

export default function DishForm() {
  const {
    saveOrder,
    state: { dish },
  } = useContext(OrdersContext);
  const { price } = dish;

  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(price * quantity);
  }, [quantity, price]);

  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
    Alert.alert(
      "Deseas confirmar tu pedido?",
      "Un pedido confirmado ya no se podra modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            const order = {
              ...dish,
              quantity,
              total,
            };

            saveOrder(order);

            router.push("/orderSummary");
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <>
      <Center className="my-5">
        <Heading className="text-center" size="xl" bold>
          Cantidad
        </Heading>
        <HStack reversed space="lg" className="mt-5">
          <Box className="h-25 w-40">
            <Button onPress={() => setQuantity(quantity + 1)}>
              <ButtonIcon as={Plus} />
            </Button>
          </Box>
          <Box className="h-25 w-20">
            <Input>
              <InputField
                className="text-center"
                value={quantity.toString()}
                onChangeText={(value) => setQuantity(parseInt(value, 10) || 0)}
                keyboardType="numeric"
              />
            </Input>
          </Box>
          <Box className="h-25 w-40">
            <Button onPress={() => setQuantity(Math.max(quantity - 1, 0))}>
              <ButtonIcon as={Minus} />
            </Button>
          </Box>
        </HStack>
        <Box className="mt-5">
          <Text className="text-slate-950" bold>
            Subtotal: ${total}
          </Text>
        </Box>
      </Center>
      <Fab
        style={[styles.fab, isPressed && styles.fabPressed]}
        size="md"
        placement="bottom center"
        onPress={handlePress}
      >
        <FabIcon as={CirclePlus} className="text-slate-950" />
        <FabLabel className="text-slate-950" bold>
          Agregar al Pedido
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
