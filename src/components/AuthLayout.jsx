import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Protected({ children, authentication }) {
  const dispatch = useDispatch();
  const [loader,setLoader]=useState(true);
  const navigate = useNavigate();
  const User = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && User !== authentication) {
      navigate("/login");
    } else if (!authentication && User !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [User, authentication, navigate]);
  return <div>AuthLayout</div>;
}

export default Protected;


//Will Be Used Once Router has Been Setup