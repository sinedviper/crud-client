import { DetailedHTMLProps, HTMLAttributes } from "react";

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
}

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user?: User;
}
