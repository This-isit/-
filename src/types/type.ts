export interface listItem {
   url:string
   desc:string
}
export interface Result {
 data:listItem[]
 total:number
}
export interface Res {
   data:typeItem[]
   total:number
  }
  export interface typeItem {
   type:string
   children:ChildrenItem[]
  }
  export interface ChildrenItem {
   city:string
   desc:string
  }
  export interface Account {
   data:AccountItem[]
   total:number
  }
  export interface AccountItem {
   title:string
   
  }
  export interface FormItems {
   name: string,
   names: string
   
}
export interface Ruless {
   name: RuleItem[],
   names: RuleItem[],
   
}
export interface RuleItem {
   required?: boolean
   message?: string
   trigger: string
   min?: number
   max?: number
   validator?: any
}
export interface  City{
  data: Cityitem[]
  total: number
}

export interface  Cityitem{
   departCity:string
   destCity:string
   price:string
   cover:string
 }



  



