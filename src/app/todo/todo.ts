import { Guid } from "guid-typescript";

export class Todo{
    static title: string;
    constructor(
        // public id:Guid,
        public title:string,
        public body:string,
        public dateCreated:Date,
        public status:boolean,
        public dueDate?:Date,
    ) {}
}