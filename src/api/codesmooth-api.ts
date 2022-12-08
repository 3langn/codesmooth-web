import axios from "axios";
import { TestResult } from "../utils/example";

interface ExecuteRequest {
  code: string | undefined;
  testCode: string| undefined;
}

interface ExecuteResponse {
  data: TestResult[];
}

export const CodeSmoothApi = {
  execute: ({code,testCode}:ExecuteRequest) => {
    return axios.post<ExecuteResponse>("http://localhost:3001/api/execute/javascript", {
      code,
      testCode,
    });
  },
};
