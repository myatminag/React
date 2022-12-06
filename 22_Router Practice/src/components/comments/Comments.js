import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttp from '../../hooks/hooks/use-http';
import { getAllComments } from '../../lib/lib/api';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, status, data: loadedCommnets } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === 'pending') {
    comments = (
      <div className='centered'>
        <LoadingSpinner/>
      </div>
    );
  }

  if (status === 'completed' && (loadedCommnets || loadedCommnets.length > 0)) {
    comments = (
      <CommentsList comments={loadedCommnets}/>
    )
  }

  if (status === 'completed' && (!loadedCommnets || loadedCommnets.length === 0)) {
    comments = (
      <p className='centered'>No comments were added yet!</p>
    )
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {
        isAddingComment && 
        <NewCommentForm 
          quoteId={params.quoteId} 
          onAddedComment={addedCommentHandler}
        />
      }
      {comments}
    </section>
  );
};

export default Comments;