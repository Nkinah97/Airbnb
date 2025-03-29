import './Filter.scss'
import filterIcon from '../../img/icons/filters.svg'
export default function Filter() {
    return (
        <button className="filter-btn">
            <img src={filterIcon} alt="filter" />
            <p className="filter-btn__text">Filters</p>
        </button>
    )
}

