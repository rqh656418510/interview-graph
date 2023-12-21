export const navbar = [
  {
    text: '算法',
    children: [
      { text: '算法面试题', link: '/docs/interview/algorithm/' }
    ]
  },
  {
    text: '设计模式',
    children: [
      { text: '设计模式面试题', link: '/docs/interview/design-patterns/' },
    ]
  },
  {
    text: 'Java ',
    children: [
      { text: '核心面试题', link: '/docs/interview/java/core/' },
      { text: 'JVM 面试题', link: '/docs/interview/java/jvm/' },
      { text: '集合类面试题', link: '/docs/interview/java/collection/' },
      { text: '多线程面试题', link: '/docs/interview/java/thread/' }
    ]
  },
  {
    text: '缓存',
    children: [
      { text: 'Redis 面试题', link: '/docs/interview/cache/redis/' }
    ]
  },
  {
    text: '数据库',
    children: [
      { text: 'MySQL 面试题', link: '/docs/interview/database/mysql/' },
      { text: 'Oracle 面试题', link: '/docs/interview/database/oracle/' }
    ]
  },
  {
    text: '搜索引擎',
    children: [
      { text: 'ElasticSearch 面试题', link: '/docs/interview/search-engine/elasticsearch/' }
    ]
  },
  {
    text: '消息队列',
    children: [
      { text: 'Kafka 面试题', link: '/docs/interview/message-queue/kafka/' },
      { text: 'RabbitMQ 面试题', link: '/docs/interview/message-queue/rabbitmq/' },
      { text: 'RocketMQ 面试题', link: '/docs/interview/message-queue/rocketmq/' }
    ]
  },
  {
    text: 'ORM',
    children: [
      { text: 'MyBatis 面试题', link: '/docs/interview/orm/mybatis/' },
      { text: 'Hibernate 面试题', link: '/docs/interview/orm/hibernate/' }
    ]
  },
  {
    text: 'RPC',
    children: [
      { text: 'Dubbo 面试题', link: '/docs/interview/rpc/dubbo/' }
    ]
  },
  {
    text: 'Spring',
    children: [
      { text: 'Spring 面试题', link: '/docs/interview/spring/spring-core/' },
      { text: 'Spring MVC 面试题', link: '/docs/interview/spring/spring-mvc/' },
      { text: 'Spring Boot 面试题', link: '/docs/interview/spring/spring-boot/' }
    ]
  },
  {
    text: '微服务',
    children: [
      {
        text: '网关',
        children: [
          { text: 'Zuul 面试题', link: '/docs/interview/micro-service/zuul/' },
          { text: 'Gateway 面试题', link: '/docs/interview/micro-service/gateway/' }
        ]
      },
      {
        text: '注册中心',
        children: [
          { text: 'Eureka 面试题', link: '/docs/interview/micro-service/eureka/' },
          { text: 'ZooKeeper 面试题', link: '/docs/interview/micro-service/zookeeper/' },
          { text: 'Nacos Discovery 面试题', link: '/docs/interview/micro-service/nacos-discovery/' }
        ]
      },
      {
        text: '配置中心',
        children: [
          { text: 'Config 面试题', link: '/docs/interview/micro-service/config/' },
          { text: 'Nacos Config 面试题', link: '/docs/interview/micro-service/nacos-config/' }
        ]
      },
      {
        text: '熔断限流',
        children: [
          { text: 'Hystrix 面试题', link: '/docs/interview/micro-service/hystrix/' },
          { text: 'Sentinel 面试题', link: '/docs/interview/micro-service/sentinel/' }
        ]
      },
      {
        text: '分布式事务',
        children: [
          { text: 'Seata 面试题', link: '/docs/interview/micro-service/seata/' }
        ]
      }
    ]
  },
  {
    text: '大数据',
    children: []
  },
  {
    text: '前端',
    children: [
      { text: 'Vue.js 面试题', link: '/docs/interview/font-end/vue/' },
      { text: 'JavaScript 面试题', link: '/docs/interview/font-end/javascript/' }
    ]
  },
  {
    text: 'GitHub',
    icon: 'GitHub',
    link: 'https://github.com/rqh656418510/interview-graph'
  }
]
