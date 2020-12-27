# What is this?

Ayuz is a package that help to make faster AJAX request and compatible with most of browser, and which is easy to use with less number of code lines

# Installation

`npm i ayuz --save`

# Usage

### With GET request :

```js
import Ayuz from 'ayuz';

 
Ayuz.get('http://www.example.com/api.json',(res)=>{

    /* Then.. do what you need with the response callback .. */
    //Ex:
        console.log(res.response);

    })

```

### With POST request :
 
```js 
import Ayuz from 'ayuz';


let data = {
	username : 'Joe',
	message : 'Test Ayuz package !'
};

Ayuz.post('http://www.example.com/post.php',data,function(res){

	/* Then.. do what you need with the response callback .. */
	//Ex:
        console.log(res.response);

	})

```

## Other Options to the request

post method has other options :

* *Headers*  : Send headers with the request like : 
```js 
let headers = {key1:value1, key2:value2...};
Ayuz.post('//url..',data,headers,function(res) {...  
``` 
if you didn't put *Content-Type* with Headers .. by default *contentType* is 'application/x-www-form-urlencoded' , but if *data* is an object then by default *contentType* is 'application/json' .
                        

* *data = empty* : You can send request without sending any of data. ` Ayuz.post('//url..',function(res) {... `


## Promises :
After @version:1.0.3, Ayuz package supports Promises that allow for using async/await and handle asynchronous operations.
Ex :
```js 
Ayuz.post('//url..',data)
.then(res=>{
	// console.log(res.response);
})
.catch(err=>{
	// console.log(err.message)
	})    
```


## Other methods :
Ayuz package supports other methods of HTTP protocol to transfer data from or on the server like:
* **PUT** : `Ayuz.put('//url.../id',data).then(res{...`

* **DELETE** : `Ayuz.delete('//url.../id').then(res{...`
