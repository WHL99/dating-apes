import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import WebFont from 'webfontloader';
import AddAText from "../components/AddAText";
import MessageCard from "../components/MessageCard";



const API_URL = "http://localhost:5005";

function UserDetailsPage(props) {


  //字體設定
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Rampart One', 'Quicksand']
      }
    });
  }, []);
  const [user, setUser] = useState(null);
  const { userId } = useParams();



  const getUser = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios
      .get(
        `${API_URL}/api/users/${userId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {

        console.log('檢查response.data', response.data)
        const oneUser = response.data;
        setUser(oneUser);
      })
      .catch((error) => console.log(error));
  };



  useEffect(() => {
    getUser();
  }, []);

  // console.log(user.messages)
  return (
    // <div className='UserDetail-1' style={{ fontFamily: 'Quicksand' }}>
    <div className='UserList-1' style={{ fontFamily: 'Quicksand' }}>

      <Navbar />

      {user && (
        <div className='UserDetail-2'>
          {/* <div className='UserDetail-2-1'> */}
          <div className='UserDetail-3-1'>
            <div className='UserDetail-3-1-1'>
              <img src={user.url} style={{ height: '350px', width: '500px', objectFit: 'cover' }} />
            </div>
            <div className='UserDetail-3-1-2'>
              <h1>{user.name.slice(0, 1).toUpperCase() + user.name.slice(1).toLowerCase()},&nbsp;{user.age}y</h1>
            </div>

          </div>

          {/* <div className='UserDetail-2-2'> */}
          <div className='UserDetail-3-2'>
            <div className='UserDetail-3-2-1'>

              <div style={{ backgroundColor: 'black', color: 'white', border: '1px solid black', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', paddingLeft: '1vw' }}>
                <p>About Me</p>
              </div>


              <div style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px', paddingLeft: '1vw' }}>
                <p>{user.aboutMe}</p>
              </div>


            </div>

            <div className='UserDetail-3-2-2'>

              <p>Type:</p>
              <p>{user.gender} | {user.animal}</p>
              <p>{user.height} | {user.weight}</p>
              <p>{user.lang} | {user.birthday.slice(0, 10)}</p>
              <p>{user.area}  </p>


            </div>
          </div>

          <AddAText refreshUser={getUser} userId={userId} />


          {user && user.messages.map((message) => <MessageCard key={message._id} message={message} />)}

        </div>
      )}


    </div >
  );
}



export default UserDetailsPage;