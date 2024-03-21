# Object Properties and APIs Needed  
## Object Properties  
1. User:
* ```isAdmin```: boolean
* ```isActive```: boolean
* ```email```: string, unique  
* ```password```: string  
* ```userName```: string, unique  
* ```shoppingCartInfo```: array  
    - element: object  
    - ```productID```: string
    - ```quantity```: number  
* ```orderHistory```: object  
    - ```orderList```: array  
        + element: string - each element is an order ID  
    - ```totalOrderTag```: this is to show the total number of tags in the user's order history, only used by back-end recommendation algorithm and will not be returned to the front-end
        

2. Product:  
* ```productID```: string, unique  
* ```productName```: string  
* ```productPrice```: number  
* ```productDescription```: string  
* ```productImage```: string  
* ```productTag```: array, a list of string tags  

3. Order:  
* ```orderID```: string, unique
* ```orderTime```: string  
* ```orderStatus```: string, including 'paid', 'shipping', 'arrived', and 'finished'  
* ```orderStatusDescription```: string  
* ```orderTotalPrice```: number  
* ```orderProductList```: array  
    - element: object
    - ```productID```: string  
    - ```quantity```: number  
    - ```productName```: string  
    - ```productPrice```: number  
    - ```productImage```: string     

## APIs
## 注意：所有的userName里Name的N都是大写！！！！！
### 登录与注册
登录功能的流程：用户提交userName和password -> 后端验证用户名和密码，若信息正确则发送验证邮件 -> 用户提交验证码 -> 后端返回user和userToken。
注册功能的流程：用户提交email -> 后端发送验证邮件 -> 用户提交验证码、userName、password -> 后端在数据库中创建用户并返回user和userToken。  
1. 登录时提交用户名和密码：  
req:  
```
post('/api/login', {
  userName,
  password
})
```

用户名、密码验证成功的res:
```
res.status(200)
```
并且向用户名对应的邮箱发送验证码  

验证失败的res:  
密码错误：
```
res.status(401).json({ message: 'Authentication failed. Please try again.' });
```
用户不存在：
```
res.status(401).json({ message: 'No user credential found. Please sign up.' });
```  

2. 登录时提交验证码：  
req:
```
post('/api/login-email-verification', {
  verificationCode
})
```

验证码正确的res:  
```
{
  user,
  userToken
}
```
并在服务器端将对应user的isActive属性设置为true  

验证码错误的res:  
```
res.status(401).json({ message: 'Wrong verification code. Please check the latest email.' });
```  

3. 注册时提交email：
req:
```
post('/api/signup-send-email', {
  email
})
```  

发送验证码成功的res:  
```
res.status(200)
```

发送验证码失败（如果真的是服务器出什么问题导致发送失败了）的res:  
```
res.status(500).json({ message: 'Failed to send email. Please ensure your email address is correct.' });
```

4. 注册时提交验证码、userName、password：  
req:
```
post('/api/signup', {
  userName,
  password,
  verificationCode
})
```

而后服务器端创建新用户  
验证码正确、创建用户成功的res:  
```
{
  user,
  userToken
}
```  

验证码错误的res:  
```
res.status(401).json({ message: 'Wrong verification code. Please check the latest email.' });
```  

创建用户失败（如果真的是服务器出什么问题导致创建失败了）的res:  
```
res.status(500).json({ message: 'Failed to create user. Please try later.' });
```

5. 登出：  
req:
```
post('/api/logout', {
  userToken
})
```

登出成功的res:
```
res.status(200)
```
并在服务器端将对应user的isActive属性设置为false  

登出失败（如果真的是服务器出什么问题导致登出失败了）的res:  
```
res.status(500).json({ message: 'Failed to log out. Please submit a valid user token or try later.' });
```

### 用户操作
对于下文涉及的所有需要提交userToken的函数，以及上文的logout函数，请遵循以下原则：  
* 如果userToken信息正确且未过期，正常执行对应部分的功能
* 如果userToken信息不正确或已过期，则直接返回一个```res.status(400).json({ message: 'Expired or wrong user token' })```，若过期则在服务器端将对应user的isActive属性设置为false
* 下文中不再单独列出userToken信息不正确或已过期的返回值

1. 进入一个页面时验证userToken：  
req:  
```
post('/api/verify-user-token', {
  userToken
})
```

验证成功的res:
```
res.status(200)
```

验证失败的res见上  

2. 获取购物车中商品的详细信息  
由于user.shoppingCartInfo中储存的商品信息仅包括商品id和数量，所以在访问购物车页面时，需要通过商品id获取商品详细信息：  
req:  
```
post('/api/fetch-shopping-cart-items', {
    shoppingCartInfo,
    userToken
})
```

res:
```
{
  shoppingCartItems: array
}
```
其中，```shoppingCartItems```是一个array，这个array中的每一个元素都和req中shoppingCartInfo的元素一一对应，对应形式为：  
req中shoppingCartInfo的一个元素：
```
{
    productID,
    quantity
}
```
对应  
res中shoppingCartItem的一个元素：  
```
{
    product: {
        productID,
        productName: 这个productID所对应商品的productName，下面的price、description、image、tag依此类推,
        productPrice,
        productDescription,
        productImage,
        productTag
    },
    quantity: quantity
}
```

3. 添加/修改/删除购物车商品：  
req:
```
post('/api/update-shopping-cart', {
  newCartContent: 一个array，形式等同于user.shoppingCartInfo,
  userToken
})
```

收到请求后，在服务器端找到该userToken对应的user，然后将该user的shoppingCartInfo更新为newCartContent
购物车信息更新成功的res:
```
{
  updatedCartContent: 一个array，内容和req中的newCartContent相同
}
```

购物车更新失败（如果真的是服务器出什么问题导致购物车更新失败了）的res:  
```
res.status(500).json({ message: 'Failed to update your shopping cart. Please submit a valid user token or try later.' });
```