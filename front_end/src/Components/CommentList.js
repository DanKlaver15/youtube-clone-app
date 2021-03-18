import React from "react";
import Comment from "./Comment";
import { connect } from "react-redux";

const CommentList = ({ activeVideo, isCommentsLoading }) => {
  return activeVideo.comments.length > 0 ? (
    <ul className="space-y-3">
      {activeVideo.comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </ul>
  ) : (
    <div>No Comments</div>
  );
};

const mapStateToProps = (state) => ({
  activeVideo: state.activeVideo,
  isCommentsLoading: state.isCommentsLoading,
});

export default connect(mapStateToProps)(CommentList);
