import React, { useState } from 'react';
import './Component.css';
import SectionLine from './Section';

const DataRow = ({ obj, index, deleteUser, handleChangeAllDelete, handleChange,selectId }) => {
    const [isEdit,setIsEdit] = useState(null);

        const editUser = (id) => {
          setIsEdit(id)
           
        }
    
        const handleSaveUser = () => {
          setIsEdit(null)
        }
    

  return (
    <>
    <tr>
              <td>
              <input checked={selectId.includes(obj.id)} onChange={()=>handleChangeAllDelete(obj.id)}type='checkbox' className='checkbox'></input>

              </td>

              <td>{isEdit === obj.id ? <input type='text'  onChange={(e)=> handleChange(e,"name",index)} /> : obj.name}</td>
              <td>{isEdit === obj.id ? <input type='text'  onChange={(e)=> handleChange(e,"email",index)} /> : obj.email}</td>
               <td>{isEdit === obj.id ? <select onChange={(e)=> handleChange(e,"role",index)} >
               <option value="none" selected disabled hidden>Select an Option</option> 
                <option value='Member'>Member</option>
                <option value='Admin'>Admin</option>
                <option value='Administrator'>Administrator</option>
              </select> : obj.role }
              </td>
              <td>
             {
              isEdit === obj.id ? <button onClick={handleSaveUser}>Save</button>:<button onClick={() => editUser(obj.id)}>🖊️</button>
             }
              <button  onClick={()=> deleteUser(obj.id)}>🗑️</button>
              
              </td>
              <td></td>
            </tr>
            <SectionLine/>
    </>
  )
}

export default DataRow
