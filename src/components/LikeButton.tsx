import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button
        onClick={toggleLiked}
        style={{ background: liked ? "pink" : "white" }}
      >
        ❤️
      </button>
    </div>
  );
}

export default LikeButton;
