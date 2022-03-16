import NavCategory from './navCategory';
import NavItem from './navItem';

const ListNav = ({headerItem,data = []}) => {
    return (
    <ul className="nav">
        {headerItem}
        {
            data?.map((group) => (
                <>
                    <NavCategory text={group?.category}/>
                    {
                       group?.items?.map((groupItem) => <NavItem text={groupItem?.text} link={groupItem?.link} />) 
                    }
                </>
            ))
        }
    </ul>
    )
}

export default ListNav;