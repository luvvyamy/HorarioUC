import React from 'react';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container-fluid text-center">
        <span className="navbar-text w-100">
          Colabora con este proyecto en
          {' '}

        </span>
        <a href="https://github.com/luvvyamy/HorarioUC">GitHub</a>
        <br />
        {' '}
        o abre un Issue en GitHub.
        <br />
        <span className="w-100 navbar-text">{`v${process.env.npm_package_version}`}</span>
      </div>
    </footer>
  );
}

export default Footer;
