function Pagination({postsPerPage,totalPosts,paginate}){
  const pageNumbers = []
// 42 => 52
  for(let i = 1 ; i <= Math.ceil(totalPosts / postsPerPage); i ++){
    pageNumbers.push(i);
  }

  console.log(totalPosts);
  console.log(postsPerPage);
  console.log(pageNumbers);
  return (
    <div className="num">
      <ul>
        {
          pageNumbers.map((number) =>(
            <li key={number}>
              <span onClick={() =>{paginate(number)}}>{number}</span>
              </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Pagination;