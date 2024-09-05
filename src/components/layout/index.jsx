//Uses config set global components for the layout
import Header from '../nestable/Header';
import Footer from '../nestable/Footer';
export default function Layout({ config, children }) {
  const headerBlok = config.content.body[0];
  const footerBlok = config.content.body[1];
  return (
    <>
      <Header blok={headerBlok} />
      {children}
      <Footer blok={footerBlok} />
    </>
  );
}
