export interface GenericPostList<T>{
    status:boolean
    posts:T|null
}

export interface IPostSingle{
    id:number,
    title:string,
    tags:string,
    content:string,
    created_at:Date,
    user_id:number,
    image:null|string
}