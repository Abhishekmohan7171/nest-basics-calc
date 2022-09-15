import { Injectable } from "@nestjs/common";

@Injectable ({})
export class AuthService {
    signup(){
        return 'I have signed up.'
    }
}