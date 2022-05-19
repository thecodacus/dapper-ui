
import { Contract, ethers } from 'ethers'
import {IProfile} from '../interfaces/IProfile'
import { DapperHub__factory, DapperProfile__factory } from '../typechain'
import { contractAddresses } from '../addresses'
import { IPost } from '../interfaces/IPost'

export enum PublicationType{
    POST,
    COMMENT,
    STORY,
    LIKE,
    MIRROR
}
export enum AttachmentType{
    NONE,
    IMAGE,
    VIDEO,
    AUDIO,
    FILE
}

export class DapperContract{
    public static async getSigner():Promise<ethers.providers.JsonRpcSigner>{
        // if ((window as any).DapperSigner!=null) {
        //     return (window as any).DapperSigner
        // }

        const provider = new ethers.providers.Web3Provider((window as any).ethereum)

        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", []);

        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const signer = provider.getSigner();
        // (window as any).DapperSigner=signer
        return signer
    }
    public static async getSignerIfConnected():Promise<ethers.providers.JsonRpcSigner|null>{
        if(window?.ethereum?.selectedAddress!=null){
            return DapperContract.getSigner()
        }
        return null
    }
    public static async registerProfile(profileData: Partial<IProfile> ): Promise<ethers.ContractTransaction>{
        const signer=await DapperContract.getSigner()
        const dapperHub= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
       return await dapperHub.registerProfile(profileData.imageURI||"",profileData.handle||"",profileData.followNFTUri||"",{gasLimit:1000000})
    }
    public static async getProfiles(): Promise<IProfile[]>{
        const signer=await DapperContract.getSigner()
        const dapperProfileContract= DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        const ownerAddress=await signer.getAddress()
        const profileCount= await dapperProfileContract.balanceOf(ownerAddress)
        let profiles:IProfile[]=[]
        for(let i=0;i<profileCount.toNumber();i++){
            const profileId= await dapperProfileContract.tokenOfOwnerByIndex(ownerAddress,i)
            const profileMeta= await dapperProfileContract.getProfileByID(profileId)
            profiles.push({
                id:profileId.toNumber(),
                imageURI:profileMeta.imageURI,
                handle:profileMeta.handle,
                followNFTUri:profileMeta.followNFTURI
            })
        }

        return profiles
    }

    public static async followProfile(userProfileId:number,profileId:number): Promise<void>{
        const signer=await DapperContract.getSigner()
        const dapperProfileContract= DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        await dapperProfileContract.followProfile(userProfileId,profileId,{gasLimit:1000000})
    }

    public static async unFollowProfile(userProfileId:number,profileId:number): Promise<void>{
        const signer=await DapperContract.getSigner()
        const dapperProfileContract= DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        await dapperProfileContract.unfollowProfile(userProfileId,profileId,{gasLimit:1000000})
    }

    public static async getFollowers(profileId:number): Promise<IProfile[]>{
        const signer=await DapperContract.getSigner()
        const dapperProfileContract= DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        const records= await dapperProfileContract.getFollowers(profileId)

        let profiles:IProfile[]=[]
        for(let i=0;i<records.length;i++){
            const record=records[i]
            const profileMeta={
                id:record.id.toNumber(),
                imageURI:record.imageURI,
                handle:record.handle,
                followNFTUri:record.followNFTURI
            }
            profiles.push(profileMeta)
        }
        return profiles
    }
    public static async getFollowings(profileId:number): Promise<IProfile[]>{
        const signer=await DapperContract.getSigner()
        const dapperProfileContract= DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        const records= await dapperProfileContract.getFollowing(profileId)

        let profiles:IProfile[]=[]
        for(let i=0;i<records.length;i++){
            const record=records[i]
            const profileMeta={
                id:record.id.toNumber(),
                imageURI:record.imageURI,
                handle:record.handle,
                followNFTUri:record.followNFTURI
            }
            profiles.push(profileMeta)
        }
        return profiles
    }

    public static async publishPost(profileId:number, metadata:{postText: string, attachmentType: AttachmentType, postAttachmentUri: string}){
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const records= await dapperHubContract.publishPost(profileId,metadata.postText, metadata.attachmentType,metadata.postAttachmentUri)
        console.log("Publish post request submitted",records.hash);
        await records.wait()

        
    }

    public static async publishComment(profileId:number, metadata:{
        parentId: number,
        text: string, 
        attachmentType: AttachmentType, 
        postAttachmentUri: string
    }){
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const records= await dapperHubContract.publishComment(metadata.parentId,profileId,metadata.text,metadata.attachmentType,metadata.postAttachmentUri)
    }

    public static async publishStory(profileId:number,metadata:{attachmentType:AttachmentType,postAttachmentUri:string}){
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const records= await dapperHubContract.publishStory(profileId,metadata.attachmentType,metadata.postAttachmentUri)   
    }

    public static async publishLike(profileId:number,
        parentId: number
    ){
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const records= await dapperHubContract.publishLike(parentId,profileId)
    }
    public static async publishMirror(profileId:number, metadata:{
        parentId: number,
        text: string, 
    }){
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const records= await dapperHubContract.publishMirror(metadata.parentId,profileId,metadata.text)
    }
    public static async loadFeed(profile:IProfile,offset?:number,limit?:number): Promise<IPost[]>{
        const signer=await DapperContract.getSigner()
        const dapperHubContract= DapperHub__factory.connect(contractAddresses.DapperHub,signer)
        const filter= dapperHubContract.filters.PublishedPost(null,null,null,null,null)
        if(!offset) offset=await signer.provider.getBlockNumber()
        else offset=await signer.provider.getBlockNumber()-offset
        if(!limit) limit=200;
        const dapperProfile=await DapperProfile__factory.connect(contractAddresses.DapperProfile,signer)
        const followings=await dapperProfile.getFollowing(profile.id)
        console.log(followings);
        
        const records= await dapperHubContract.queryFilter(filter,offset-limit,offset)
        console.log(records);
        
        let authorsToFilter=followings.map(f=>f.id.toNumber())
        authorsToFilter.push(profile.id);
        const followingsPosts=records.filter(r=>authorsToFilter.includes(r.args.authorId.toNumber()))
        let posts:IPost[]=[]
        for(let i=0;i<followingsPosts.length;i++){
            const followingsPost=followingsPosts[i]
            const foundAuthor=followings.find(f=>f.id.toNumber()==followingsPost.args.authorId.toNumber())
            let author:IProfile;
            if(followingsPost.args.authorId.toNumber()==profile.id){
                author=profile
            }
            else if(!foundAuthor) continue;
            else{    
                author={
                    id:foundAuthor.id.toNumber(),
                    imageURI:foundAuthor.imageURI,
                    handle:foundAuthor.handle,
                    followNFTUri:foundAuthor.followNFTURI
                }
            }

            const post:IPost={
                id:followingsPost.args.publicationId.toNumber(),
                author:author,
                text:followingsPost.args.postText,
                attachmentType:followingsPost.args.attachmentType,
                attachmentUri:followingsPost.args.postAttachmentUri,
                // timestamp:record.args.timestamp.toNumber(),
            }
            posts.push(post);
        }

        console.log(posts);
        return posts
        
    }
}
