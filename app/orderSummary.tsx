import React, { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";

import OrdersContext from "@/context/orders/ordersContext";

export default function OrderSummary() {
  const {
    state: { order },
  } = useContext(OrdersContext);
  console.log(order);

  return (
    <Center>
      <Box>
        <Heading className="text-center" size="xl" bold>
          OrderSummary
        </Heading>
      </Box>
    </Center>
  );
}
