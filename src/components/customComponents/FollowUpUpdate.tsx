import React from "react";
import DropDown from "../../components/muiComponents/DropDown";
import CommentBox from "../../components/muiComponents/CommentBox";
import StandardButton from "../../components/muiComponents/StandardButton";
import DatePicker from "../../components/muiComponents/DatePicker";
import StarRating from "../muiComponents/StarRating";

const FollowUpUpdate = () => {
  return (
    <div>
      <DatePicker />
      <DropDown
        label="Follow Up Status"
        list={[
          "Negotiating",
          "New Quotation Pending",
          "Price is Too High!",
          "Not Ordering",
          "Ordered",
        ]}
      />
      <CommentBox label="New Comments" />
      <h3>Aftersales Feedback</h3>
      <StarRating />
      <CommentBox label="Aftersales Feedback" />
      <StandardButton label="Submit" />
    </div>
  );
};

export default FollowUpUpdate;
