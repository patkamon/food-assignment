import React from 'react'


const Nav = () => {
  return (
    <div>
      <br></br>
      <div className="input-group"></div>
      <h3 align = 'left'><font face = 'Arial Black'><font color='#330066'>&emsp;&emsp;&emsp;&emsp; Cooking Master</font></font></h3>
      </div>
   
  )
}
// const Nav = (props) => {
//   return <div className='search-navbar'>
//           <div className="container-fluid" >
//               <div className="input-group">
//                   <span className="input-group-text" id="basic-addon1">🔍</span>
//                   <input type="text" className="form-control" placeholder="Search for Meal..." aria-label="Username" aria-describedby="basic-addon1" value={props.value} onChange={(e) => props.setValue(e.target.value) }/>
//                   <button className="btn btn-outline-success" type="submit" onClick={props.onClick}>Search</button>
//               </div>
//           </div>
//       </nav>
//   </div>;
// };

export default Nav