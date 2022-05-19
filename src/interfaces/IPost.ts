import { AttachmentType } from "../lib/dapperContract";
import { IProfile } from "./IProfile";

export interface IPost{
    id: number;
    author: IProfile;
    attachmentType: AttachmentType;
    attachmentUri: string;
    likes?: number;
    comments?: number;
    text: string;
    timeStamp?: number;
}