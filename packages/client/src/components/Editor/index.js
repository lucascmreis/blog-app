 /* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

import './styles.scss'

const Editor = ({article, editMode, handleSaveArticle, isNewArticle }) => {
  const editorInstance = useRef();

  console.log('article', article)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState({});

  const onChange = api => {
    (async () => {
      const content = await api.saver.save();
      setContent(content)
    })();
  };

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      logLevel: "ERROR",
      data: isNewArticle ? {} : article.content,
      readOnly: isNewArticle ? false : !editMode,
      minHeight:30,
      placeholder: editMode &&'Escreva aqui...',
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


  useEffect(() => {
    if (!editorInstance.current) {
      initEditor()
    }
    setTitle(article.title)
    setContent(article.content)
    return () => {
      if(editorInstance.current){
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    }
  }, [editMode, article])
  return (
    <>
      <div className="article-container">
          <div className="article-wrapper">
            <div className='article-actions' >
              {editMode && <button onClick={()=>handleSaveArticle(content, title)}>Salvar</button>}
            </div>
            <textarea
              className='article-title'
              placeholder='Título'
              required
              readOnly={!editMode}
              value={title}
              maxLength={55}
              onChange={(e) => setTitle(e.target.value)} />
            <div id="editorjs"></div>
          </div>
      </div>

    </>
  );
}

export default Editor;
