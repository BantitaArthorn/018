import moment from 'moment';
import './App.css'
import {   useEffect, useState } from 'react';

import  axios  from 'axios';
import { ImageProfile } from './components/ImageProfile';
import { Title } from './components/Title';
import { TitleRight } from './components/TitleRight';

const enpoint = 'https://sheetdb.io/api/v1/rjnu11gpps65s';

const  App = () => {

  const [hide, setHide] = useState(false);
  const [data, setdata] = useState([]);

  const callAPi = async () =>{
    return axios.get(enpoint).then((response) => {
      const data = response.data
      setdata(data)
    })
  }
  console.log(data)

  useEffect( () =>{
    callAPi()
  }, [])
  
  return (
    <>
      <div className="main">
        <div className="leftPort">
          <ImageProfile images="/src/assets/imgs.jpg" />

          <Title title="BANTITA ARTHORN">
            <p>UX/UI DESIGNER</p>
          </Title>


          <Title title="Contract">
            <p>{moment("2546/2/4").format("DD/MM/YYYY")}</p>

            <p style={{ display: hide ? 'none' : 'block' }}>tel: +66092-4792-941</p>
            <button onClick={() => setHide(!hide)}>{hide ? 'show' : 'hide'}</button>
            <p>Email: Baipooharthorngb@gmail.com</p>
          </Title>

          <Title title="eduction">
            <p>Information Technology major I am a third year student. GPA 3.91</p>
            <p>Suan Sunandha Rajabhat University</p>
          </Title>

        </div>

      


        <div className="rightPort">

          <TitleRight titles="Profile">
            <p>Hello, I'm Baipooh. I'm 21 years old. 
              I have enjoyed drawing and play online games. I'm interested and want to develop in the field of UX/UI design. People always think I'm an active and responsible person
            </p>
          </TitleRight>

<br />
          <TitleRight titles="ACTIVITIES AND REWARDS">
            <p className='headers-details'>Logo design</p>
            <ul>
              <li>Received the Special 2nd Runner-up Award in the logo design competition for the Department of Geology, Faculty of Science, Chiang Mai University
              </li>
            </ul>
            <p className='headers-details'>
            VR game
            </p>
            <ul>
              <li>Make a VR game that teaches about salt-farm. Currently in the development phase.</li>
            </ul>
           
          </TitleRight>
        <br />

          <TitleRight titles="skill">
            <p>Drawing well</p>
            <ul>
              <li>Can draw digital art. You can see my work at  @BaiBai_SHyartis.</li>
            </ul>
            <p>Website design ,UX/UI designer</p>
            <ul>
              <li>I studied web design in university.</li>
            </ul>
            <p>3D model</p>
            <ul>
              <li>I learned how to make 3D models from university training.</li>
            </ul>
          </TitleRight>


        </div>
      </div>

      <div className="tables">
        <h2>ข้อมูลคนในห้อง</h2>
        {data.map((record) => 
          <div key={record.code}>
               {record.code}
                {record.name}
           </div>
           )}
      </div>
    </>
  )
}


export default App