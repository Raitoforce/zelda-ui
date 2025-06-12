import type { FunctionComponent } from 'react';
import Card from '../elements/card/Card';
import Footer from '../elements/footer/Footer';
import Header from '../elements/header/Header';
import Nav from '../elements/nav/Nav';
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
