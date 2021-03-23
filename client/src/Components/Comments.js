import React from "react";
import { connect } from "react-redux";
import AddCommentInput from "./AddCommentInput";
import CommentList from "./CommentList";

const Comments = ({ activeVideo }) => {
  return activeVideo ? (
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Comments</h3>
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
