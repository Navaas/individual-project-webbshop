import { useEffect, useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(() => {
    const saveToLocalStorage = localStorage.getItem("liked");
    return saveToLocalStorage ? JSON.parse(saveToLocalStorage) : false;
  });

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(liked));
  }, [liked]);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button
        onClick={toggleLiked}
        style={{ background: liked ? "pink" : "white" }}
      >
        {/* ? Om knappen är likad är den rosa : Om den inte är likad är den vit */}
        ❤️
      </button>
    </div>
  );
}

export default LikeButton;
