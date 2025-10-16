export interface logInFormType{
    email?:string,
    password?:string,
}



export type registerFormType=logInFormType & {
    name?:string,
   confirmPassword?:string,
    
}