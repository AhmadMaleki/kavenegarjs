# kavenegarjs

New promise-based Kavenegar js client based on [axios][axios-url].

[![NPM Version][npm-image]][npm-url]
[![Downloads Stats][npm-downloads]][npm-url]

## Installation

npm:

```sh
npm install kavenegarjs
```

## Usage

You need to register [here][kavenegar-register] to get an api key.

### _ES6:_

```javascript
import kavenegarjs from 'kavenegarjs'

const kavenegarApi = kavenegarjs.init({
    apikey: /* YOUR_API_KEY */,
})
```

### _ES5 / CommonJS:_

```javascript
var kavenegarjs = require('kavenegarjs')

var kavenegarApi = kavenegarjs.init({
    apikey: /* YOUR_API_KEY */,
})
```

## Example

The official documentation with the full list of methods can be found [here][kavenegar-documentation].

* **VerifyLookup**
 
    Sending OTP for mobile authorization. [more...][kavenegar-verifylookup]

    ```javascript
    kavenegarApi
      .VerifyLookup({
        receptor: '09361234567',
        token: '852596',
        token2: 'www.example.com/register',
        template: 'registerverify',
        type: 'sms',
      })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.error(err.response.data)
      })
    
    /*
    console.log(res.data):
    {
        "return": {
            "status":200,
            "message":"تایید شد"
        },
        "entries": {
            "messageid":8792343,
            "message": "ممنون از ثبت نام شما کد تایید عضویت  : 852596",
            "status":5,
            "statustext":"ارسال به مخابرات",
            "sender":"10004346",
            "receptor":"09361234567",
            "date":1356619709,
            "cost":120
        }
    }
    
    console.error(err.response.data)
    {
        return: {
            status: 424,
            message: 'الگوی مورد نظر پیدا نشد یا هنوز تائید نشده'
        },
        entries: null
    }
    */
    ```


## Release History

* 0.1.1
    * Add Readme
* 0.1.0
    * Initial Release


## License

Distributed under the ISC license. See ``LICENSE`` for more information.


## Contributing

All contributions are welcome and appreciated.

1. Fork it (<https://github.com/AhmadMaleki/kavenegarjs/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[axios-url]: https://github.com/axios/axios
[npm-image]: https://img.shields.io/npm/v/kavenegarjs.svg
[npm-url]: https://npmjs.org/package/kavenegarjs
[npm-downloads]: https://img.shields.io/npm/dm/kavenegarjs.svg
[kavenegar-register]: http://panel.kavenegar.com/client/membership/register
[kavenegar-documentation]: http://kavenegar.com/rest.html
[kavenegar-verifylookup]: http://kavenegar.com/rest.html#sms-Lookup