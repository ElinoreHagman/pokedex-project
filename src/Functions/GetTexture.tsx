const getTexture = (type: string) => {
  const isBlack: boolean =
    type === "Dark" || type === "Rock" || type === "Dragon" ? false : true;
  const result = { image: `Assets/Textures/${type}.png`, blackText: isBlack };

  return result;
};

export default getTexture;
