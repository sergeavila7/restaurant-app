import React, { useContext, useEffect, useRef } from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { Link, router } from "expo-router";
import FirebaseContext from "@/context/firebase/firebaseContext";
import OrderContext from "@/context/orders/ordersContext";
import { Box } from "@/components/ui/box";
import { Divider } from "@/components/ui/divider";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import globalStyles from "../styles/global";

interface Dish {
  id: string;
  dishName: string;
  image?: string;
  description: string;
  category: string;
  price: string;
  available: boolean;
}

const categoryTranslations: Record<string, string> = {
  breakfast: "Desayuno",
  lunch: "Comida",
  dinner: "Cena",
  drink: "Bebida",
  dessert: "Postres",
  salads: "Ensaladas",
};

export default function Menu() {
  const { container, content } = globalStyles;

  const firebaseContext = useContext(FirebaseContext);
  const { selectDish } = useContext(OrderContext);

  const menu = firebaseContext?.state.menu;
  const previousCategory = useRef<string | null>(null);

  useEffect(() => {
    if (firebaseContext && firebaseContext.getProducts) {
      firebaseContext.getProducts();
    }
  }, []);

  const getCategoryTranslation = (category: string): string => {
    return categoryTranslations[category] || category.toUpperCase();
  };

  const showHeading = (category: string) => {
    if (category !== previousCategory.current) {
      previousCategory.current = category;
      return (
        <Box className="bg-gray-950">
          <Text className="text-yellow-400 ml-5" bold size="md">
            {getCategoryTranslation(category)}
          </Text>
        </Box>
      );
    }
    return null;
  };

  const typedMenu: Dish[] =
    Array.isArray(menu) &&
    menu.every((item) => typeof item === "object" && "id" in item)
      ? (menu as Dish[])
      : [];

  const renderMenuItem = ({ item }: { item: Dish }) => {
    const { dishName, image, description, category, id, price, available } =
      item;

    return (
      <>
        <Pressable
          onPress={() => {
            const { available, ...dish2 } = item;
            selectDish(dish2);
            router.push("/dishDetail");
          }}
        >
          {showHeading(category)}
          <View key={id} style={styles.menuItem}>
            {image && (
              <Image
                source={{ uri: image }}
                style={styles.image}
                alt={dishName}
              />
            )}
            <View style={styles.containerText}>
              <Text className="text-slate-950" size="lg" bold>
                {dishName}
              </Text>
              <Text className="text-neutral-400" size="md">
                {description}
              </Text>
              <Text className="text-slate-950" size="sm" bold>
                Precio: ${price}
              </Text>
            </View>
          </View>
          <Divider className="my-0.5" />
        </Pressable>
      </>
    );
  };

  return (
    <Box style={container}>
      <View style={[content, styles.content]}>
        {typedMenu.length > 0 ? (
          <FlatList
            data={typedMenu}
            renderItem={renderMenuItem}
            keyExtractor={(dish) => dish.id}
          />
        ) : (
          <Text>No hay platos disponibles</Text>
        )}
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
  menuItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  containerText: {
    margin: 5,
  },
});
