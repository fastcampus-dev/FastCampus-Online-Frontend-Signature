const formatAuthors = authors => {
    if(!authors){
        authors = '';
    } else {
        authors = authors.join(', ')
    }
    return authors;
}

export default formatAuthors;