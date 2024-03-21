import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5>For More Details Contact</h5>
        <img
          src="https://www.bing.com/th?id=OIP.y1Di-i7rZBc7fL6m-KcFRgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          width="50"
          height="50"
          alt="Facebook"
        />
        <img
          src="https://www.bing.com/th?id=OIP.JtmXSh_uyZBaTg1eXd-NtgHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          width="50"
          height="50"
          alt="Instagram"
        />
        <p>
          For Business query Contact{" "}
          <a href="mailto:funkart@gmail.com">funkart@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
