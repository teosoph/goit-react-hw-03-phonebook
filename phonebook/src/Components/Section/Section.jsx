// import PropTypes from "prop-types";

export default function Section({ title, children }) {
  return (
    <div>
      <h2 id="blink3">{title}</h2>
      {children}
    </div>
  );
}

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.element.isRequired,
// };
