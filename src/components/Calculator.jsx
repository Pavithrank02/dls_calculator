import React from 'react'

const Calculator = () => {
  function duckworthLewisSternSecondInnings(totalOvers, firstInningsOvers, firstInningsRuns, firstInningsWickets, secondInningsOvers, secondInningsWickets) {
    // Constants for the Duckworth-Lewis-Stern formula
    const a = 0.75;
    const b = 0.2;
  
    // Calculate the resource percentage (R1) for the first innings
    const resourcePercentageFirst = firstInningsOvers / totalOvers;
  
    // Calculate the adjusted target (T1) for the first innings
    const adjustedTargetFirst = firstInningsRuns * (1 + a * (1 - resourcePercentageFirst) - b * (1 - resourcePercentageFirst) * (1 - resourcePercentageFirst));

    const resourcePercentageSecond = secondInningsOvers / totalOvers;
  
    // Calculate the adjusted target (T2) for the second innings based on wickets lost
    const wicketsFactor = Math.pow(1.5, (firstInningsWickets - 3) / 2);
    const adjustedTargetSecond = adjustedTargetFirst * (1 + a * (1 - resourcePercentageSecond) - b * (1 - resourcePercentageSecond) * (1 - resourcePercentageSecond)) * wicketsFactor;
  
    const wicketsFactor2 = Math.pow(1.5, (secondInningsWickets - 3) / 2);
    const adjustedTargetSecondWithWickets = adjustedTargetSecond * wicketsFactor2;
  
    return adjustedTargetSecondWithWickets;
  }
  
  // Example usage
  const totalOvers = 50; // Total overs originally scheduled
  const firstInningsOvers = 30; // Overs bowled in the first innings
  const firstInningsRuns = 200; // Total runs scored in the first innings
  const firstInningsWickets = 8; // Wickets lost in the first innings
  
  const secondInningsOvers = 20; // Overs bowled in the second innings
  const secondInningsWickets = 1; // Wickets lost in the second innings
  
  const adjustedTarget = duckworthLewisSternSecondInnings(totalOvers, firstInningsOvers, firstInningsRuns, firstInningsWickets, secondInningsOvers, secondInningsWickets);
  console.log("Adjusted Target for Second Innings with Wickets:", adjustedTarget);
  
  return (
    <div>Calculator</div>
  )
}

export default Calculator