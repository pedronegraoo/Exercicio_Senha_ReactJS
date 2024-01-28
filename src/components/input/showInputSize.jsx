function CustomInputSize(props) {
  return (
    <input
      type="checkbox"
      id="showInputSize"
      value={props.showInputSize}
      onChange={() => props.setShowInputSize((event) => !props.showInputSize)}
    />
  );
}

export default CustomInputSize;
