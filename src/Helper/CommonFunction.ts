import { OrderStatusType, orderStatusColor } from "./utils";

export const find_text_color = (status: OrderStatusType): string => {
  return orderStatusColor[status] as string;
};
