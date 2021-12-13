import Link from 'next/link';

export default ({currentUser}) => {
    return <nav className="navbar navbar-light bg-light">
        <Link href="/">
            <a className="navbar-brand">GetTix</a>
        </Link>
        <div className="d-flex justify-content-end">
            <ul className="nav d-flex align-items-center">
                {currentUser ? 
                    <Link href="/auth/signout">
                        <a className="navbar-brand">Sign Out</a>
                    </Link>
                : 
                    <div>
                        <Link href="/auth/signin">
                            <a className="navbar">Sign In</a>
                        </Link>
                        <Link href="/auth/signup">
                            <a className="navbar">Sign Up</a>
                        </Link>
                    </div>
                }
            </ul>
        </div>
    </nav>
}