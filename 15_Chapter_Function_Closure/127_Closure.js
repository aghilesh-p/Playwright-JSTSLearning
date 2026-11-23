function startBrowser() {
    let name = "Chrome";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTestcase = startBrowser();
runTestcase();
