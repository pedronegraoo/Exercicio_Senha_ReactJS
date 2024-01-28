function ButtonCopy(props) {
  return (
    <button onClick={props.copySenha}>{props.textBtn}</button>

    /* TAMBÉM PODE SER FEITO DA MANEIRA ABAIXO, MAS TEM QUE TIRAR A VARIÁVEL
         SENHA DO HOOK useBtnCopy */
    // <button onClick={() => props.copySenha()}>{props.textBtn}</button>
  );
}

export default ButtonCopy;
