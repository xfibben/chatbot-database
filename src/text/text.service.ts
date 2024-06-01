import { Injectable } from "@nestjs/common";
import { Prisma,PrismaClient } from "@prisma/client";
import { createTextDto } from "./dto/text.dto";

@Injectable()
export class TextService{

    private prisma:PrismaClient;
    constructor(){
        this.prisma = new PrismaClient();
    }

    getAllTexts() {
        return 'Returning all text from users...';
    }

    postText(text: createTextDto){
        return this.prisma.text.create({data:text})

    }

    putText(text:any){
        return 'Updating a text...'
    }

    deleteText(text:any){
        return 'Deleting a text...'
    }
}