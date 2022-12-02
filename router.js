function route(handle, pathname){
    console.log("About to route a request for " + pathname);
    // Check if request url is a function. since we mapped the our expected request urls to a function in request handlers
    if (typeof handle[pathname]==='function'){
        handle[pathname]()
    }else{
        console.log("No request hanndler found for " + pathname);
    }
}

exports.route = route;

