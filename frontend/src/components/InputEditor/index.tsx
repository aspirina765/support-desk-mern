import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Container } from './styles';

const modules = {
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ size: ['small', false, 'large', 'huge'] }, { color: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
        { align: [] },
      ],
      ['link'],
      ['clean'],
    ],
  },
  clipboard: { matchVisual: false },
};

interface InputEditorProps {
  value: any;
  setValue: (e: any) => void;
}

const InputEditor: React.FC<InputEditorProps> = ({
  value,
  setValue,
}: InputEditorProps) => {
  useEffect(() => {
    setConfig();
  }, []);

  const setConfig = () => {
    let classes = document.querySelectorAll<HTMLElement>('.quill');

    classes.forEach((element) => {
      element.style.width = '100%';
      element.style.height = '150px';
    });

    classes = document.querySelectorAll<HTMLElement>('.ql-toolbar');

    classes.forEach((element) => {
      element.style.borderTopLeftRadius = '8px';
      element.style.borderTopRightRadius = '8px';
      element.style.border = '1px solid #E3E3E3';
    });

    classes = document.querySelectorAll<HTMLElement>('.ql-container');

    classes.forEach((element) => {
      element.style.borderBottomLeftRadius = '8px';
      element.style.borderBottomRightRadius = '8px';
      element.style.border = '1px solid #E3E3E3';
    });
  };

  return (
    <Container>
      <ReactQuill modules={modules} value={value} onChange={setValue} />
    </Container>
  );
};

export default InputEditor;
