export  function loadOne(url, callback){
    let script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                // callback();
            }
        };
    } else { 
        script.onload = function(){
        callback(true);
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
export  function loadToBody(url, callback){
    let script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                // callback();
            }
        };
    } else { 
        script.onload = function(){
        callback(true);
        };
    }
    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}
export function loadMany(url, callback){
url.map((url,key)=>{
let script = document.createElement("script")
script.type = "text/javascript";

if (script.readyState){  //IE
    script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
            script.onreadystatechange = null;
            // callback();
        }
    };
} else { 
    script.onload = function(s){
        callback(true);
    };
   
}

script.src = url;
document.getElementsByTagName("body")[0].appendChild(script);
})
}

