const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
//const nodemailer = require('nodemailer');

// 使用中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// 登录接口
app.post('/api/login', (req, res) => {
  const { userName, password } = req.body;

  // 这里是你的登录验证逻辑，可以根据需要进行修改
  // 假设用户名为admin，密码为password123
  if (userName === 'admin' && password === '123') {
    // 发送成功响应和验证码
    res.status(200).json({ message: 'right pwd' });
    /*
    // 发送验证码到用户对应的邮箱
    const transporter = nodemailer.createTransport({
      // 配置邮件传输服务，具体配置根据你的实际情况修改
      service: 'Gmail',
      auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password',
      },
    });

    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'user_email@example.com', // 用户对应的邮箱
      subject: 'Verification Code',
      text: 'Your verification code is 123456', // 替换为实际的验证码
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error occurred while sending email:', error);
      } else {
        console.log('Verification code sent:', info.response);
      }
    });*/
  } else {
    // 用户不存在
    res.status(401).json({ message: 'No user credential found. Please sign up.' });
  }
});

app.post('/api/login-email-verification', (req, res) => {
    const {verificationCode} = req.body
    if (verificationCode === '111') {
        res.status(200).json({
            user: {
                email: '1112222@qq.com',
                password: '123',
                userName: 'niumo',
                shoppingCartInfo: [{
                    productID: '1',
                    quantity: 1
                },
                {
                    productID: '2',
                    quantity: 2
                }],
                orderHistory: {}
            },
            userToken: 'niumochoubin'
        });
    } else {
        res.status(401).json({ message: 'wrong code' });
    }
})

app.post('/api/signup-send-email', (req, res) => {
    const{email} = req.body
    res.status(200).json({ message: `success ${email}`})
})

app.post('/api/signup', (req, res) => {
    const {verificationCode, userName, password, email } = req.body
    if (verificationCode === '111') {
        res.status(200).json({ 
            user: {
                email: '1112222@qq.com',
                password: '123',
                userName: 'niumo',
                shoppingCartInfo: [{
                    productID: '1',
                    quantity: 1
                },
                {
                    productID: '2',
                    quantity: 2
                }],
                orderHistory: {}
            },
            userToken: 'niumochoubin'
         });
    } else {
        res.status(401).json({ message: 'wrong code' });
    }
})


app.post('/api/logout', (req, res) => {
    const { shoppingCartInfo, userToken } = req.body
    if (true) {
        res.status(200).json({message: "sss"});
    } else {
        res.status(401).json({ message: 'wrong code' });
    }
})

app.post('/api/verify-user-token', (req, res) => {
    const { userToken } = req.body
    if (userToken === 'niumochoubin') {
        res.status(200).json({ message: 'success' });
    } else {
        res.status(400).json({ message: 'Expired or wrong user token' });
    }
})

app.post('/api/fetch-shopping-cart-items', (req, res) => {
    const { shoppingCartInfo, userToken } = req.body
    if (userToken === 'niumochoubin') {
        const shoppingCartItems = []
        if (shoppingCartInfo && shoppingCartInfo.length > 0) {
            shoppingCartInfo.forEach(item => {
                const id = item.productID
                const quantity = item.quantity
                shoppingCartItems.push({
                    product: {
                        productID: `${id}`,
                        productName: `name${id}`,
                        productPrice: `${id}`,
                        productDescription: `description${id}`,
                        productImage: 'imageUrl1',
                        productCategory: [],
                        productScore: 5
                    },
                    quantity: quantity
                })
            })
        }
        res.status(200).json({
            shoppingCartItems: shoppingCartItems
        });
    }
})

app.post('/api/update-shopping-cart', (req, res) => {
    const { newCartContent, userToken } = req.body
    if (userToken === 'niumochoubin') {
        res.status(200).json({
            updatedCartContent: newCartContent
        });
    }
})

app.post('/api/fetch-search-results', (req, res) => {
    const { keyword, category, page, userToken } = req.body
    if (userToken === 'niumochoubin') {
        const searchResults = []
        for (let i = 1; i <= 72; i++) {
                const id = i
                searchResults.push({
                    productID: `${id}`,
                    productName: `namemmmmmmm${id}`,
                    productPrice: `${id}`,
                    productDescription: `description${id}`,
                    productImage: 'imageUrl1',
                    productCategory: [],
                    productScore: 5
                })
        }
        res.status(200).json({
            searchResults: searchResults.slice(0+8*(page-1), 8+8*(page-1)),
            quantity: searchResults.length
        });
    }
})

app.post('/api/fetch-product-info', (req, res) => {
    const { productID } = req.body
    res.status(200).json({
        productInfo: {
            productID: `${productID}`,
            productName: `namemmmmm${productID}`,
            productPrice: `${productID}`,
            productDescription: `description${productID} description${productID} description${productID} description${productID} description${productID} description${productID} description${productID}`,
            productImage: 'imageUrl1',
            productCategory: []
        }
    });
})

// 启动服务器
app.listen(5000, () => {
  console.log('Server started on port 5000');
});