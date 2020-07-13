import React, {useState, useEffect} from 'react'
import '../../App.css'
import SheetAreaContainer from './SheetAreaContainer'

function Reservations(){
  return (
    <>
      <h2>予約確認一覧</h2>
      <SheetAreaContainer/>
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

