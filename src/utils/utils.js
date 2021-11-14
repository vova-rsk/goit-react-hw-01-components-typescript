const colorGenerator = () => {
  let color = '#';
  for (let i = 1; i <= 3; i += 1) {
    color += Math.floor(Math.random() * (200 - 100) + 100).toString(16);
  }
  return color;
};

export default colorGenerator;
