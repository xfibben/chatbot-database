import { Controller, Get, Put, Post, Delete, Body } from "@nestjs/common";
import { TextService } from "./text.service";
import { text } from "stream/consumers";
@Controller({'path':'/chatbot'})
export class TextController {

    constructor(private TextService:TextService){}

    @Get('/texts')
    getAllTexts(){
        return this.TextService.getAllTexts();
    }

    @Get('/text')
    getText(){
        return 'Returning a text...';
    }

    @Post('/text')
    postText(@Body() text:any){
        return this.TextService.postText(text);
    }

    @Put('/text')
    putText(@Body() text:any){
        return this.TextService.putText(text);
    }

    @Delete('/text')
    deleteText(@Body() text:any){
        return this.TextService.deleteText(text);
    }
}