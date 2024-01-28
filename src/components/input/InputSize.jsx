function InputSize(props) {
  return (
    <input
      type="number"
      defaultValue={props.size}
      min={1}
      onChange={props.sizePasswordRandom}
    />

    //  TAMBÉM PODE SER FEITO DESSA MANEIRA
    // <input
    //   type="number"
    //   id="passwordSize"
    //   min={1}
    //   value={props.size}
    //   onChange={(ev) => props.sizePasswordRandom(ev.target.value)}
    // />
  );
}

export default InputSize;
