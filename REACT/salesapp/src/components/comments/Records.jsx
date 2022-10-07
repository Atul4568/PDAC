import React from 'react'

const CommentItem = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
        <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Comment</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name} </td>
                    <td>{item.email} </td>
                    <td>{item.body} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  