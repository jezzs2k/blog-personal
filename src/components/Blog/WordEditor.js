import React, { useState } from 'react';
import CKEditor from 'ckeditor4-react';
import { Button } from 'antd';

const WordEditor = () => {
  const [state, setState] = useState({
    data: '',
  });

  const onEditorChange = (evt) => {
    debugger;
    setState({
      data: evt.editor.getData(),
    });
  };

  const handlePost = () => {
    console.log(state.data);
  };
  return (
    <div className='articles-detail'>
      <h2>You can write a new Article in here</h2>
      <CKEditor onChange={onEditorChange} />
      <Button
        type='primary'
        size={'large'}
        onClick={handlePost}
        style={{
          margin: '20px 0',
          float: 'right',
        }}>
        POST ARTICLE
      </Button>
    </div>
  );
};

export default WordEditor;
