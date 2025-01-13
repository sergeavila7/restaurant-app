import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui";
import { Fab, FabIcon, FabLabel } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { Center } from "@/components/ui/center";
import { Image } from "@/components/ui/image";

import OrdersContext from "@/context/order/orderContext";
import { HStack } from "@/components/ui/hstack";
import { Divider } from "@/components/ui/divider";
import { Order } from "@/context/types";
import { ButtonGroup, ButtonText } from "@/components/ui/button";
import { Link, router } from "expo-router";
import { ShoppingBasket } from "lucide-react-native";

export default function OrderSummary() {
  const [isPressed, setIsPressed] = useState(false);

  const {
    state: { order, total },
    showSummary,
    deleteProduct,
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

  const handlePress = () => {
    setIsPressed(true);
    Alert.alert(
      "Revisa tu pedido",
      "Una vez que realizas tu pedido, no podras cambiarlo",
      [
        {
          text: "Confirmar",
          onPress: () => {
            router.push("/orderProgress");
          },
        },
        {
          text: "Revisar",
          style: "cancel",
        },
      ]
    );
  };

  const confirmDelete = (id: string) => {
    Alert.alert(
      "Deseas confirmar tu pedido?",
      "Un pedido confirmado ya no se podra modificar",
      [
        {
          text: "Confirmar",
          onPress: () => {
            deleteProduct(id);
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  const renderOrderItem = ({ item }: { item: Order }) => {
    const { id, dishName, image, price, quantity } = item;

    return (
      <HStack className="bg-white rounded mt-4 p-4" space="md" reversed={false}>
        <Box className="w-1/5">
          {image && <Image size="md" source={{ uri: image }} alt={dishName} />}
        </Box>
        <Box className="w-4/5">
          <Text className="text-primary-900">{dishName}</Text>
          <Text className="text-primary-900">Cantidad: {quantity}</Text>
          <Text className="text-primary-900">Precio: ${price}</Text>
          <Button
            size="xs"
            action="negative"
            onPress={() => {
              confirmDelete(id);
            }}
          >
            <ButtonText className="w-full bold text-center uppercase">
              Eliminar
            </ButtonText>
          </Button>
          <Divider className="mt-4" />
        </Box>
      </HStack>
    );
  };

  return (
    <>
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
          <Text className="text-primary-900 mt-4" bold>
            Total a Pagar: ${total || 0}
          </Text>
        </Box>
        <ButtonGroup className="w-full px-4 mt-5">
          <Button className="px-4 py-2 rounded-md" action="primary">
            <ButtonText className="text-primary-900 bold uppercase">
              <Link href="/menu">Seguir pediendo</Link>
            </ButtonText>
          </Button>
        </ButtonGroup>
      </Center>
      <Fab
        style={[styles.fab, isPressed && styles.fabPressed]}
        size="md"
        placement="bottom center"
        onPress={handlePress}
      >
        <FabIcon as={ShoppingBasket} className="text-primary-900" />
        <FabLabel className="text-primary-900" bold>
          Ordenar Pedido
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
