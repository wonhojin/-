import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {

    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>{customer.도서명}</td>
                  <td>{customer.지은이}</td>
                  <td>{customer.출판사}</td>
                  <td>{customer.금액}</td>
                  <td>{customer.비고}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))

      const tableHeader = <thead className='bgvi'>
                            <tr>
                                <th>#</th>
                                <th>도서명</th>
                                <th>지은이</th>
                                <th>출판사</th>
                                <th>금액</th>
                                <th>비고</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
}