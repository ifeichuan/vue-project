// 定义一个接口,用于显示person对象的具体属性
export interface PersonInter{
    id:string,
    name:string,
    age:number
}

export type Persons = Array<PersonInter>

export function getFirst(list:Array<PersonInter>){
    console.log(list[0]);
    
}



