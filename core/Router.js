const fs = require('fs');

class Router {
    
    _constructor(req, res) {
        this.req = req;   
        this.res = res;
        this.obj = {
            'get': [],
            'post': []
        };
    }

    get(path, callback) {
        this.obj.get.push([path,callback]);
    }

    post(path, callback) {
        this.obj.post.push([path,callback]);
    }

    getObj() {
        return this.obj;
    }

    resolve() {
        let path = this.req.url;
        let method = this.req.method.toLowerCase();

        let callback = this.obj[method].find(p => p[0] === path) ?? false;

        if(callback) {
            callback[1](this.req, this.res, fs);
        } 
        
        else {
            this.res.write('Error!!');
            this.res.end();
        }
    }
}

module.exports = new Router;