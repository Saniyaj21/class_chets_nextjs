import Link from 'next/link';


const Navbar = () => {
	return (
		<header>
			<nav className='bg-black text-white flex justify-around items-center'>
				<div className=''>Logo</div>
				<div className=''>
					<ul>
						<li><Link href={'/'}>Home</Link></li>
						<li>
							<Link href={'/notes'}>Notes</Link>
						</li>
					</ul>
				</div>
				<div className=''>
                    <Link href={'/login'}>Login</Link>
                </div>
			</nav>
		</header>
	);
};

export default Navbar;
