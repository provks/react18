import { useEffect, useRef, useState } from "react"

export default function Blog () {
    const [formData, setFormData] = useState({title: '', content: ''});
    console.log(formData);
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);

    useEffect(() => {
        console.log(titleRef);
        titleRef.current.focus();
    },[])

    function handleFormSubmit (e) {
        e.preventDefault(); // to stop refreshing  page on submitting the form
        setBlogs([...blogs, {title: formData.title, content: formData.content}]);
        setBlogs([...blogs, formData]);
    }
    console.log(blogs)

    function handleDeleteBlog(index) {
        const updatedBlogs = blogs.filter((blog, i) => {return index !== i});
        setBlogs(updatedBlogs);
    }

    return (
        <>
            {/* section (Form) for creating a blog */}
            <h2>Blog App: Create a new Blog today!</h2>
            <form action="" onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input ref={titleRef} id="title" name="title" type="text" onChange={(e) => setFormData({title: e.target.value, content: formData.content})} />
                </div>
                <div>
                    <label htmlFor="content">Content</label>
                    <input id="content" name="content" type="text" onChange={(e) => setFormData({title: formData.title, content: e.target.value})}/>
                </div>
                <button type="submit">Create Blog</button>
            </form>
            {/* Section to show the blog */}
            <h2>Blogs</h2>
            {blogs.map((blog, index) => {
                return (<div key={index} style={{border: "1px solid black", width: "70vw", marginBottom: "10px"}}>
                <h3>{blog.title}</h3>
                <hr />
                <p>{blog.content}</p>
                <div>
                    <button onClick={() => {handleDeleteBlog(index)}}>Delete</button>
                </div>
            </div>)

            })}
            
        </>
    )

}