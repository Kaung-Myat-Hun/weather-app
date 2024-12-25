import { ReactNode } from "react";

interface ButtonProps {
    onClick : () => void;
    className: string;
    id: string;
    children: ReactNode;
}

export const Button = ( props : ButtonProps ) => {
  return <button className={props.className || ""} id={props.id || ""} onClick={props.onClick ? props.onClick : ()=> {}}>
  {props.children}
</button>
}
