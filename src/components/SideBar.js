import { useSelector } from 'react-redux';
import MenuItem from './MenuItem'

const SideBar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div>
        <MenuItem/>
    </div>
  )
}

export default SideBar;