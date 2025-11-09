import style from "../components/modules/styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={style.header}>
        <h1>Crypto App</h1>
        <p>
          <a href="https://arsoroush.com">Ahmadreza Soroush</a> | React.js Full
          Course
        </p>
      </header>
      {children}

      <footer className={style.footer}>
        <p>Developed By Ahmadreza Soroush</p>
      </footer>
    </>
  );
}

export default Layout;
