import React, {useState, useEffect} from 'react'
import '../../App.css'
import ReservationsLayout from './ReservationsLayout'
import PaginationBar from './PaginationBar'
import ReservationTable from './ReservationTable'
import resData from './resData'

function Reservations(){
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(7)  //Number of posts per page.
  
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = resData
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
      <h2>予約確認一覧</h2>
      <ReservationsLayout>
        <ReservationTable currentPosts={currentPosts} loading={loading} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <PaginationBar
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
      </ReservationsLayout>
    </>
    )
}

export default Reservations


// class Reservations extends Component {

//   render() {
//     const theadStyle = {
//       // fontSize: 'auto',
//       color: 'white'
//     }
  
//     return (
//       <>
//         <h2>予約確認一覧</h2>
//         <ReservationsLayout>
//           <ReservationTable  posts={currentPosts} loading={loading} />
//           <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
//             <PaginationBar
//               postsPerPage={postsPerPage}
//               totalPosts={posts.length}
//               paginate={paginate}
//             />
//           </div>
//         </ReservationsLayout>
//       </>
//       )
//   }
// }

