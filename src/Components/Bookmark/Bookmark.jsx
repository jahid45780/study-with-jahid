import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    return (
        <div className=' bg-slate-300 p-4 m-4'>
            <h3 className=' text-2xl text-indigo-400'> {title} </h3>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;