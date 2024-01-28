import { useState } from "react";

function useSenha() {
  const [senha, setSenha] = useState();
  const [size, setSize] = useState(10);

  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let pass = "";

  function passwordRandom(size) {
    for (let i = 1; i <= size; i++) {
      //Está me dando um número randomico entre 0 a 62 (que é o tamanho do charset)
      let position = Math.floor(Math.random() * charset.length);

      /* Está encontrando com o método charAt os números aleatórios gerados da 
      variável srt (que seriam a posição de cada letra) dentro da string charset.*/
      /*E assim retornando o caracter dentro da string charset já convertido e 
      concatenando na variável PASS*/
      pass += charset.charAt(position);

      // OU ASSIM
      // pass += charset[position];
    }

    setSenha(pass);
  }

  function sizePasswordRandom(event) {
    setSize(event.target.value);
    // o código abaixo é para a outra forma de fazer a leitura do input
    // setSize(event);
  }

  return { senha, passwordRandom, size, sizePasswordRandom };
}

export default useSenha;
