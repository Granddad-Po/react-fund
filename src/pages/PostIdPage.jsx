import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
        console.log(post)
    })

    useEffect(() => {
        fetchPostById(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <div className={'post__about'}>
                    <div style={{fontWidth: 'bold'}}>{post.id}. {post.title}</div>
                    <div>{post.body}.</div>
                </div>
            }
        </div>
    );
};

export default PostIdPage;