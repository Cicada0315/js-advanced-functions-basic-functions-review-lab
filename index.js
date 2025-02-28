// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(s="*"){
    return function(str="special"){
        return `You are ${s}${str}${s}!`;
    }
}

let Calculator={
    add: function(a,b){
        return a+b;
    },
    subtract: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
};

function actionApplyer(startint, arrfunc){
    let newvalue=startint;
    for(let i=0; i<arrfunc.length; i++){
        newvalue= arrfunc[i](newvalue);
    }
    return newvalue;
}
