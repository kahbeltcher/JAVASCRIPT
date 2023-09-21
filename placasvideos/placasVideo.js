function retornaFabricantePlaca(modelo) {
  // Lógica para determinar o fabricante com base no modelo da placa de vídeo
  let fabricante;

  if (modelo === "GTX 1080") {
    fabricante = "NVIDIA";
  } else if (modelo === "RX 5700 XT") {
    fabricante = "AMD";
  } else {
    fabricante = "Desconhecido";
  }

  return fabricante;
}

module.exports = {
  retornaFabricantePlaca: retornaFabricantePlaca,
};
