export const COLORS = ['#FF9B9B', '#FFD6A5', '#FFFEC4', '#CBFFA9', '#A9FFF2', '#B4C5FF'];

export const getRandomColor = () => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};