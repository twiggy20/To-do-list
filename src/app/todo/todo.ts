export class Todo{
    constructor(
        public title:string,
        public body:string,
        public dateCreated:Date,
        public dueDate:Date,
        public status:boolean
    ) {}
}