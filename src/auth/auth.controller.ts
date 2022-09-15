import { Controller,Post,Get,Req, Res } from "@nestjs/common";
import { Request, Response } from 'express';
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    @Post('signup')
    signup() {
        return this.authService.signup();
    }

    @Post('signin')
    signin() {
        return 'Im signed in.'
    }

    @Post('calc')
    checkSum(@Req() request: Request, @Res() response: Response) {
        //return request.body.num1 + request.body.num2;
        let sum;
        if(request.body.operation == "+"){
		    sum = request.body.num1 + request.body.num2;
	    }else if(request.body.operation == "-"){
		    sum = request.body.num1 - request.body.num2;
	    }else if(request.body.operation == "*"){
		    sum = request.body.num1 * request.body.num2;
	    }else if(request.body.operation == "/"){
		    sum = request.body.num1 / request.body.num2;
	    }

        response.send(`${sum}`)

        console.log(sum)
    }

    @Get('signin')
    signedin() {
        return {msg:"hello",from:"Abhishek"}
    }
}