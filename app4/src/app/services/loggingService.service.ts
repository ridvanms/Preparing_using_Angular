import {Injectable} from "@angular/core"
import { welcomeService } from "./addService.service"

@Injectable()
export class loggingService {
    loggingService(status:string){
        console.log("A server status changed, a new status: "+status)
    }
    constructor(private wService:welcomeService) {
        
        this.wService.loggingHello();
    }

}