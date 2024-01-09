import React from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

interface MyMarkdownEditorProps {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

const MyMarkdownEditor: React.FC<MyMarkdownEditorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const mdParser = new MarkdownIt();

  const handleEditorChange = (data: { text: string; html: string }) => {
    onChange(data.text);
  };

  return (
    <MarkdownEditor
      className="h-[575px] mb-5"
      value={value}
      onChange={handleEditorChange}
      renderHTML={text => mdParser.render(text)}
      placeholder={placeholder}
    />
  );
};

export default MyMarkdownEditor;
