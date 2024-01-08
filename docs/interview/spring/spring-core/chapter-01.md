---
title: 第 1 部分
description: 第 1 部分
---

### Spring Bean 的五个作用域

| 类别          | 说明                                                                                                                                                       |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| singleton     | Spring IOC 容器一开始就会实例化该 Bean，且在整个 Spring IOC 容器中，使用 singleton 定义的 Bean 将只有一个实例                                              |
| prototype     | Spring IOC 容器一开始不会实例化该 Bean，而是每次通过容器的 getBean() 方法获取 prototype 定义的 Bean 时，都将产生一个新的 Bean 实例                         |
| request       | 对于每次 HTTP 请求，使用 request 定义的 Bean 都将产生一个新实例，即每次 HTTP 请求将会产生不同的 Bean 实例，只有在 Web 应用中使用 Spring 时，该作用域才有效 |
| session       | 同一个 Http Session 共享同一个 Bean ，不同的 Http Session 使用不同的 Bean，同样只有在 Web 应用中使用 Spring 时，该作用域才有效                             |
| globalsession | 同一个全局 Session 共享同一个 Bean，一般用于 Portlet 应用环境，同样只有在 Web 应用中使用 Spring 时，该作用域才有效                                         |

其中比较常用的是 singleton 和 prototype 两种作用域。对于 singleton 作用域的 Bean，每次请求该 Bean 都将获得相同的实例，容器负责跟踪 Bean 实例的状态，负责维护 Bean 实例的生命周期；如果一个 Bean 被设置成 prototype 作用域，程序每次请求该 ID 的 Bean 时，Spring 都会新建一个 Bean 实例，然后返回给程序。在这种情况下，Spring 容器仅仅使用 new 关键字创建 Bean 实例，一旦创建成功，容器不再跟踪 Bean 实例，也不会维护 Bean 实例的状态。如果不指定 Bean 的作用域，Spring 默认使用 singleton 作用域。Java 在创建实例时，需要进行内存申请；在销毁实例时，需要完成垃圾回收，这些工作都会导致系统开销的增加。因此，prototype 作用域下 Bean 的创建、销毁代价比较大；而 singleton 作用域的 Bean 实例一旦创建成功，可以重复使用。因此，除非必要，应尽量避免将 Bean 被设置成 prototype 作用域。

### Spring 的七种事务传播行为

当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能在现有的事务中运行，也可能开启一个新的事务，并在自己的事务中运行。Spring 定义了七种事务传播行为，默认的事务传播行为是 `PROPAGATION_REQUIRED`。

| 传播行为                  | 说明                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------- |
| PROPAGATION_REQUIRED      | 如果存在一个事务，则支持当前事务；如果没有事务则开启                                                 |
| PROPAGATION_SUPPORTS      | 如果存在一个事务，支持当前事务；如果没有事务，则非事务的执行                                         |
| PROPAGATION_MANDATORY     | 如果已经存在一个事务，支持当前事务；如果没有一个活动的事务，则抛出异常                               |
| PROPAGATION_REQUIRES_NEW  | 总是开启一个新的事务；如果一个事务已经存在，则将这个存在的事务挂起                                   |
| PROPAGATION_NOT_SUPPORTED | 总是非事务地执行，并挂起任何存在的事务                                                               |
| PROPAGATION_NEVER         | 总是非事务地执行，如果存在一个活动事务，则抛出异常                                                   |
| PROPAGATION_NESTED        | 如果有一个活动的事务存在，则运行在一个嵌套的事务中；如果没有活动事务，则按 PROPAGATION_REQUIRED 执行 |
