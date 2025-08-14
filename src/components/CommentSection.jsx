function CommentSection({ comment, onCommentChange }) {

    const handleChange = (e) => {
        const value = e.target.value;
        if (onCommentChange) {
            onCommentChange(value);
        }
    };

  return (
    <>
      <div className="flex flex-col mt-5">
        <label htmlFor="comment" className="font-semibold">Comments (Optional)</label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleChange}
          placeholder="add comments here..."
            className="w-[400px] h-[150px] bg-[#898989] rounded-sm pt-2 px-3 mt-2 placeholder:text-[#bdbdbd] placeholder:text-sm focus:border focus:border-[#bdbdbd]"
        />
      </div>
    </>
  );
}

export default CommentSection;
