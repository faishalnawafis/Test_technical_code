var express = require('express');
const cors = require('cors');
var app = express();

exports.resJson = function(code,body,res){
    var data = {
        'code': code,
        'body':body
    };
    res.status(code)
    res.json(data)
    res.end()
}

app.use(cors());
app.options('*', cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/generateGanjil', function (req, res) {
    var num = req.query.id;
    var odd = [];
    for(let i=0; i<=num; i++){
        if(i%2 != 0){
            odd.push(i)   
        }
    }
    var code=200;
    var body = {
        "num":req.query.id,
        "res":odd
    }
    // resJson(code,body,res);
    var data = {
        'code': code,
        'body':body
    };
    res.status(code)
    res.json(data)
    res.end()
});
app.get('/generatePrima', function (req, res) {
    var num = req.query.id;
    var odd = [];
    var totalPrimeNumber = 0;
    for (let i = 1; i <= num; i++) {
        let prime = i > 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
            prime = false;
            break;
            }
        }
        if (prime) {
            odd.push(i);
            totalPrimeNumber += 1;
        } else {
            console.log(i, "is not a prime number");
        }
    }
    var code=200;
    var body = {
        "num":req.query.id,
        "res":odd
    }
    // resJson(code,body,res);
    var data = {
        'code': code,
        'body':body
    };
    res.status(code)
    res.json(data)
    res.end()
});

app.get('/generateSegitiga', function (req, res) {
    var num = req.query.id;
    var odd = [];
    var ang = Array.from(num.toString()).map(Number);
    ang.forEach(function (item, index) {
        odd.push(item+"0".repeat(index+1));
        // odd.push(item+((index+1)*10));
    });
    var code=200;
    var body = {
        "num":req.query.id,
        "res":odd
    }
    // resJson(code,body,res);
    var data = {
        'code': code,
        'body':body
    };
    res.status(code)
    res.json(data)
    res.end()
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});