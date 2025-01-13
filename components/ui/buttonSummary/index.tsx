import React, { useContext } from "react";
import { Link } from "expo-router";
import { Button } from "@/components/ui";
import { ButtonGroup, ButtonText } from "@/components/ui/button";
import OrdersContext from "@/context/order/orderContext";

const ButtonSummary = () => {
  const {
    state: { order },
  } = useContext(OrdersContext);

  if (order.length === 0) return null;

  return (
    <ButtonGroup>
      <Button className="px-4 py-2 rounded-md">
        <ButtonText className="text-primary-500 bold uppercase">
          <Link href="/orderSummary">Ir a Pedido</Link>
        </ButtonText>
      </Button>
    </ButtonGroup>
  );
};

export default ButtonSummary;
