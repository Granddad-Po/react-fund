import React, { useState } from 'react'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'

const PostForm = ({create}) => {
	const [post, setPost] = useState({ title: '', body: '' })

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			...post, id: Date.now()
		}
		create(newPost)
		setPost({ title: '', body: '' })
	}

	return (
		<form>
			{/* Управляемый компонент через двустороннее связывание */}
			<MyInput
				value={post.title}
				onChange={e => setPost({ ...post, title: e.target.value })}
				type={'text'}
				placeholder={'Название поста'}
			/>
			{/* Неуправляемый компонент через двустороннее связывание */}
			<MyInput
				value={post.body}
				onChange={e => setPost({ ...post, body: e.target.value })}
				type={'text'}
				placeholder={'Описание'}
			/>
			<MyButton onClick={addNewPost} children={'Создать пост'} />
		</form>
	)
}

export default PostForm