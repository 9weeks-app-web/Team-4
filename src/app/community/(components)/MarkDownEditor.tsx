import React from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownIt from 'markdown-it';

interface MyMarkdownEditorProps {
  value: string;
  onChange: (text: string) => void;
}

const MyMarkdownEditor: React.FC<MyMarkdownEditorProps> = ({
  value,
  onChange,
}) => {
  const mdParser = new MarkdownIt();

  const handleEditorChange = (data: { text: string; html: string }) => {
    onChange(data.text);
  };

  return (
    <MarkdownEditor
      className="h-[575px] mb-5 rounded-xl"
      value={value}
      onChange={handleEditorChange}
      renderHTML={text => mdParser.render(text)}
    />
  );
};

export default MyMarkdownEditor;
