import './SearchBar.scss'
import searchIcon from '../../img/icons/search.svg'
import Link from '../Link/Link'
export default function SearchBar() {
    return (
        <div className="search-bar">
            <button className="search__button">
                <Link
                 text="Anywhere"
                 href="#"
                 />
            </button>

            <button className="search__button">
                <Link
                 text="Any week"
                 href="#"
                 />
            </button>

            <button className="search__button">
                <Link
                 text="Add guests"
                 href="##"
                 style="light"
                 />
            </button>

            <button className="search__submit" aria-label="Search">
                <img src={searchIcon} alt="search" />
            </button>
        </div>
    )
}
