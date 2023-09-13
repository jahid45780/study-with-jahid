import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {id,title,cover,author_image,author,reading_time,posted_date,hashtags}=blog
    return (
        <div className=' mb-16 space-y-2'>
            <img className=' w-full h-96 mb-6' src={cover} alt= {`cover img of the title ${title}`} />
            <div className=' flex justify-between mb-4' >
                <div className=' flex gap-2'> 
                  <img className=' w-16 h-14 rounded-full' src={author_image} alt="" />
                  <div>
                       <h3 className=' text-3xl'> {author} </h3>
                       <p> {posted_date} </p>
                  </div>
              </div>

                     <div>
            <span> { reading_time } min read </span>
            <button onClick={ ()=> handleAddToBookmark(blog)} className=' text-4xl ml-2 text-red-500'> <FaBookmark></FaBookmark>  </button>
                     </div>
            </div>
            <h3 className=' text-3xl'> {title} </h3>
            <p className=' text-red-400'>
                {
                    hashtags.map((hash,idx)=> <span key={idx}> <a href=""> #{hash} </a> </span>  )
                }
            </p>
            <button onClick={ ()=> handleMarkAsRead (id,reading_time) } className=' text-purple-700 font-bold underline' >Mark As Read</button>
        </div>
    );
};

Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func

}

export default Blog;