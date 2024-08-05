/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './Component.css';
import axios from 'axios';
import {FcNext, FcPrevious} from 'react-icons/fc';
import DataRow from './DataRow';


export default function Component() {
  const [data, setData] = useState([]);
  const [totalpages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectId, setSelectId] = useState([]);
  const itemsPerPage=10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setData(response.data);
        console.log(response.data);
        setTotalPages(Math.ceil(response.data.length / itemsPerPage));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const pagedData = (currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data.slice(startIndex, endIndex);
    setCurrentPage(currentPage);
    setDisplayData(displayedData);
  };
  
  useEffect(() => {
    pagedData(currentPage);
  }, [currentPage, data]);
  
    
    const deleteUser = (id) => {
     const newData =  data.filter(item=>item.id !== id);
      setData(newData)
    }

    const handleChange =(e,key,index)=>{
        data[index][key] = e.target.value
    }

    const handleChangeAllDelete = (id) => {
      setSelectId((prev)=>[...prev,id])

    }

    const handleAllDelete = ()=>{
    const newData =  data.filter(item=> !selectId.includes(item.id))
    setData(newData)

    }

    const [displayedData, setDisplayData] = useState(data.slice(0, 9));
    const [npages, setNpages] = useState(Math.ceil(data.length / 10));
    const [numbers, setNumbers] = useState( [...Array(npages + 1).keys()].slice(1));
  
   const changePage = (npages) => {
    const prev = currentPage -npages
    setCurrentPage(prev)
   }

    useEffect(() => {
      pagedData(currentPage);
    }, [currentPage, data, itemsPerPage]);


  return (
    <div className='container'>
    <input placeholder='Search by name, email or role.' className='Search'></input>
    
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
          displayedData.map((obj, index) => (
            <React.Fragment key={index}>
            <DataRow 
            obj={obj} 
            index={index} 
            deleteUser={deleteUser}  
            handleChange={handleChange}
            selectId = {selectId} 
            handleChangeAllDelete={handleChangeAllDelete}
            />
            </React.Fragment>
            
          ))
        } 
        </tbody>
       
      </table>
      <div className='footer'>
      <button onClick={handleAllDelete} className='footer-button'>Delete Selected</button>
      <button className='next-button'><FcPrevious></FcPrevious></button>
      {numbers.map((n, index)=> (<button onClick={()=>{changePage(index)}} className='next-button'>{n}</button>))}
      {/* <button className='next-button'>{numbers.map((n,id) => (onclick=>{changePage(npages)}))}</button> */}
      <button className='next-button'><FcNext></FcNext></button>
      </div>
      </div>
  )
}


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.get("http://localhost:3002/user", formData);
  //     setData(response);
  //     // const token = response.data.token;
  //     //   localStorage.setItem("token", response.data.token);
  //     //   navigate("/todopage");
  //   } catch (error) {
  //     if (error.response.status === 401) toast.warn(error.response.data.message);
  //   }
  // };