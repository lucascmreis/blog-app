import {useEffect, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

//import Editor from '../../components/Editor'

import {createArticle, updateArticle, getArticle} from '../../services/api'

import './styles.scss'

export const Article = () => {
  const initialData= {
    title: 'titulo',
    slug: 'titulo-slug-3',
    createdBy: 'Lucas Reis',
    content:{
      "time": 1550476186479,
      "blocks": [
         {
            "id": "oUq2g_tl8y",
            "type": "header",
            "data": {
               "text": "Editor.js",
               "level": 2
            }
         },
         {
            "id": "zbGZFPM-iI",
            "type": "paragraph",
            "data": {
               "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
            }
         },
         {
            "id": "qYIGsjS5rt",
            "type": "header",
            "data": {
               "text": "Key features",
               "level": 3
            }
         },
         {
            "id": "XV87kJS_H1",
            "type": "list",
            "data": {
               "style": "unordered",
               "items": [
                  "It is a block-styled editor",
                  "It returns clean data output in JSON",
                  "Designed to be extendable and pluggable with a simple API"
               ]
            }
         },
         {
            "id": "AOulAjL8XM",
            "type": "header",
            "data": {
               "text": "What does it mean «block-styled editor»",
               "level": 3
            }
         },
         {
            "id": "cyZjplMOZ0",
            "type": "paragraph",
            "data": {
               "text": "Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor's Core."
            }
         }
      ],
      "version": "2.8.1"
   }
  }
  const {slug} = useParams()
  const editorInstance = useRef();

  const [editMode, setEditMode] = useState(true)
  const [article, setArticle] = useState({})
  const [content, setContent] = useState({});

  const handleSaveArticle = async() => {
    const newArticle ={
      title: 'titulo',
      slug: 'titulo-slug-5',
      createdBy: 'Lucas Reis',
      content: content
    }
    console.log('save', content)
    await createArticle(newArticle)

    setEditMode(!editMode)
  }

  const fetchArticleData = async() => {
      const {data} = await getArticle(slug)
      const articleData = Object.values(data)
      const article = articleData[0][0]
      console.log('article fetched', article)
      setContent(article?.content || {})
      setArticle(article || {})
  }

  const onChange = api => {
    (async () => {
      const content = await api.saver.save();
      setContent(content)
     // handleUpdateContent(content)
    })();
  };

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
    return editor
  };

  useEffect(()=>{
    fetchArticleData()
  }, [])

  useEffect(() => {
    if (!editorInstance.current) {
      initEditor()
    }
    return () => {
      if(editorInstance.current){
        editorInstance.current.destroy();
        editorInstance.current = null;
      }

    }
  }, [editMode, article])


  return(
    <>
      <div className="article-container">
          <div className="article-wrapper">
            <button onClick={() => setEditMode(!editMode)}>edit</button>
            {editMode && <button onClick={handleSaveArticle}>Salvar</button>}
            <input type="text" />
            <div id="editorjs" ></div>
          </div>
      </div>
    </>
  )
}
