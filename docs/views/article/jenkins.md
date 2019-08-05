### :tada: Jenkins：前端自动化工作流 

## :100:Jenkins 是什么?
Jenkins是一款开源 CI&CD 软件，用于自动化各种任务，包括构建、测试和部署软件。

## 背景
公司的前端构建及部署工作都是人工去做，随着业务扩大，项目迭代速度变快，人员增多，各种问题都暴露出来，旨在通过简单案例分享一下基于Jenkins的前端自动化工作流搭建的过程，搭建完这套工作流，让持续集成、持续交付、持续部署变得简单易操作，真正解决人工构建部署的诸多问题。

## 实现功能
本地项目发起一个git提交，剩下的单元测试，打包构建，代码部署，邮件提醒等全部自动化完成。

## Jenkins的安装与启动

### 1 window系统安装

#### 1.1 基础环境配置

要求必须有 java 运行环境，建议安装 Oracle 官方的，各系统[下载地址](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

查看安装是否成功： java -version

#### 1.2 下载[Jenkins](https://jenkins.io/zh/download/)并安装

war文件下载地址：http://mirrors.jenkins-ci.org/war/latest/jenkins.war

找到该文件所在的电脑盘并运行 `java -jar jenkins.war` 即可

等待安装运行，出现如下表示运行成功：

![](https://user-gold-cdn.xitu.io/2019/7/31/16c4725397b64906?w=960&h=567&f=png&s=67171)

#### 1.3 Jenkins初始化
- Jenkins的默认端口是8080，启动成功后在浏览器打开。
- 输入管理员密码，打开网页上提示路径下的文件，复制密码粘贴输入即可。
- 安装需要的插件，此处选默认即可，等待安装完成。
- 创建管理员账户。

执行上面会出现如下所示：

![An image](https://user-gold-cdn.xitu.io/2018/4/14/162c486771d8309c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 创建 jenkins 工程

1. 点击创建一个新任务

2. 任务名称和自由风格创建

![An image](https://user-gold-cdn.xitu.io/2019/7/31/16c4739241cfb624?w=1446&h=696&f=png&s=64811)

至此基本配置已经完成，接下来就是配置自动化构建功能。

## 配置 git 的构建功能

找到需要构建的项目（github/码云）分支，进行工程的配置

### 1. 配置git地址和分支，登录名及密码
![An image](https://user-gold-cdn.xitu.io/2019/7/31/16c4748170b8b505?w=1456&h=575&f=png&s=35870)

### 2. 安装Generic Webhook Trigger Plugin插件
系统管理-manage plugins-可选插件-搜索Generic Webhook Trigger并安装

### 3. 添加触发器
选择刚刚安装的Generic Webhook Trigger

![An image](https://user-gold-cdn.xitu.io/2018/4/14/162c4c36ea15b935?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 4. 仓库配置钩子
我这里配置的是码云的git仓库，就以码云为例咯

![An image](https://user-gold-cdn.xitu.io/2019/7/31/16c475c1ca25dace?w=1106&h=649&f=png&s=39598)

URL格式为 `http://<User ID>:<API Token>@<Jenkins IP地址>:端口/generic-webhook-trigger/invoke`

> userid和api token在jenkins的系统管理-管理用户-admin-设置里

::: tip
示例：http://admin:118964f27c7e606ba5a820a1930d0721c7@http://192.168.5.64:8080/generic-webhook-trigger/invoke
:::
## 自动化构建（未完待续）
