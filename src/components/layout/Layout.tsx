import type { FunctionComponent } from 'react';
import Card from '../card/Card';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../nav/Nav';
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
