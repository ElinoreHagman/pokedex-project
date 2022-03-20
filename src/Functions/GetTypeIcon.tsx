const getTypeIcon = (type: string) => {
  const typeFormatted = type.charAt(0).toUpperCase() + type.slice(1);
  return `Assets/Icons/${typeFormatted}.svg`;
};

export default getTypeIcon;
