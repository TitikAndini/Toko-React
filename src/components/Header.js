import { Link } from 'react-router-dom'
import { AnimateOnChange } from 'react-animation'
import { useContext } from 'react'
import { CartContext } from 'contexts/CartContext'
import { NotificationContext } from 'contexts/NotificationContext'
import { AuthContext } from 'contexts/AuthContext'
import 'react-confirm-alert/src/react-confirm-alert.css'

const Header = () => {
  const { getTotalQuantity } = useContext(CartContext)
  const { getTotalMessage } = useContext(NotificationContext)
  const { me } = useContext(AuthContext)
  const totalQuantity = getTotalQuantity()
  const totalMessage = getTotalMessage()
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <Link to="/">
              <img
                src="data:image/png;base64,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"
                width="110"
                height="32"
                alt="Tabler"
                className="navbar-brand-image px-2"
              />
            </Link>
            Andy&apos;s Bakery
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/carts"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="6" cy="19" r="2" />
                      <circle cx="17" cy="19" r="2" />
                      <path d="M17 17h-11v-14h-2" />
                      <path d="M6 5l14 1l-1 7h-13" />
                    </svg>
                    <span className="badge bg-red">{totalQuantity}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}
            {me && (
              <div className="nav-item dropdown d-none d-md-flex me-3">
                <Link
                  to="/notifications"
                  className="nav-link px-0 carts-icon"
                  data-bs-toggle="dropdown"
                  tabIndex="-1"
                  aria-label="Show notifications"
                >
                  <AnimateOnChange
                    animationIn="bounceIn"
                    animationOut="bounceOut"
                    durationOut={500}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                    </svg>
                    <span className="badge bg-red">{totalMessage}</span>
                  </AnimateOnChange>
                </Link>
              </div>
            )}

            <div className="nav-item d-none d-md-flex me-3">
              <div className="btn-list">
                {!me && (
                  <Link to="/login" className="btn btn-outline-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                    Login
                  </Link>
                )}
              </div>
            </div>

            {me && (
              <div className="nav-item">
                <Link
                  to="/account"
                  className="nav-link d-flex lh-1 text-reset p-0"
                >
                  <div className="d-none d-xl-block ps-2">
                    <div>{me.name}</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
