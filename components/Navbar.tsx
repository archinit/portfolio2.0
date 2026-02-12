export const Navbar = () => {
    return (
            <nav className="container mx-auto flex justify-between">
                <div className="flex gap-3"> 
                    <a>Home</a>
                    <a>Projects</a>
                    <a>About</a>
                </div>
                <div className="flex">
                    <button>dark</button>
                </div>
            </nav>

    )
}