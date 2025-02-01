
export default function Header() {
  return (
    <header >
        <nav className="navbar py-4 px-3 navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white text-uppercase" href="#">start bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link text-white text-uppercase active" aria-current="page" href="#">portfolio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white text-uppercase" href="#">about</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-white text-uppercase" href="#">contact</a>
                        </li>
                    </ul>
                    </div>
        </div>
        </nav>

    </header>
  )
}
