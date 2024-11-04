/* eslint-disable react/prop-types */
const ActionButton = ({ href = "#", children }) => {
  return (
    <a className="btn-saiba-mais" href={href}>
      {children}
    </a>
  );
};

export default ActionButton;
