import React from "react";
import { connect } from "react-redux";
import AddCommentInput from "./AddCommentInput";
import CommentList from "./CommentList";

const Comments = ({ activeVideo }) => {
  return activeVideo ? (
    <div>
      <h2>Comments</h2>
      <div className="mb-2">
        <AddCommentInput />
      </div>
      <CommentList />
    </div>
  ) : null;
};

const mapStateToProps = (state) => ({
  activeVideo: state.activeVideo,
});

export default connect(mapStateToProps)(Comments);
