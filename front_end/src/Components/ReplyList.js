import React from "react";
import Reply from "./Reply";

const ReplyList = ({ replies, active = true }) => {
  return active ? (
    <ul className="space-y-3">
      {replies.map((reply) => {
        return <Reply key={reply._id} reply={reply} />;
      })}
    </ul>
  ) : (
    <div>No Replies</div>
  );
};

export default ReplyList;
