export const required=(value:string)=>{
    if(value)return undefined;
    return 'message not entered'
}

export const maxValue=(lengthValue:number)=>(value:string)=>{
    if(value && value.length>lengthValue) return `characters more than ${lengthValue}`
}