import { DetailedHTMLProps, HTMLAttributes } from "react";

interface Users {
  id: string;
  username: string;
  password: string;
  email: string;
}

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  users?: Users[];
}
