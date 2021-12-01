import axios from "axios";

const LandingPage = ({ currentUser }) => {
  console.log("component:", currentUser);
  return <h1>landing page</h1>;
};

LandingPage.getInitialProps = async () => {
  const response = await axios
    .get("/api/users/currentuser")
    .catch((err) => console.log("err caught", err.mesage));

  return response.data;
};

export default LandingPage;
