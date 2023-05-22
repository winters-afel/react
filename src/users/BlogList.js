const BlogList = (props) => {
    const blogs = props.blogs;
    return ( 
        <div className="container">
         { blogs.map((rows)=>(
            <div className="col-md-4 border-top" key={rows.id}>
                <h3>{rows.title}</h3>
                <h5>{rows.price}</h5>
                <p>{rows.description}</p>
            </div>
         ))}

       
    </div>
     );
}
 
export default BlogList;


