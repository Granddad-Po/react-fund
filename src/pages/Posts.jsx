import React, {useEffect, useRef, useState} from "react";
import {usePosts} from '../hooks/usePosts'
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/UI/PostForm";
import '../styles/App.css';
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)} style={{marginTop: 30}}>
                Создать пост
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>

            <PostFilter filter={filter} setFilter={setFilter}/>
            <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue={'Кол-во элементов на странице'}
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Показать все'},
                ]}
            />
            {postError &&
            <h1>Произошла ошибка ${postError}</h1>}
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов о JS'}/>
            <div style={{height: 5}} ref={lastElement}></div>
            {
                isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
        </div>
    );
}

export default Posts;
