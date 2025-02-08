import s from "./ErrorPage.module.scss";
export const ErrorPage = () => {
    
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={s.wrapper}>
      <div className={s.error}>
        <h1>Oops! Something went wrong.</h1>
        <p>Please try refreshing the page</p>
      </div>

      <button className={s.button} onClick={() => reloadPage()}>
        Reload the Page
      </button>
    </div>
  );
};
