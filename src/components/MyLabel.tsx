import "./mylabel.css";

export interface MyLabelProps {
  /**
   * Este es el texto por defecto
   */
  label: string;
  /**
   * Diferentes tamaños para elegir
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Establece el label en mayúsculas
   */
  allCaps?: boolean;
  /**
   * Establece el color del texto
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Establece el color del texto
   */
  fontColor?: string;

  /**
   * Establece el color del texto
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = "primary",
  fontColor = "",
  label = "No Label",
  size = "normal",
  backgroundColor = "transparent",
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
