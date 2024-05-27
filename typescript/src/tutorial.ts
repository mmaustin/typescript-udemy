

// let car: {brand: (string | boolean), year: number} = {brand: 'chevy', year: 2024};

// let car1: {brand: (string | boolean)} = {brand: 'ford'};

// let items:{brand: (string | boolean), year?: number}[] = [car, car1];

// items.push({brand: 'lexus', year: 987});

// let car: (string|number)[] = [];
// car.push('car');
// car.push(8);

// const funct = (a:string, b:string):string => {
//   return a+b;
// };

// const nameArray: string[] = ['anne', 'nark', 'dave'];
// const checkArray = (arr:string[], n:string): boolean => {
//   for(let nm of arr){
//     if(nm === n){
//       return true;
//     };
//   };
//   return false;
// };

// const processInput = (val:(number|string)): void => {
//   if(typeof val === 'number') console.log(val*2);
//   if(typeof val === 'string') console.log(val.toUpperCase());
// }

// const objectParams = ({id, lid}:{id:number, lid:string}): {
//   id: number,
//   isActive: boolean,
//   lid: string
// } => {
//   return {id, isActive: id % 2 === 0, lid};
// };

// const processData = (input: string | number, {rev}:{rev:boolean}={rev:true}): (string | number) => {
//   if(typeof input === 'number'){
//     return input * input;
//   };
//   if(rev){
//     return input.split('').reverse().join('').toUpperCase();
//   }
//   return input.toUpperCase();
// };

// console.log(processData('five'));

// type User = { id: number; name: string; isActive: boolean };

// const john: User = {
//   id: 1,
//   name: 'john',
//   isActive: true,
// };
// const susan: User = {
//   id: 1,
//   name: 'susan',
//   isActive: false,
// };

// function createUser(user: User): User {
//   console.log(`Hello there ${user.name.toUpperCase()} !!!`);
//   return user;
// };
// console.log(createUser(john));

// type Employee = {id: number, name: string, department: string};
// type Manager = {id: number, name: string, employees: Employee[]};
// type Staff = Employee | Manager;

// const alice: Employee = {
//   id: 1,
//   name: 'Alice',
//   department: 'Sales'
// };

// const steve: Employee = {
//   id: 2,
//   name: 'Steve',
//   department: 'Legal'
// };

// const bob: Manager = {
//   id: 11,
//   name: 'Bob',
//   employees: [alice, steve]
// };

//console.log(alice, steve, bob);

// const pSD = (staff: Staff): void => {
//   if('employees' in staff){
//     console.log(staff.employees[0].department);
//   } else {
//     console.log('no');
    
//   }
// }
// console.log(pSD(steve));

//Intersection Type

// type Book = { id: number; name: string; price: number };
// type DiscountedBook = Book & { discount: number };
// const book1: Book = {
//   id: 2,
//   name: 'How to Cook a Dragon',
//   price: 15,
// };

// const book2: Book = {
//   id: 3,
//   name: 'The Secret Life of Unicorns',
//   price: 18,
// };

// const discountedBook: DiscountedBook = {
//   id: 4,
//   name: 'Gnomes vs. Goblins: The Ultimate Guide',
//   price: 25,
//   discount: 0.15,
// };

// interface Book {
//   readonly isbn: number,
//   title: string,
//   author: string,
//   genre?: String,
//   arr?: (string | number)[],
//   printAuthor():string,
//   capitalizeTitle(bookTitle:string):string,
// };

// const bookName: Book = {
//   isbn: 234,
//   title: 'The Land of Joshua',
//   author: 'McCray',
//   genre: 'Historical Fiction',
//   arr: [1,2,'three', 'four'],
//   printAuthor() {
//     return this.author;
//   },
//   // capitalizeTitle(bookTitle) {
//   //   return bookTitle.toUpperCase();
//   // },
//   capitalizeTitle:(bookTitle)=> {
//     console.log(Object.keys(globalThis));
    
//     return bookTitle.toUpperCase();
//   },
// };

// console.log(bookName.capitalizeTitle(bookName.title));

// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// };

// interface Person {
//   age: number;
// }

// const person: Person = {
//   age: 20,
//   name: 'Roy',
//   getDetails() {
//     return `${this.name} is in the house! ${this.age}`
//   },
// };
// console.log(Math.random()); 

//TUPLE
// const race: [string, number] = ['kyle busch', 8];

// const returnStuff = (): [string, number] =>{
// return race;
// }
// console.log(returnStuff());

//ENUM
// enum ServerResponseStatus {
//   Success,
//   Error,
//   Retrieving,
// };

// interface ServerResponse {
//   result: ServerResponseStatus,
//   data: string[]
// };

// const getServerResponse = (): ServerResponse => {
//   return {
//     result: ServerResponseStatus.Retrieving,
//     data: ['json', 'json2']
//   }
// };
// console.log(getServerResponse());


// enum UserRole {
//   Admin, Manager, Employee
// };

// type User = {
//   id: number,
//   name: string,
//   role: UserRole,
//   contact: [string, string],
//   check: () => string
// };

// const createUser = (user:User): string => {
//   return user.check();
// }

// console.log(createUser({id: 34782, name: 'margerie', role: UserRole.Admin, contact: ['email@email', '1123-456-7890'], check() {
//   return this.name
// },}));


// const genericFunction = <T>(arg:T):T => {
//   return arg;
// };
// console.log(genericFunction<string>('Yo'));


// const someFunc = async() :Promise<string> => {
//   return 'you';
// };
// console.log(someFunc());


// const createArray = <T>(num:number, str:T):Array<T> => {
//   let arr:T[] = [];

//   arr = Array(num).fill(str);

//   return arr;
// };
// console.log(createArray<string>(4, 'hello'));





