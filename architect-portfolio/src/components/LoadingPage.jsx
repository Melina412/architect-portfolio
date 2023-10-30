import { LoadingContext } from "../context/Context";
import { useContext, useEffect } from "react";

const LoadingPage = () => {
  const { setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section className="loading-animation">
      <div>
        <img
          className="loading-img"
          src="/img/loading.png"
          alt="loading image"
        />
        <h1>WELCOME TO OUR SITE</h1>
      </div>
    </section>
  );
};

export default LoadingPage;
