export const extractEmojiFromText = (str) => {
  const emojiColons = [-1, -1];
  emojiColons[0] = str.indexOf(":");
  emojiColons[1] = str.indexOf(":", emojiColons[0] + 1);
  return str.slice(emojiColons[0], emojiColons[1] + 1);
};
