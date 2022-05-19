
export class IPFSStorage{
    
    constructor(private client: any | null){}
    static async connectStorage(){
        if(!(window as any).ipfsClient){
            (window as any).ipfsClient= await (window as any).IpfsCore.create()
        }
        return (window as any).ipfsClient
    }
    static async addFile(file: File){
        const client=await this.connectStorage()
        return (await client.add(file)).cid
    }
}