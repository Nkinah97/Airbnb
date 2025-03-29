import './Main.scss'
import Card from '../Card/Card'
import cardsData from '../../data/data.json'
export default function Main() {
    return (
        <main className="main">
            <div className="main__cards">
                {cardsData.map((item) => {
                    return (
                        <Card
                         key={item.id}
                         img = {item.img}
                         location = {item.location}
                         rating = {item.rating}
                         desc = {item.desc}
                         dates = {item.dates_available}
                         price = {item.price_per_night}

                         />
                    )
                })}
            </div>
        </main>
    )
}
