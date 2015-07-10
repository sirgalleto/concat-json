Object.prototype.concat = function(){
    var arg = arguments;
    for(var i in arg){
        for(var key in arg[i]){
            this[key] = arg[i][key];
        }
    }
    return this;
};
