---
title: 第 2 部分面试题
description: 第 2 部分面试题
---

## 类与实例初始化

### 类初始化

类的初始化过程：

- 一个类要创建实例需要先加载并初始化该类，`main()` 方法所在的类需要先加载和初始化
- 一个子类要初始化需要先初始化父类
- 一个类初始化，本质就是执行 `<clinit>()` 方法
	- `<clinit>()` 方法由静态类变量赋值代码和静态代码块组成
	- 静态类变量赋值代码和静态代码块代码从上到下顺序执行
	- `<clinit>()` 方法只会执行一次

### 实例初始化

实例的初始化过程，本质就是执行 `<init>()` 方法：

- `<init>()` 方法可能重载有多个，有几个构造器就有几个 `<init>()` 方法
- `<init>()` 方法由非静态实例变量赋值代码和非静态代码块、构造器代码组成
- 非静态实例变量赋值代码和非静态代码块代码从上到下顺序执行，**而构造器的代码永远最后执行**
- 每次创建实例对象，调用对应构造器，执行的就是对应的 `<init>()` 方法
- `<init>` 方法的首行是 `super()` 或 `super(实参列表)`，即对应父类的 `<init>` 方法

### 重写与重载

- 两者的区别：
	- 重写（Override）也称覆盖，它是父类与子类之间多态性的一种表现，而重载（Overload）是一个类中多态性的一种表现
	- 重写（Override 它是覆盖了父类的一个方法并且对其重写，以求达到不同作用
	- 重载（Overload）它是指定义一些名称相同的方法，通过定义不同的输入参数来区分这些方法

- 重写（Override）的规则
	- 参数列表必须与被重写方法的相同
	- 非抽象子类中必须重写父类中的 abstract 方法
	- 访问修饰符的限制一定不能不小于被重写方法的访问修饰符
	- 不能重写被标识为 final、private、static 的方法（子类中不可见的方法）
	- 子类直接再写一个同名的方法，这并不是对父类方法进行重写（Override），而是重新生成一个新的方法
	- 重写的方法不能抛出新的异常，或者超过了父类范围的异常，但是可以抛出更少、更有限的异常，或者不抛出异常

- 重载（Overload）的规则：
	- 重载是针对于一个类而言的
	- 不能重载只有返回值类型不同的方法
	- 方法的异常类型和数目不会对重载造成影响
	- 不能通过访问权限、返回类型、抛出的异常进行重载
	- 与被重载的方法比较，参数的类型、个数、顺序至少有一个不相同

### 对象的多态性

- 非静态方法默认的调用对象是 `this`
- `this` 对象在构造器或者说 `<init>()` 方法中就是正在创建的对象
- 子类如果重写了父类的方法，通过子类对象调用的一定是子类重写过的代码

### 面试案例分析

> 问答互动

- 为什么在实例化子类的对象时，会先调用父类的构造器？
	- 子类继承父类后，获取到父类的属性和方法，这些属性和方法在使用前必须先初始化，所以须先调用父类的构造器进行初始化
- 在哪里调用父类的构造器？
	- 父类的构造器是不能被继承的，但可以用 `super()` 来调用
	- 在子类构造器的第一行会隐式的调用 `super()`，即调用父类的默认无参构造器
	- 如果父类中没有定义无参的构造器，则必须在子类的构造器的第一行显式地调用 `super(参数)` ，以此调用父类中的有参构造器

> 案例代码

``` java
public class Father {

	private int i = test();
	private static int j = method();

	static {
		System.out.print("(1)");
	}

	public Father() {
		System.out.print("(2)");
	}

	{
		System.out.print("(3)");
	}

	public int test() {
		System.out.print("(4)");
		return 1;
	}

	public static int method() {
		System.out.print("(5)");
		return 1;
	}

	public static void main(String[] args) {
		Father f1 = new Father();
		System.out.println();
		Father f2 = new Father();
	}

	// 运行结果：
	// (5)(1)(4)(3)(2)
	// (4)(3)(2)

	// 分析过程：
	// 1. 静态类变量赋值代码和静态代码块代码从上到下顺序执行 (5)(1)
	// 2. 非静态实例变量赋值代码和非静态代码块代码从上到下顺序执行 (4)(3)
	// 3. 构造器的代码永远最后执行 (2)
	// 4. 由于创建了两个 Father 对象，因此实例化方法 <init>() 执行了两次 (4)(3)(2)
}
```

``` java
public class Son extends Father{

	public Son() {

	}

	public static void main(String[] args){
		Son test = new Son();
	}

	// 运行结果：
	// (5)(1)(4)(3)(2)

	// 分析过程：
	// 实例化子类的对象时，默认会先通过 super() 调用父类的构造器方法，即先创建父类对象
}
```

``` java
public class Son2 extends Father {
	
	private int i = test();
	private static int j = method();

	static {
		System.out.print("(6)");
	}

	public Son() {
		System.out.print("(7)");
	}

	{
		System.out.print("(8)");
	}

	public int test() {
		System.out.print("(9)");
		return 1;
	}

	public static int method() {
		System.out.print("(10)");
		return 1;
	}

	public static void main(String[] args) {
		Son s1 = new Son();
		System.out.println();
		Son s2 = new Son();
	}

	// 运行结果：
	// (5)(1)(10)(6)(9)(3)(2)(9)(8)(7)
	// (9)(3)(2)(9)(8)(7)

	// 分析过程：
	// 1. 初始化父类和子类：
	//    1) 先初始化父类：(5)(1)
	//    2) 初始化子类：(10)(6)
	// 2. 调用子类的实例化方法 <init>()：
	//    1) 通过 super() 隐式调用父类的实例化方法，期间调用了子类中被重写的 test() 方法 (9)(3)(2)
	//    2) i= test() (9)
	//    3) 子类的非静态代码 (8)
	//    4) 子类的无参构造方法 (7)
	//    5) 由于创建了两个 Son 对象，因此实例化方法 <init>() 执行了两次 (9)(3)(2)(9)(8)(7)
}
```
