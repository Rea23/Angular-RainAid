import { InterfaceReview } from "./InterfaceReview";

export interface InterfaceProduct {
    id: number;
    name: string;
    picture: string;
    description: string;
    flag: boolean;
    price: number;
    reviews: InterfaceReview[];
}