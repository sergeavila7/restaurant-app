import React, { useContext, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import FirebaseContext from "@/context/firebase/firebaseContext";
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
}

export default function Menu() {
  const { container, content } = globalStyles;

  const context = useContext(FirebaseContext);
  const menu = context?.state.menu;

  useEffect(() => {
    if (context && context.getProducts) {
      context.getProducts();
    }
  }, []);

  const showHeading = (category: string) => {
    return (
      <Divider>
        <Text>{category}</Text>
      </Divider>
    );
  };

  const typedMenu: Dish[] =
    Array.isArray(menu) &&
    menu.every((item) => typeof item === "object" && "id" in item)
      ? (menu as Dish[])
      : [];

  const renderMenuItem = ({ item }: { item: Dish }) => {
    const { dishName, image, description, category, id, price } = item;
    return (
      <>
        <View key={id} style={styles.menuItem}>
          {showHeading(category)}
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
            <Text className="text-neutral-400	" size="md">
              {description}
            </Text>
            <Text className="text-slate-950" size="sm" bold>
              Precio: ${price}
            </Text>
          </View>
        </View>
        <Divider className="my-0.5" />
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
