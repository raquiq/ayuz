# What is this?

Ayuz is a package that help to make faster AJAX request and compatible with most of browser, and which is easy to use with less number of code lines

# Installation

`npm i ayuz --save`

# Usage

### With GET request :

```
import Ayuz from 'ayuz';

 
Ayuz.get('http://www.example.com/api.json',(res)=>{

    /* Then.. do what you need with the response callback .. */
    //Ex:
        console.log(res.response);

    })

```

### With POST request :
 
```
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

## Other Options to POST request

post method has other options :

* *contentType*  : if you didn't put contentType .. by default *contentType* is 'application/x-www-form-urlencoded' , but you can change it with a third parameter. ``` Ayuz.post('//url..',data,'application/json',function(res) {... `  or  ` Ayuz.post('//url..',data,'application/x-www-form-urlencoded',function(res){... ```
                        

* *data = empty* : You can send request without sending any of data. ` Ayuz.post('//url..',function(res) {... `

   