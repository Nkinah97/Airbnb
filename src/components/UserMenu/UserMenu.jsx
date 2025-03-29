import './UserMenu.scss'
import Link from '../Link/Link'
import localIcon from '../../img/icons/globe.svg'
import NavIcon from '../../img/icons/nav.svg'
import UserIcon from '../../img/icons/div.svg'
export default function UserMenu() {
    return (
        <div className="user-menu">
            <div className="user-menu__item">
                <div className="user-menu__item-home">
                    <Link text="Airbnb your home"
                     href="#"
                     />
                </div>
                <div className="user-menu__item-local">
                    <Link
                     href="#"
                     icon={localIcon}
                     />
                </div>
                <div className="user-menu__item-user">
                    <button className="user-menu__item-user-button">
                        <img src={NavIcon} alt="nav" />
                    </button>
                    <button className="user-menu__item-user-button">
                        <img src={UserIcon} alt="user" />
                    </button>
                </div>
            </div>
        </div>
    )
}   