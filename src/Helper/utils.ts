export const orderStatusColor = {
  Pending: "#3498db",
  cancelled: "#e74c3c",
  completed: "#2c3e50",
};

export type OrderStatusType = "Pending" | "cancelled" | "completed";

export const hslToHex = (hsl: any) => {
  const { h, s, v } = hsl;
  const hue = h / 360;
  const saturation = s / 100;
  const lightness = v / 100;

  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs(((hue * 6) % 2) - 1));
  const m = lightness - c / 2;

  let r, g, b;

  if (hue < 1 / 6) {
    [r, g, b] = [c, x, 0];
  } else if (hue < 2 / 6) {
    [r, g, b] = [x, c, 0];
  } else if (hue < 3 / 6) {
    [r, g, b] = [0, c, x];
  } else if (hue < 4 / 6) {
    [r, g, b] = [0, x, c];
  } else if (hue < 5 / 6) {
    [r, g, b] = [x, 0, c];
  } else {
    [r, g, b] = [c, 0, x];
  }

  const rgb = [(r + m) * 255, (g + m) * 255, (b + m) * 255];

  return `#${Math.round(rgb[0]).toString(16)}${Math.round(rgb[1]).toString(
    16
  )}${Math.round(rgb[2]).toString(16)}`;
};
