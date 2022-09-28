import Header from "../components/Header";
import Footer from "../components/Footer";
import { css } from "@emotion/css";
import Controls from "../components/Controls";

const black = '#171717';
const white = '#ffffff';
const gray = '#f2f2f2';

export const DefaultLayout = ({ children }) => {
  const gridCSS = css`
    display: grid;
    grid-template-areas:
    "header"
    "controls"
    "content"
    "footer";
    grid-template-rows: auto auto 1fr auto;
    width: 100%;

    @media (min-width: 1024px) {
      grid-template-areas:
        "header controls"
        "header content"
        "header footer";
      grid-template-rows: auto 1fr auto;
      grid-template-columns: auto 1fr;
    }
  `;

  const controlsCSS = css`
    grid-area: controls;
    padding: 0 16px;
  `;

  const headerCSS = css`
    grid-area: header;
    background-color: ${black};
    color: ${white};
    padding: 16px;

    @media (min-width: 1024px) {
      width: 80px;
      height: 100vh;
    }
  `;

  const contentCSS = css`
    grid-area: content;
    background-color: ${white};
    padding: 16px;
  `;

  const footerCSS = css`
    grid-area: footer;
    background-color: ${gray};
    padding: 16px;
  `;

  return (
    <div className={gridCSS}>
      <header className={headerCSS}>
        <Header/>
      </header>

      <div className={controlsCSS}>
        <Controls/>
      </div>

      <main className={contentCSS}>
        {children}
      </main>

      <footer className={footerCSS}>
        <Footer/>
      </footer>
    </div>
  )
}

export default DefaultLayout;