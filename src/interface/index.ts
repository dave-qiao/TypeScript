/**
 * Created by dave 2018/01/17
 * interface 接口
 */

// =============== interface ===============
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// 1、接口中的属性存在且需要满足要求

interface ParamValue {
  label: string;
}

function showMessage(param: ParamValue) {
  console.log('interface', param.label);
};
const interfaceObj = {
  label: '1',
};
showMessage(interfaceObj);

// =============== 可选属性 ===============
interface ParamInterface {
  width: number;
  height?: number;
}

function setLayout(param: ParamInterface) {
  console.log(param.width, param.height);
}
const layout = {
  width: 200,
}
setLayout(layout);

// =============== 只读属性 ===============
interface InitValue {
  readonly x: number;
  readonly y: number;
};
let testValue: InitValue = {
  x: 100,
  y: 200,
}
// testValue.x = 0; error testValue 中 x 为只读属性

let arrayCanWrite: number[] = [1, 2, 3, 4, 5];
let arrayReadonly: ReadonlyArray<number> = [6, 7, 8, 9];
arrayCanWrite[0] = 100;
// arrayReadonly[0] = 1000;  error 只可读取
// arrayReadonly.push(101); error 只可读

arrayCanWrite = arrayReadonly as number[]; // 可以用类型断言重写
console.log(arrayCanWrite, '类型断言重写后的数据');

// readonly vs const 
// 变量使用 const、 属性使用 readonly

// =============== 额外的属性检查 ===============
interface TestConfig {
  name?: string;
  age?: number;
}

// config 对于输入的检查  { name: string; width: number } 对于结果的检查
function testConfig(config: TestConfig): { name: string; width: number } {
  const result = {
    name: config.name,
    width: config.age,
  };
  return result;
}

// const result = testConfig({ names: 'xiaoming', age: 20 }); // error names 不在检测范围内,出错
// console.log(result, '额外的属性检查');
// 如何绕开上面类似的错误
// 1.类型断言绕开检查
const result = testConfig({ name: 'name', age: 20, width: 200 } as TestConfig); // 类型断言绕开检查

// 2.添加字符串索引签名
interface Compatible {
  name?: string;
  age?: number;
  [propName:string]: any;
}

const compatibleTest = (config: Compatible) => {
  return null;
}

const compatibleResult = compatibleTest({ name: 'abc', age: 200, width: '200px', height: 300 });

// 3.将对象赋值给另一个变量
const jumpCheckObj = { name: 'ans', age: 200 };
const jumpResult = testConfig(jumpCheckObj);

// =============== 函数类型 ===============
// 定义函数的入参以及返回值
interface TestFunc {
  (name: number, age: number): string;
}

// 测试入参以及返回值、结果详见浏览器控制台
let testFunc: TestFunc = (a: number, b: number) => {
  return a + b + '';
}
console.log(testFunc(5, 3), typeof testFunc(5, 4));

// ============== 可索引类型 ==============

interface StringArray {
  [x: string]: string;
}

let testArray: StringArray;
// 错误示例
testArray = [ 'a', 'b', 'c']; // 不能将类型“string[]”分配给类型“StringArray” 类型“string[]”中缺少索引签名。
testArray = [ 1, 2, 3]; // 不能将类型“number”分配给类型“string”
// 正确示例
testArray = {'a': 'b'}; // 不能将类型“string[]”分配给类型“StringArray” 类型“string[]”中缺少索引签名。
const testArrayResult: string = testArray[0];
console.log(testArrayResult, '可索引类型测试数组结果');

class Name {
  name: string;
}

class Age extends Name {
  age: string;
}

interface ErrorResult {
  [x: string] : Name;
  [x: number] : Age;
}

// 错误写法如下
interface ErrorResults {
  [x: number] : Name; // TypeScript支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
  [x: string] : Age;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: string; // 索引到结果不匹配对应的类型, 应为string
}


interface ClockInterface {
  currentTime: Date;
}

class Clock  implements ClockInterface {
  currentTime: Date; // 此处必须符合 ClockInterface 的接口设计, 若缺失则会报错
  constructor(name: string, age: number) {
    // do some thing
  }
}

interface ClockWithFuncInterface {
  currentTime: Date;
  setTime(time: Date);
}

class Clocks implements ClockWithFuncInterface {
  currentTime: Date;
  setTime(time: Date) {
    this.currentTime = time; // 不可丢失 setTime 方法
  }
}

interface ClockConstructor {
  new (h: number, m: number);
}

class Clock2 implements ClockConstructor {
  currentTime: Date;
  constructor() {
    this.currentTime = new Date();
  }
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface2;
}
interface ClockInterface2 {
  tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface2 {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface2 {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface2 {
  constructor(h: number, m: number) { }
  tick() {
    console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(new DigitalClock(2, 4), new AnalogClock(6, 8), 'digital', 'analog');


// ============== 继承接口 ==============

interface Shape {
  color: string;
}

interface Shapes {
  name: string;
}

interface Square extends Shape {
  length: number;
}

interface Squares extends Shape, Shapes {
  age: number;
}

let square = <Square>{};
square.color = 'blue';
square.length = 13;

let squares = <Squares>{}
squares.color = 'red';
squares.age = 15;
squares.name = 'test';