import './Header.scss'
import Logo from '../Logo/Logo'
import SearchBar from '../SearchBar/SearchBar'
import UserMenu from '../UserMenu/UserMenu'
import Categories from '../Categories/Categories'
import Filter from '../Filters/Filter'
export default function Header() {
    return (
        <div className="header-wrapper">
                <header className="header">
                    <div className="header__row">
                        <div className="logo">
                        <a href="#">
                            <Logo />
                        </a>
                    </div>

                    <div className="header__search">
                        <SearchBar />
                    </div>

                    <div className="header__user">
                        <UserMenu />
                    </div>
                </div>
            </header>
            <Categories />
            
        </div>
    )
}
