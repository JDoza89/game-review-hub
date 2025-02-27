import Link from "next/link";
import CompanyLogo from '@assets/CompanyLogo.svg';

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-8 w-full">
            <Link href='/'>
                <CompanyLogo />
            </Link>
            <div className="flex flex-row gap-4">
                <Link href="/reviews">
                    Reviews
                </Link>
                <Link href="/">
                    Home
                </Link>
                <Link href="/account-settings">
                    Account Settings
                </Link>
            </div>
        </header>
    );
};

export default Header;