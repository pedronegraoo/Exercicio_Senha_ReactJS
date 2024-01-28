function ButtonGenerate(props) {
  return (
    <button
      onClick={() => {
        props.passwordRandom(props.size);
        props.setTextBtn("Copiar");
      }}
    >
      Gerar ({props.size})
    </button>
  );
}

export default ButtonGenerate;
