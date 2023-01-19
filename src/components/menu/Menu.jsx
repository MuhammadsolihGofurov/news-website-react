import { useMemo } from 'react'
import { nameOfStories } from '../../mock/nameOfStories'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCategory } from '../../slice/category';

export default function Menu() {
    const { currentCategory } = useSelector(state => state.category) ;
    const dispatch = useDispatch();

    const dataMap = useMemo(() => {

        return nameOfStories.map(item => (
            <Link key={item.id}
                className={
                    `lg:text-lg text-base font-bold px-[30px] py-[20px] text-white 
                    ${currentCategory.toLowerCase() === item?.name.toLowerCase() ? "bg-red-700" : ""}`
                }
                onClick={() => dispatch(selectedCategory(item.name))}
            >
                {item?.name}
            </Link>
        ));

    });

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                overflowX: "scroll",
                backgroundColor: 'gray',
            }}
            className="menu"
        >
            {dataMap}
        </div>
    )
}
