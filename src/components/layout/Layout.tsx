import Card from '@components/elements/card/Card';
import Footer from '@components/elements/footer/Footer';
import Header from '@components/elements/header/Header';
import Nav from '@components/elements/nav/Nav';
import type { FunctionComponent } from 'react';
import './_Layout.scss';
import { NAVIGATION_LINKS } from './links.const';

const Layout: FunctionComponent = () => {
  return (
    <section className="layout" role="layout">
      <section className="layout__row" role="head-row">
        <Card className="layout__card">
          <Header></Header>
          <Nav links={NAVIGATION_LINKS}></Nav>
          <input type="text" role="search" />
        </Card>
      </section>
      <section className="layout__row layout__row--full" role="content-row">
        <Card className="layout__router">
          <div role="router"></div>
        </Card>
      </section>
      <Footer></Footer>
    </section>
  );
};

export default Layout;
