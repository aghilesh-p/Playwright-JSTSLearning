let environment = "Staging";
let baseUrl = environment === "Production"
            ? "https://api.example.com"
            : "https://staging-api.example.com";
console.log(baseUrl);
