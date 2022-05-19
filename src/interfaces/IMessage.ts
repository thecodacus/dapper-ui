import { IProfile } from "./IProfile";

export interface IMessage{
    from: IProfile;
    to: IProfile;
    id: number;
    message: string;
    timeStame: number;
}