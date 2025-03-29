import './Categories.scss'
import Filter from '../Filters/Filter'
import CategoryItem from '../CategoryItem/CategoryItem'
export default function Categories() {
    return (
        <div className="categories">
            <div className="categories__row">
                <div className="categories__list"> <CategoryItem /> </div>
                <div className="categories__filter"> <Filter /> </div>
            </div>
        </div>
    )
}
