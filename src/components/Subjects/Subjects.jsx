import { useState } from "react"
import "./Subjects.scss"
import latex from "../../img/latex.png"
import computer from "../../img/cisco.png"
import psixologiya from "../../img/psixologiya.png"
import talimnazariya from "../../img/talimnazariya.jpg"
import psixologiya2 from "../../img/psixologiya2.png"
import web from "../../img/web.png"
function Subjects({setOnQuiz,select,setSelect,number,setNumber}) {
  return (
    <div className="subjects">
        <div className="container">
          <h1>Quyidagi fanlardan birini tanlang:</h1>
          <ul>
            <li >
            <img src={computer} alt="" />
              <span>
                <h3>Kompyuter tarmoqlari</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(1)}}>Boshlash</button>
              </span>
            </li>
            <li >
              <img src={latex} alt="" />
              <span>
                <h3>Latexga kirish </h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(2)}}>Boshlash</button>
              </span>
            </li>
            <li >
              <img src={psixologiya} alt="" />
              <span>
                <h3>Pedagogika. Psixologiya</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(3)}}>Boshlash</button>
              </span>
            </li>
            <li >
              <img src={talimnazariya} alt="" />
              <span>
                <h3>Ta'lim nazariyasi</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true); setSelect(4)}}>Boshlash</button>
              </span>
            </li>
            <li >
            <img src={psixologiya2} alt="" />
              <span>
                <h3>Ta'lim psixologiyasi</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(5)}}>Boshlash</button>
              </span>
            </li>
            <li   >
            <img src={web} alt="" />
              <span>
                <h3>Web dasturlash</h3>
                <div>
                  <h5>Savollar sonini tanlang</h5>
                  <select value={number} onChange={(e)=>{setNumber(e.target.value)}} name="" id="">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>
                <button onClick={()=>{setOnQuiz(true);setSelect(6)}}>Boshlash</button>
              </span>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Subjects