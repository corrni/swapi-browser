import { Link, useLocation } from 'react-router-dom'

import { MenuWrapper, MenuItem } from './styles'

export const NavigationMenu: React.FC = () => {
  const { pathname } = useLocation()
  const isMovieRoute = pathname === '/' || pathname.startsWith('/movie')
  const isCharacterRoute = pathname.startsWith('/character')

  return (
    <MenuWrapper>
      <MenuItem active={isMovieRoute}>
        <Link to="/">Movies</Link>
      </MenuItem>
      <MenuItem active={isCharacterRoute}>
        <Link to="/characters">Characters</Link>
      </MenuItem>
    </MenuWrapper>
  )
}
