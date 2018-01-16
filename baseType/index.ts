/**
 * Created by dave 2018/01/16
 * 基础类型
 * TypeScript 支持与 javaScript 几乎相同的数据类型, 此外还提供了枚举类型方便我们使用 
 */

// =============== Boolean 布尔值 ===============
const isTrue: boolean = true;
console.log('baseType-boolean-isTrue', isTrue);

// =============== Number 数字 ===============
// 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。

// 十进制
const size: number = 5;
// 十六进制
const hexSize: number = 0xf00d;
// 二进制
const binarySize: number = 0b1010;
// 八进制
const octalSize: number = 0o144;
console.log('baseType-number-size', size, hexSize, binarySize, octalSize);

// =============== 字符串 ===============
const str: string = 'xiaoming';
const template: string = `模板字符串${str}`;
console.log('baseType-string-str', str);

// =============== 数组 ===============
// 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
const list: string[] = ['1', '2', '3'];
const listNumber: number[] = [1, 2, 3];
const listBoolean: boolean[] = [true, false];
console.log('baseType-type[]-list', list, listNumber, listBoolean);

// 第二种方式是使用数组泛型，Array<元素类型>
const listArray: Array<number> = [1, 2, 3];
console.log('baseType-Array<type>-list', listArray);

// =============== 元组 Tuple ===============
let data: [string, number]; // PS  需要 let 声明 
data = ['a', 3];
data = [1, 'a']; // Error 元素与制定的类型不符
console.log('baseType-Tuple-data', data);

// =============== 枚举 enum ===============
enum Size { SMALL = 10, MIDDLE = 20, LARGE = 30 };
const fontSize: Size = Size.SMALL;
const readSize: string = Size[20];
console.log('baseType-enum-fontSize', fontSize, 'baseType-enum-readSize', readSize);

// =============== Any ===============
let test: any = 'abc';
console.log('baseType-any-test', test);
test = 8;
console.log('baseType-any-test', test);
test = false;
console.log('baseType-any-test', test);
test = { a: 8 };
console.log('baseType-any-test', test);
test = [1, 2];
console.log('baseType-any-test', test);
test = null;
console.log('baseType-any-test', test);
test = undefined;
console.log('baseType-any-test', test);

// =============== Object ===============
let obj: Object = { a: 1, b: 2 }; // PS: 此类型只可以赋值 不可以使用 原形上的方法 建议使用 any 声明
obj.a = 2; // Error
let dataSource: any[] = ['1', 2, 5, true];
console.log('baseType-object-test', obj, 'baseType-any-dataSource');

// =============== Void ===============
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void
function handleTest(): void {
  // alert("This is my warning message");
};
handleTest();
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unAble: void = null;
console.log('baseType-void-unAble', unAble);

// =============== Null & Undefined ===============
const setNull: null = null;
const setUndefined: undefined = undefined;
console.log('baseType-Null-setNull', setNull, setUndefined);

// =============== Never ===============
// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// =============== 类型断言 ===============
let typeStr: string = 'this is string';
let strLength: number = (<string>typeStr).length;
let strAs: number = (typeStr as string).length;
console.log('baseType-类型断言-strLength', strLength, strAs);
