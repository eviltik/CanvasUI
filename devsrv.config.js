const config = {
    clientRedirects:[
        {
            urlSrc:"/",
            redirectTo:"/examples/index.html"
        }
    ],
    textReplacements: [
        {
            queryVar:"r",
            queryVarRegexp:"^0\\.[0-9]{3}$",
            replaceRegexp:"THREEJSVERSION",
            defaultValue:"0.119",
            pathRegexp:"(\\.(html|js))|(\\/)$"
        }
    ],
    buildOptions:{
        src:"./examples",
        dst:"./dist/v1.0.0/threejs.119",
        replaceRegexp:"THREEJSVERSION",
        defaultValue:"0.119",
        fileRegexp:"\\.(html|js)$"
    }, 
    monitorOptions:{
        enable:true,
        directories:[ './' ],
        fileRegexp:/\.(html|jsm?)$/,
        excludeRegexp: /node_modules/
    }
}

module.exports = config;