document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("comment");
  const commentCounter = document.getElementById("counter");
  const commentList = document.getElementById("comment-list");

  const submitComment = document.getElementById("submit-comment");
  const toUppercase = document.getElementById("to-uppercase");
  const toLowercase = document.getElementById("to-lowercase");

  submitComment.addEventListener("click", () => {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<p><strong>Usuario x:</strong> <span class="green-text bold-text">${commentText}</span></p>`;
      commentList.appendChild(listItem);
      commentInput.value = "";
      commentCounter.textContent = "255";
    }
  });

  toUppercase.addEventListener("click", () => {
    const commentText = commentInput.value;
    commentInput.value = commentText.toUpperCase();
  });

  toLowercase.addEventListener("click", () => {
    const commentText = commentInput.value;
    commentInput.value = commentText.toLowerCase();
  });

  commentInput.addEventListener("input", () => {
    const commentText = commentInput.value;
    const remainingCharacters = 255 - commentText.length;
    commentCounter.textContent = remainingCharacters;
  });
});
