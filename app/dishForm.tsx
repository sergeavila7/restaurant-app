import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { Plus, Minus } from "lucide-react-native";

import OrdersContext from "@/context/orders/ordersContext";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import globalStyles from "@/styles/global";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui";
import { ButtonIcon } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";

export default function DishForm() {
  const ordersContext = useContext(OrdersContext);

  const { dishName, image, description, price } = ordersContext.state.dish;

  const [quantity, setQuantity] = useState("");

  return (
    <Center className="my-5">
      <Heading className="text-center" size="xl" bold>
        Cantidad
      </Heading>
      <HStack reversed space="lg" className="mt-5">
        <Box className="h-25 w-40">
          <Button>
            <ButtonIcon as={Plus} />
          </Button>
        </Box>
        <Box className="h-25 w-20">
          <Input>
            <InputField
              className="text-center"
              value={quantity.toString()}
              onChangeText={(quantity) => setQuantity(quantity)}
              keyboardType="numeric"
            />
          </Input>
        </Box>
        <Box className="h-25 w-40">
          <Button>
            <ButtonIcon as={Minus} />
          </Button>
        </Box>
      </HStack>
    </Center>
  );
}
