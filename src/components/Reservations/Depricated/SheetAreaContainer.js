import React, {useState, useEffect} from 'react'
import SheetAreaLayout from './SheetAreaLayout'
import PaginationBar from './PaginationBar'
import ReservationTable from './ReservationTable'
import resDataMap from '../resDataMap'

//SheetAreaContainer contains the ReservationTable and Pagination
function SheetAreaContainer(){

  const POSTSPERPAGE = 8  //Number of posts per page.

  //All four states below will be used in both ReservationTable and Pagination after logics and modification.
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(POSTSPERPAGE)

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      // const res = resDataMega
      const res = resDataMap
      setPosts(res)
      setLoading(false)
    }

    fetchPosts();
  }, [])

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <SheetAreaLayout>
        <ReservationTable currentPosts={currentPosts} loading={loading} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <PaginationBar
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            activePage={currentPage}
            paginate={paginate}
          />
        </div>
      </SheetAreaLayout>
    </>
    )
}

export default SheetAreaContainer

