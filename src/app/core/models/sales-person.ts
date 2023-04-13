import { Region } from "./region";

export interface SalesPerson {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    regions: Region[];
}