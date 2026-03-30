export class User {
constructor(private userName:string , private pass:string , private role:string){

}

public getUserName():string{
   return this.userName;
}
public setUsserName(uName:string):void{
    this.userName= uName;
}
public getPass():string{
    return this.pass;
}
public setPass(pass:string):void{
    this.pass= pass;
}
public getRole():string{
    return this.role;
}
public setRole(role:string):void{
    this.role= this.role;
}

}
