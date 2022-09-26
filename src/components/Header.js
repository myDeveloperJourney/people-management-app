import { login, logout } from '../firebase';
import { Link } from 'react-router-dom';

function Header({ user }) {
    return (
        <nav className="nav">
            <Link to="/">
                <div>People App</div>
            </Link>
            <section className="auth-options">
                {
                    user ?
                    <>
                        <div>Welcome, {user.displayName}</div>
                        <div onClick={logout}>Logout</div>
                    </>
                    :
                    <div onClick={login}>Login</div>
                }
            </section>
        </nav>
    );
}

export default Header;