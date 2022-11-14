
import { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import { searchDropdown, getSearchResults, getSearchHistory } from '../../features/search/searchSlice'
import { useEffect } from 'react'
import SearchDropdown from '../dropdown/SearchDropdown'
import { TiDeleteOutline } from "react-icons/ti"
import useWindowDimensions from '../../hooks/useWindowSize'
import Container from '../../assets/containers/SearchBar'

const SearchBar = () => {
    const dispatch = useDispatch()

    const [text, setText] = useState("")
    const { users, showSearchDropdown, searchedUser, isLoading } = useSelector((state) => state.search)
    const { width } = useWindowDimensions();

    useEffect(() => {
        dispatch(getSearchHistory())
        if (text) {
            dispatch(getSearchResults(text))

        }
    }, [dispatch, text])

    return (
        <Container onClick={() => dispatch(searchDropdown())} width={(width > 562) ? "100%" : (width <= 562 && !showSearchDropdown) ? "100%" : width < 450 ? "calc(85% - 12px)" : "calc(90% - 12px)"}>
            <div className='search-wrapper'>
                <label htmlFor="search" className='navbar-search-label'><BsSearch className='navbar-SearchIcon' /></label>
                <input type="text" id="search" className="navbar-input" placeholder='Search' autoComplete='off' value={text} onChange={(e) => setText(e.target.value)} />
                {text &&
                    <button className='delete-btn' onClick={() => setText("")}><TiDeleteOutline className='delete-icon' /></button>
                }
            </div>
            {(showSearchDropdown && width <= 562) &&
                <button className='cancel-btn' onClick={() => dispatch(searchDropdown())}>Cancel</button>
            }
            {showSearchDropdown &&
                <SearchDropdown text={text} users={users} searchedUser={searchedUser} isLoading={isLoading} />
            }
        </Container >
    )
}

export default SearchBar