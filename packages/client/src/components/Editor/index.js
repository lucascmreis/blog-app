 /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import './styles.scss'

const Editor = ({article, editMode, handleSaveArticle, handleUpdateContent }) => {
  const editorInstance = useRef();
  const [content, setContent] = useState(article.content);

  const onChange = api => {
    (async () => {
      const content = await api.saver.save();
      setContent(content)
      handleUpdateContent(content)
    })();
  };

  useEffect(() => {
    if (!editorInstance.current) {
      initEditor()
    }
    return () => {
      editorInstance.current.destroy();
      editorInstance.current = null;
    }

  }, []);


  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      logLevel: "ERROR",
      data: content,
      readOnly: !editMode,
      minHeight:30,
      onReady: () => {
        editorInstance.current = editor;
      },
      onChange,
      autofocus: true,
      tools: {
        header: Header,
        list: List
      },
    });
  };

  return (
    <>
      {editMode && <button onClick={handleSaveArticle}>Salvar</button>}
      <input type="text" />
      <div id="editorjs" ></div>

    </>
  );
}

export default Editor;
