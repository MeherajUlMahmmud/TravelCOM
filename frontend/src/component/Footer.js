import "./footer.css";
const Footer = ({ user }) => {
  return (
    <div className="footer">
      <p>{user && user.email}</p>
      <p>Footer here</p>
    </div>
  );
};

export default Footer;
