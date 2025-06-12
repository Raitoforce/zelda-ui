import Card from '@components/elements/card/Card';
import Footer from '@components/elements/footer/Footer';
import Header from '@components/elements/header/Header';
import Nav from '@components/elements/nav/Nav';
import type { FunctionComponent } from 'react';
import './_Layout.scss';

const Layout: FunctionComponent = () => {
  return (
    <section className="layout" role="layout">
      <section className="layout__row">
        <Card>
          <Header></Header>
          <Nav></Nav>
          <input type="text" role="search" />
        </Card>
      </section>
      <section className="layout__row">
        <Card>
          <div role="router"></div>
        </Card>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Layout;
