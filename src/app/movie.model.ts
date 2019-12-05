export interface Movie{
    id?:string;
    title:string;
    year: number;
    runtime?:number;
    plot?:string;
    poster:string;
    rating?:number;
    onlineId?:string;
    seen?:boolean;
}