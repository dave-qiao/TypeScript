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


