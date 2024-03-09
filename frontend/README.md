# Object Properties and APIs Needed  
## Object Properties  
1. User:  
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
* ```productTag```: string  

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
1. 登录时提交用户名和密码：  
req:  
```
post('/api/login', {
  username,
  password
})
```  
登录成功的res:
```
{
  username,
  isAdmin: 一个boolean,
  favoriteVenueID: [1, 2, 3, ...]
}
```  
登录失败的res:  
密码错误
```
res.status(401).json({ message: 'Authentication failed. Please try again.' });
```
用户不存在
```
res.status(401).json({ message: 'No user credential found. Please sign up.' });
```
