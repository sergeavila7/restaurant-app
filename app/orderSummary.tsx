import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { Image } from "@/components/ui/image";

import OrdersContext from "@/context/orders/ordersContext";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { useEvent } from "react-native-reanimated";
import { Order } from "@/context/types";

export default function OrderSummary() {
  const {
    state: { order, total },
    showSummary,
  } = useContext(OrdersContext);

  useEffect(() => {
    calcTotal();
  }, [order]);

  const calcTotal = () => {
    const newTotal = order.reduce(
      (total: number, item: any) => total + item.total,
      0
    );
    showSummary(newTotal);
  };

  const renderOrderItem = ({ item }: { item: Order }) => {
    const { dishName, image, price, quantity } = item;

    return (
      <HStack className="bg-white rounded mt-4 p-4" space="md" reversed={false}>
        <Box className="w-1/5">
          {image && <Image size="md" source={{ uri: image }} alt={dishName} />}
        </Box>
        <Box className="w-4/5">
          <Text className="text-slate-950">{dishName}</Text>
          <Text className="text-slate-950">Cantidad: {quantity}</Text>
          <Text className="text-slate-950">Precio: ${price}</Text>
          <Divider className="my-0.5" />
        </Box>
      </HStack>
    );
  };

  return (
    <Center>
      <Box className="w-full p-4">
        <Heading className="text-center" size="xl" bold>
          Resumen Pedido
        </Heading>
        <FlatList
          data={order}
          renderItem={renderOrderItem}
          keyExtractor={(item, i) => item.id + i}
        />
      </Box>
      <Box>
        <Text className="text-slate-950 mt-4" bold>
          Total a Pagar: ${total || 0}
        </Text>
      </Box>
    </Center>
  );
}
