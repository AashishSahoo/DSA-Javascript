function defangIPaddr(address: string): string {


 let res:string="";
 for(let i=0;i<address.length;i++){
      if(address.charAt(i)==="."){
        res += '[.]';
      }else{
        res += address.charAt(i);
      }
 }
return res;

};