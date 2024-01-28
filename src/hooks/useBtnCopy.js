import { useState } from "react";

function useBtnCopy(pass) {
  const [textBtn, setTextBtn] = useState("Copiar");

  /* FUNÇÃO ABAIXO ESTA TROCANDO DE ESTADO DE COPIAR E COPIADO, VICE E VERSA
  PORÉM NÃO É NECESSÁRIO POR ISSO TIREI*/
  function changeTextBtnCopy() {
    // Pode ser feito das duas maneiras abaixo
    // setTextBtn(textBtn === "Copiar" ? "Copiado!" : "Copiar");
    setTextBtn((text) => (text === "Copiar" ? "Copiado!" : "Copiar"));

    if (textBtn === "Copiar") copySenha(pass);
  }

  function copySenha() {
    setTextBtn("Copiado!");
    navigator.clipboard.writeText(pass);
  }

  return { textBtn, setTextBtn, copySenha };
}

export default useBtnCopy;
