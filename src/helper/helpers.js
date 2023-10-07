const generateUUID = () => {
  var d = new Date().getTime();
  var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

const variasPeticiones = (arr) => {
  const peticiones = arr.map(async ({ ability  }) => {
    const res = await fetch(ability.url);
    const data = await res.json();
    return data;
  });
  return peticiones;
};

export { generateUUID, variasPeticiones };
