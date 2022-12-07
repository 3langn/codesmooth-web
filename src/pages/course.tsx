// const fetcher = (url: string) => fetch(url).then((res) => res.json());

import Editor from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useState } from 'react';
import { CodeSmoothApi } from '../api/codesmooth-api';

const Course = () => {
  // const { courseId } = useParams();
  // const { data, error } = useSWR(`/api/courses/${courseId}`, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  const [code, setCode] = useState<string | undefined>('');
  const [testCode, setTestCode] = useState<string | undefined>('');
  const [result, setResult] = useState<string | undefined>('');
  const [monacoInstance, setMonacoInstance] = useState<editor.IStandaloneCodeEditor | null>(null);
  const [monacoTestInstance, setMonacoTestInstance] = useState<editor.IStandaloneCodeEditor | null>(null);
  const options: editor.IStandaloneEditorConstructionOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    // readOnly: false,
    cursorStyle: "line",
    // automaticLayout: false,
  };

  const onCodeMount = (editor: editor.IStandaloneCodeEditor) => {
    setMonacoInstance(editor);

    // set default code
    editor.setValue(`const sumEqualSix = (a, b) => {
      // some code here
    }
  `);
  };

  const onTestCodeMount = (editor: editor.IStandaloneCodeEditor) => {
    setMonacoTestInstance(editor);
    // set default code
    editor.setValue(`const executeTest = () => { 
      if (sumEqualSix(3,3) === 6){
        return { result:'Success' } 
      } else { 
        return {result:\`Wrong answer: result is \${sumEqualSix(3,3)}\`}
      } 
    }`);
  };

  const onCodeChange = (value: string | undefined) => {
    setCode(value);
  };

  const onTestCodeChange = (value: string | undefined) => {
    setTestCode(value);
  };

  const handleRun = () => {
    console.log(code);
    CodeSmoothApi.execute({ code:monacoInstance?.getValue(), testCode:monacoTestInstance?.getValue() }).then((res) => {
      console.log(res);
      setResult(res.data.result);
    });
  };
  return (
    // <div>
    //   <h1>{data.title}</h1>
    //   <p>{data.description}</p>
    // </div>

    
    <div className="flex h-screen w-full justify-center">
      <div className="w-[50%]">
        <h1>Course</h1>
        <Editor
          height="40vh"
          defaultLanguage="javascript"
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
          defaultLanguage="javascript"
          defaultValue={monacoTestInstance?.getValue()}
          theme="vs-dark"
          onMount={onTestCodeMount}
          value={testCode}
          onChange={onTestCodeChange}
          options={options}
        />
        <button onClick={handleRun} className='p-5 bg-blue-400 text-white'>RUN</button>
        {result && <div className="w-full h-40 bg-gray-200">
          <span>{result}</span>
        </div>}
      </div>
    </div>
  );
};

export default Course;
