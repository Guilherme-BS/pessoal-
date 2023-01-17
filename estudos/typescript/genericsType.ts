// function identity<Type>(arg: Array<Type>): Array<Type> {
//   console.log(arg.length);
//   return arg;
// }

// const output = identity([1,2,3,4,'ola mundo'])

// function identity2 <Type> (arg: Type) : Type {
//   console.log(arg)
//   return arg
// }
// interface IGenericIndentity<Type> {
//   (arg: Type): Type
// }
// let myIdentity: IGenericIndentity<number> = identity2
// console.log(myIdentity(56))


//  RESTRIÇOES GENERICAS

interface Lengthwise{
  length:number
}

function identity<Type extends Lengthwise>(arg: Type) : Type{
  console.log(arg.length)
  return arg
}
identity('ds')