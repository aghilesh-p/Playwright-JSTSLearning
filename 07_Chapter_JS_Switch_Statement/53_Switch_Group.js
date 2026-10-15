let browser = "Safari";

switch (browser) {
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project");
        break;
    case "Firefox":
        console.log("Mozilla Project");
        break;
    case "Safari":
        console.log("Apple Project");
        break;
    default:
        console.log("Unknown browser");
}