---
title: 设计模式面试题
description: 设计模式面试题
---

## 设计模式

### 单例模式

> 知识点

- 单例的特点
	- 一是某个类只能有一个实例，即构造器私有化
	- 二是必须自行创建这个实例，即含有一个该类的静态变量来保存唯一的实例
	- 三是必须自行向整个系统提供这个实例，对外提供获取实例对象的方式一般是：直接通过静态变量暴露或者使用静态 Get 方法来获取

- 单例模式常见的几种形式
	- 饿汉式（在类初始化时，直接创建对象，不存在线程安全的问题）
		- 直接实例化饿汉式（简洁直观）
		- 枚举式（最简洁）
		- 静态代码块饿汉式（适合复杂的实例化）

	- 懒汉式（延迟创建对象，可能存在线程安全的问题）
		- 线程不安全（适用于单线程）
		- 线程安全（适用于多线程）
		- 静态内部类形式（适用于多线程）

> 饿汉式案例代码

``` java
/**
 * 饿汉式 - 直接实例化饿汉式（简洁直观）
 */
public class HungrySingleton {

	public static final HungrySingleton INSTANCE = new HungrySingleton();

	private HungrySingleton() {

	}
}
```

``` java
/**
 * 饿汉式 - 枚举式（最简洁）
 */
public enum HungrySingleton {
	INSTANCE
}
```

``` java
/**
 * 饿汉式 - 静态代码块饿汉式（适合复杂的实例化）
 */
public class HungrySingleton {

	public static final HungrySingleton INSTANCE;

	static {
            // do anything
            INSTANCE = new HungrySingleton();
	}

	private HungrySingleton() {

	}
}
```

> 懒汉式案例代码

``` java
/**
 * 懒汉式 - 线程不安全（适用于单线程）
 */
public class LazySingleton01 {

	private static LazySingleton01 instance;

	private LazySingleton01() {

	}

	public static LazySingleton01 getInstance() {
		if (instance == null) {
			instance = new LazySingleton01();
		}
		return instance;
	}
}
```


``` java
/**
 * 懒汉式 - DCL（双端检锁），适用于多线程
 * 1) DCL（双端检锁）机制不一定是线程安全的，原因是有指令重排序的存在，加入 volatile 可以禁止指令重排
 * 2) 原因在多线程环境下，某一个线程执行到第一个检测，读取到的 instance 不为 null 时，instance 的引用对象可能没有完成初始化
 * 3) 指令重排只会保证串行语义的执行一致性（单线程），但并不会关心多线程间的语义一致性。所以当一条线程访问 instance 不为 null 时，由于 instance 实例未必已初始化完成，也就造成了线程安全问题
 */
public class LazySingleton02 {

	private static volatile LazySingleton02 instance;

	private LazySingleton02() {

	}

	public static LazySingleton02 getInstance() {
		if (instance == null) {
			synchronized (LazySingleton02.class) {
				if (instance == null) {
					instance = new LazySingleton02();
				}
			}
		}
		return instance;
	}
}
```

``` java
/**
 * 懒汉式 - 静态内部类形式（适用于多线程）
 * 1）静态内部类不会自动随着外部类的加载和初始化而初始化，它是单独去加载和初始化的
 * 2）因为是在静态内部类加载和初始化时，才创建单例对象，因此是线程安全的
 */
public class LazySingleton03 {

	private LazySingleton03() {

	}

	public static LazySingleton03 getInstance() {
		return Singleton.instance;
	}

	private static class Singleton {
		private static final LazySingleton03 instance = new LazySingleton03();
	}
}
```
