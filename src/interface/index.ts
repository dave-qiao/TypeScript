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
interface TestFunc {
  (name: number, age: number): string;
}

let testFunc: TestFunc;
testFunc = (a: number, b: number) => {
  return a + b + '';
}

console.log(testFunc(5, 3));

// ============== 可索引类型 ==============

interface StringArray {
  [x: number]: string;
}

let testArray: StringArray;
testArray = ['a', 'b'];
const testArrayResult: string = testArray[0];
console.log(testArrayResult, '可索引类型测试数组结果');

class Name {
  name: string;
}

class Age extends Name {
  age: string;
}

interface ErrorResult {
  [x: string] : Age;
}


