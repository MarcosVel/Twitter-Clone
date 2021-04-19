import './CommentModal.css';
import SimpleModal from '../../utils/Modal/SimpleModal';
import { useState } from 'react';
import { FaRegComment } from 'react-icons/fa';

function CommentModal() {
  const [ open, setOpen ] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  }

  const handleCloseModal = () => {
    setOpen(false);
  }

  function manipularCommentModal() {
    return (
      <SimpleModal
        open={ open }
        close={ () => handleCloseModal() }
        body={
          <h2>Teste modal</h2>
        }
      >

      </SimpleModal>
    );
  }

  return (
    <div>
      <button
        type='button'
        title='Comentar'
        className='tweetBox_btnGif'
        aria-label='Adicionar um GIF'
        onClick={ handleOpenModal }
      >
        <FaRegComment size='18' className='commentActions' />
      </button>
      { manipularCommentModal() }
    </div>
  )
}

export default CommentModal;