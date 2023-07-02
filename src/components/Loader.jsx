import "../assets/css/loader.css";

window.document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    if(document.querySelector(".Loader")) {
      document.querySelector(".Loader").style.display = "none";
    }
    // console.log(document.querySelector(".Loader"))
  }, 1000);
});

const Loader = () => {
  return (
    <>
      <div className="Loader">
        <div className="loader-box">
          <img src="/assets/images/logo.svg" alt="logo" />
          <div className="content">
            <h1>Hima-Pro</h1>
            <p>Web Developer, Page loading...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loader;