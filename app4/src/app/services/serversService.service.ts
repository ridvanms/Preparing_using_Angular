
export class ServerService {
    servers = [
        {name:"server1",content:"it's so cool"},
        {name:"server2",content:"it's so cool"}
    ]
    addServer(data:{name:string,content:string}){
        this.servers.push(data)
    }
   
}