export interface carDetails {
    carID: number, 
    owner: Users,
    model: string, 
    make: string, 
    year: number,
    plate: number, 
    new: boolean, 
    image: Blob,
    createdAt: Date, 
    updatedAt: Date
}
import { Users } from "../api/users";