/* eslint-disable react/prop-types */
const Spacer = ({ height, width }) => {
  return (
    <div
      style={{
        height: height ? height : "85px",
        width: width ? width : "100%",
      }}
    />
  );
};

export default Spacer;
