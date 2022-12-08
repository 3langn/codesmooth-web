import axios from 'axios';

interface ExecuteRequest {
  code: string | undefined;
  testCode: string | undefined;
}

interface ExecuteResponse {
  result: string;
}

export const CodeSmoothApi = {
  execute: ({ code, testCode }: ExecuteRequest) => {
    return axios.post<ExecuteResponse>('http://192.168.1.41:3001/api/execute/javascript', {
      code,
      testCode,
    });
  },
};
