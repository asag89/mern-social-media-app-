
import { searchDropdown, addSearchItem, deleteSearchItem } from '../../features/search/searchSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// custom hooks
import useWindowDimensions from "../../hooks/useWindowSize"
import { useScrollLock } from "../../hooks/useScrollLock"

import SmallSpinner from '../spinners/SmallSpinner'

import Container from '../../assets/containers/SearchDropdown'

const SearchDropdown = ({ text, users, searchedUser, isLoading }) => {
    const dispatch = useDispatch()
    const { lockScroll, unlockScroll } = useScrollLock();
    const { width } = useWindowDimensions();
    const navigate = useNavigate()

    useEffect(() => {
        if (width <= 562) {
            lockScroll()
        }

        return () => {
            unlockScroll()
        }
    }, [width, lockScroll, unlockScroll])

    const handle = (id) => {
        const ids = users.map((item) => {
            return item._id
        })

        if (!ids.includes(id)) {
            dispatch(addSearchItem(id))
        }
    }

    return (
        <Container>
            {text ? (
                <div className='dropdown'>
                    {isLoading ?
                        <div className="center-wrapper">
                            <SmallSpinner size={"28px"} color={"#aeaeae"} />
                        </div>
                        : (!isLoading && searchedUser.length < 1) &&
                        <div className="center-wrapper">
                            <p>No results found.</p>
                        </div>
                    }
                    <div className='recent-search-items'>
                        {searchedUser.map((user) => (
                            <div className='recent-search-item' key={user._id} onClick={() => handle(user._id)}>
                                <div className='navigate' onClick={() => { navigate(`/profile/${user.username}`); dispatch(searchDropdown()) }}>
                                    <div className='wrapper'>
                                        <div className="img-wrapper">
                                            <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={user.username} />
                                        </div>
                                        <div className='user-info'>
                                            <div className='username'>{user.username}</div>
                                            <div className='name'>{user.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className='dropdown'>
                    <div className="top">
                        <h4 >Recent</h4>
                        {users.length > 0 &&
                            <button className='btn-clear' onClick={() => dispatch(deleteSearchItem("*all"))}>Clear All</button>
                        }
                    </div>
                    {users.length < 1 &&
                        <div className="center-wrapper">
                            <p>No recent searches.</p>
                        </div>
                    }
                    <div className='recent-search-items'>
                        {users.map((user) => (
                            <div className='recent-search-item' key={user._id}>
                                <div className='navigate' onClick={() => { navigate(`/profile/${user.username}`); dispatch(searchDropdown()) }}>
                                    <div className='wrapper'>
                                        <div className="img-wrapper">
                                            <img src={user.userPhoto || "https://firebasestorage.googleapis.com/v0/b/social-media-98b62.appspot.com/o/avatar.jpg?alt=media&token=5fef33f4-5f1c-4353-a7f8-f4c584642808"} alt={user.username} />
                                        </div>
                                        <div className='user-info'>
                                            <div className='username'>{user.username}</div>
                                            <div className='name'>{user.name}</div>
                                        </div>
                                        <div className='btn-container' onClick={(e) => e.stopPropagation()} >
                                            <button className='btn-remove' onClick={() => dispatch(deleteSearchItem(user._id))}>X</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    )
}

export default SearchDropdown