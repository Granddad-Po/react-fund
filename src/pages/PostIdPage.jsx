import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import Comments from "../components/Comments/Comments";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommById(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    return (
        <div className={'postId__wrapper'}>
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <div className={'post__about'}>
                    <div style={{fontWeight: 'bold', marginTop: 30}}>{post.id}. {post.title}</div>
                    <div>{post.body}.</div>
                </div>
            }
            <h3 style={{marginTop: 40, marginBottom: 10}}>Комментарии</h3>
            <div>
                {comments.map(comm =>
                <div key={comm.id}>
                    <Comments email={comm.email} body={comm.body}/>
                </div>
                )}
            </div>
        </div>
    );
};

export default PostIdPage;