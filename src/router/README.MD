# vue-router 2.0 使用方法
#### 编程式的导航
*  router.push(location)
> 向history栈添加一个新的记录
    1. 字符串
    ```
    this.$router.push('menu')
    ```
    2. 对象
    ```
    this.$router.push({ path: 'home' })
    ```
    3. 命名的路由
    ```
    this.$router.push({ name: 'user', params: { userId: 123 }})
    ```
    4. 带查询参数，变成 /register?plan=private
    ```
    this.$router.push({ path: 'register', query: { plan: 'private' }})
    ```

*  router.replace(location)
> 不会向history栈添加一个新的记录

* router.go(n)
> 这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)。
    1. 在浏览器记录中前进一步，等同于 history.forward()
    ```
    router.go(1)
    ```
    2. 后退一步记录，等同于 history.back()
    ```
    router.go(-1)
    ```
