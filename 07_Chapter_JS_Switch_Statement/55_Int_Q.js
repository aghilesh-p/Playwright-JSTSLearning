let testScore = 50;

switch (true) {
    case (testScore >= 95):
        console.log("Outstanding - Top Performance");
        break;
    case (testScore >= 85):
        console.log("Excelent - Above Expetation");
        break;
    case (testScore >= 75):
        console.log("Good - Meet Expectation");
        break;
    case (testScore >= 65):
        console.log("Need Improvement");
        break;
    default:
        console.log("Unsatisfied - Need training");
}