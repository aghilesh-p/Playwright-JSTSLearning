// Normal Fuction

function validStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Status is success");
    } else {
        console.log("Status is failure");
    }
}

validStatusCode(200);
validStatusCode(404);

// Fuction as Expression

const validStatusCode_Exp = function (statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Status passed");
    } else {
        console.log("status Failed");
    }
}
validStatusCode_Exp(202);
validStatusCode_Exp(505);

// Arrow Function

const validStatusCode_Arrow = (codeStatus) => {
    if (codeStatus >= 200 && codeStatus <= 300) {
        console.log("Code status is success");
    } else {
        console.log("Code status is failed");

    }
}
validStatusCode_Arrow(200);
validStatusCode_Arrow(404);

