export interface Photo {
  id:number;
  posDate:Date;
  url:string;
  description:string;
  allowComments:boolean;
  likes:number;
  comments:number;
  userId:number;
}
