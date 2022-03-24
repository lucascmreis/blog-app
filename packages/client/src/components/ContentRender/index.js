 /* eslint-disable react-hooks/exhaustive-deps */
import {createReactEditorJS} from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './tools'
import {AiFillEdit} from 'react-icons/ai'

import './styles.scss'

export const ContentRender = ({article, editMode, setEditMode }) => {
  const EditorView = createReactEditorJS()

  return (
    <>
      <div className="article-container">
          <div className="article-wrapper">
            <div className='article-actions' >
              <AiFillEdit onClick={()=> setEditMode(!editMode)} />
            </div>

            <h1 className='article-title' >{article.title}</h1>
            <EditorView
              data={article.content}
              tools={EDITOR_JS_TOOLS}
              readOnly={!editMode}
            />
          </div>
      </div>
    </>
  );
}

