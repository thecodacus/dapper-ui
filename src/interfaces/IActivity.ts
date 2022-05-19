import { IProfile } from "./IProfile";

export interface IActivity{
    actor: IProfile;
    id: number;
    description: string;
    type: string;
}