import { JSX } from "react";

export interface Navbar {
    id: number;
    navigate: string;
    navigate_url: string;
    offset: number;
    icon: JSX.Element;
}