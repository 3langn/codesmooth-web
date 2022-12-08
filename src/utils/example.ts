export interface TestResult {
    input: string;
    reason: string;
    expected_output: string;
    actual_output: string;
    isHide: boolean;
    success: boolean;
}
const testExample =  `interface TestResult {
    input: string;
    reason: string;
    expected_output: string;
    actual_output: string;
    isHide: boolean;
    success: boolean;
}
    
const executeTest = ():TestResult[] => { 
  const testResults = [];
  const inputs = [{a:3,b:3},{a:4,b:4}];
  const expectedOutputs = [6,8];
  const hiden = [false,false];
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const expectedOutput = expectedOutputs[i];
    const isHide = hiden[i];
    const actualOutput = sum(input.a,input.b);
    const success = actualOutput === expectedOutput;
    const reason = success ? 'Success' : 'Fail';
    testResults.push({ reason,input,expected_output:expectedOutput,actual_output:actualOutput,isHide,success });
  }
  return testResults;
}`

const codeExample = 
`const sum = (a:number, b:number):number => {
    // some code here
    return a + b;
  }
`

export { testExample,codeExample };