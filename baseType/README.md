# baseType

### 基础类型

- [x] Boolean
- [x] Number
- [x] String
- [x] Array
- [x] Tuple(元组)
- [x] Enum(枚举)
- [x] Any
- [x] Void
- [x] Null
- [x] Undefined
- [x] Never
- [x] Type-assert(类型断言)

#### Boolean

```
最基本的数据类型就是简单的true/false值。
在JavaScript和TypeScript里叫做boolean（其它语言中也一样）。
```
#### Number

```
和JavaScript一样，TypeScript里的所有数字都是浮点数。
这些浮点数的类型是 number。
除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量。
```

#### String

```
JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 
像其它语言里一样，我们使用 string表示文本数据类型。 
和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
```

#### Array

```
TypeScript像JavaScript一样可以操作数组元素。 
第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组。
第二种方式是使用数组泛型，Array<元素类型>。
```

#### Tuple(元组)

```
元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
```

#### Enum(枚举)

```
enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
```

#### Any

```
- 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。
  这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。
  这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量。

- 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
  你可能认为 Object有相似的作用，就像它在其它语言中那样。 
  但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
```

#### Void

```
某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void。
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
```

#### Null & Undefined

```
- TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
  和 void相似，它们的本身的类型用处不是很大

- 默认情况下null和undefined是所有类型的子类型。
  就是说你可以把 null和undefined赋值给number类型的变量。

- 然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
  这能避免   很多常见的问题。 也许在某处你想传入一个 string或null或undefined，
  你可以使用联合类型string |   null | undefined  

```

#### Never

```
- never类型表示的是那些永不存在的值的类型。 
  例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

- never类型是任何类型的子类型，也可以赋值给任何类型；
  然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
  即使 any也不可以赋值给never
```

#### Type-assert(类型断言)

```
- 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一   个实体具有比它现有类型更确切的类型。

- 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 
  类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

- 类型断言有两种形式。 其一是“尖括号”语法
  let someValue: any = "this is a string";

  let strLength: number = (<string>someValue).length;

- 另一个为as语法：
  let someValue: any = "this is a string";

  let strLength: number = (someValue as string).length;  
- 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只   有 as语法断言是被允许的
```