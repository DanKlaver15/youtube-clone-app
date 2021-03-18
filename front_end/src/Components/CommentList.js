import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";
import { updateCommentRequest } from "../comments/thunks";

const CommentList = ({ comments, isCommentsLoading, onUpdateComment }) => {
  return comments.length > 0 ? (
    <ul className="space-y-3">
      {comments.map((comment) => {
        return (
          <Comment
            key={comment._id}
            comment={comment}
            onUpdateComment={onUpdateComment}
          />
        );
      })}
    </ul>
  ) : (
    <div>No Comments</div>
  );
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  isCommentsLoading: state.commentsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onUpdateComment: (comment) => dispatch(updateCommentRequest(comment)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
