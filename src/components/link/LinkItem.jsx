import { Link } from 'react-router-dom';


export default function LinkItem({ children, ...rest }) {
    return (
        <Link
            
            {...rest}
        >
            {children}
        </Link>
    )
}
