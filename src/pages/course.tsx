// const fetcher = (url: string) => fetch(url).then((res) => res.json());
import Editor from '@monaco-editor/react';
import { Clear, Done } from '@mui/icons-material';
import type { editor } from 'monaco-editor';
import { useState } from 'react';

import { CodeSmoothApi } from '../api/codesmooth-api';
import type { TestResult } from '../utils/example';
import { codeExample, testExample } from '../utils/example';

const Course = () => {
  // const { courseId } = useParams();
  // const { data, error } = useSWR(`/api/courses/${courseId}`, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  const [code, setCode] = useState<string | undefined>('');
  const [testCode, setTestCode] = useState<string | undefined>('');
  const [results, setResults] = useState<TestResult[]>([]);
  const [monacoInstance, setMonacoInstance] = useState<editor.IStandaloneCodeEditor | null>(null);
  const [monacoTestInstance, setMonacoTestInstance] = useState<editor.IStandaloneCodeEditor | null>(
    null,
  );
  const options: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    // readOnly: false,
    cursorStyle: 'line',
    // automaticLayout: false,
  };

  const onCodeMount = (editor: editor.IStandaloneCodeEditor) => {
    setMonacoInstance(editor);

    // set default code
    editor.setValue(codeExample);
  };

  const onTestCodeMount = (editor: editor.IStandaloneCodeEditor) => {
    setMonacoTestInstance(editor);
    // set default code
    editor.setValue(testExample);
  };

  const onCodeChange = (value: string | undefined) => {
    setCode(value);
  };

  const onTestCodeChange = (value: string | undefined) => {
    setTestCode(value);
  };

  const handleRun = () => {
    console.log(code);
    CodeSmoothApi.execute({
      code: monacoInstance?.getValue(),
      testCode: monacoTestInstance?.getValue(),
    }).then((res) => {
      console.log(res);
      setResults(res.data.data);
    });
  };
  return (
    // <div>
    //   <h1>{data.title}</h1>
    //   <p>{data.description}</p>
    // </div>

    <div className="flex justify-center">
      <div className="w-[50%]">
        <h1>Course</h1>
        <Editor
          height="40vh"
          defaultLanguage="typescript"
          defaultValue={monacoTestInstance?.getValue()}
          theme="vs-dark"
          onMount={onCodeMount}
          value={code}
          onChange={onCodeChange}
          options={options}
        />
        <span>Write test code here</span>
        <Editor
          height="40vh"
          defaultLanguage="typescript"
          defaultValue={monacoTestInstance?.getValue()}
          theme="vs-dark"
          onMount={onTestCodeMount}
          value={testCode}
          onChange={onTestCodeChange}
          options={options}
        />
        <button onClick={handleRun} className="bg-blue-400 p-5 text-white">
          RUN
        </button>
        {results.length > 0 && (
          <div className="h-40 w-full bg-gray-200">
            <div>
              <span>Results</span>
            </div>
            <div className="flex justify-center">
              <table>
                <caption>
                  {
                    <span>{`${results.filter((i) => i.success).length} Of ${
                      results.length
                    } success`}</span>
                  }
                </caption>
                <tbody>
                  <tr>
                    <td className="px-14">Result</td>
                    <td className="px-14">Input</td>
                    <td className="px-14">Expected Output</td>
                    <td className="px-14">Actual Output</td>
                    <td className="px-14">Reason</td>
                  </tr>
                  {results.map((result, index) => {
                    return (
                      <tr key={index}>
                        <td>{result.success ? <Done /> : <Clear />}</td>
                        <td>{JSON.stringify(result.input)}</td>
                        <td>{result.expected_output}</td>
                        <td>{result.actual_output}</td>
                        <td>{result.reason}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;
