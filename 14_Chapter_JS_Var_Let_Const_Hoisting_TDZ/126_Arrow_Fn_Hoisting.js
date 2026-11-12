// Arrow functions with const/let follow TDZ rules.

runTest();      // ReferenceError: Cannot access 'runTest' before initialization

const runTest = ()=> {
    console.log("Running Test...");
}

runTest();