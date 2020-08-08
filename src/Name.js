import React from 'react'
import Table from 'react-bootstrap/Table';

export const Name = () => {
    const tableHeader = <thead className='bgvi'>
    <tr>
        <td colspan = "10">공급자</td>
    </tr>
</thead>
    return (
        <Table striped bordered hover size = "sm">
            {tableHeader}
        <div className="App">
            <tr>
                <td>등록번호</td>
                <td colspan = "7"></td>
            </tr>
            <tr>
                <td>상호</td>
                <td colspan = "3"></td>
                <td>성명</td>
                <td dolspan = "3"></td>
            </tr>
            <tr>
                <td>사이트주소</td>
                <td colspan = "7"></td>
            </tr>
            <tr>
                <td>품목</td>
                <td colspan = "7"></td>
            </tr>
            <tr>
                <td>연락처</td>
                <td colspan = "7"></td>
            </tr>
        </div>
        </Table>
    )
}