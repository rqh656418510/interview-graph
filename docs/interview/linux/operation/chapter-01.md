---
title: 第 1 部分面试题
description: 第 1 部分面试题
---

## CentOS 6 的服务管理命令

注册在 CentOS 6 系统中的标准化程序，可以统一使用以下命令进行管理。

- 统一的管理方式（常用方法）
  - service 服务名 start
  - service 服务名 stop
  - service 服务名 restart
  - service 服务名 status
- 查看服务的方法： `/etc/init.d/服务名`
- 通过 chkconfig 命令管理服务自启动
  - 查看自启动的服务： `chkconfig --list|grep xxx`
  - 启用服务自启动： `chkconfig --level 5 服务名 on`
  - 关闭服务自启动： `chkconfig --level 5 服务名 off`

## CentOS 7 的服务管理命令

注册在 CentOS 7 系统中的标准化程序，可以统一使用以下命令进行管理。

- 统一的管理方式（常用方法）
  - systemctl start 服务名（xxx.service）
  - systemctl stop 服务名（xxx.service）
  - systemctl restart 服务名（xxx.service）
  - systemctl reload 服务名（xxx.service）
  - systemctl status 服务名（xxx.service）
- 查看服务的方法： `/usr/lib/systemd/system/服务名`
- 查看服务的命令
  - `systemctl list-unit-files | grep service_name`
  - `systemctl --type service | grep service_name`
- 通过 systemctl 命令管理服务自启动
  - 启用服务自启动： `systemctl enable service_name`
  - 关闭服务自启动： `systemctl disable service_name`
