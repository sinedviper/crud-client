import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color: "green" | "red" | "none";
  children: ReactNode;
  link?: string;
}
