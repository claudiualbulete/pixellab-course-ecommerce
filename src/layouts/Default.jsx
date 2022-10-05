import { css } from "@emotion/css";
import { Header, Footer } from "../components/common";

const black = '#171717';
const white = '#ffffff';
const gray = '#f2f2f2';

export const DefaultLayout = ({ children }) => {
  const gridCSS = css`
    display: grid;
    grid-template-areas:
    "header"
    "content"
    "footer";
    grid-template-rows: auto 1fr auto;
    width: 100%;

    @media (min-width: 1024px) {
      grid-template-areas:
        "header content"
        "header footer";
      grid-template-rows: auto 1fr auto;
      grid-template-columns: auto 1fr;
    }
  `;

  const headerCSS = css`
    grid-area: header;
    background-color: ${black};
    color: ${white};
    padding: 16px;
    height: 60px;

    @media (min-width: 1024px) {
      width: 80px;
      height: 100%;
      border-right: 1px solid ${white};
    }
  `;

  const contentCSS = css`
    grid-area: content;
    background-color: ${white};
  `;

  const footerCSS = css`
    grid-area: footer;
    background-color: ${gray};
  `;

  return (
    <div className={gridCSS}>
      <header className={headerCSS}>
        <Header/>
      </header>

      <main className={`${contentCSS} container mx-auto`}>
        {children}
      </main>

      <footer className={footerCSS}>
        <Footer/>
      </footer>
    </div>
  )
}

export default DefaultLayout;