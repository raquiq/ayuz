function _typeof(e){
    return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){
        return typeof e}:function(e){
            return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)
        }function _classCallCheck(e,t){
            if(!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function _defineProperties(e,t){
            for(var n=0;n<t.length;n++){
                var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)
            }
        }
        function _createClass(e,t,n){
            return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e
        }
        var Ayuz=function(){
            function e(){
                if(_classCallCheck(this,e),this.xhr=null,window.XMLHttpRequest||window.ActiveXObject)if(window.ActiveXObject)
                    try{
                        this.xhr=new ActiveXObject("Msxml2.XMLHTTP")
                    }
                    catch(e){
                        this.xhr=new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    else this.xhr=new XMLHttpRequest
                }
            return _createClass(e,[{key:"get",value:function(e,t){this.xhr.open("GET",e,!0),
                this.xhr.send();
                this.xhr.onreadystatechange=function(){
                    4==this.readyState&&200==this.status&&(this.responseHeaders=this.getAllResponseHeaders(),t(this)),
                    this.responseHeaders=null
                }
            }
        },
        {key:"post",value:function(e){
            var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,
            n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,
            s=arguments.length>3?arguments[3]:void 0;
            arguments[3]||(n="application/x-www-form-urlencoded",
            s=arguments[2]),
            arguments[2]||(t=null,n="application/x-www-form-urlencoded",s=arguments[1]),
            "object"===_typeof(t)&&(n="application/json;charset=UTF-8"),"application/json"!=n&&"application/json;charset=UTF-8"!=n||(t=JSON.stringify(t)),this.xhr.open("POST",e,!0),this.xhr.setRequestHeader("Content-Type",n),this.xhr.send(t);
            this.xhr.onreadystatechange=function(){4==this.readyState&&200==this.status&&(this.responseHeaders=this.getAllResponseHeaders(),s(this)),
                this.responseHeaders=null
            }
        }}
        ]),e
    }();

    export default new Ayuz;