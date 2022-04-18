import axios from "axios";
import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { removeCandiate } from "../store/actions/candiate";

function Home() {
  const dispatch = useDispatch();
  const candiates = useSelector((state) => state.candiate);
  const history = useHistory();

  const editCandiate = (id) => {
    axios
      .get(`http://localhost:47651/api/DCandiates/${id}`)
      .then((res) => history.push({ pathname: `/edit/${id}`, state: res.data }))
      .catch((error) => alert("This Id was Not Found"));
  };
  const deleteCandiate = (id) => {
    dispatch(removeCandiate(id));
  };

  return (
    <Container className=' mt-2' style={{ textAlign: "center" }}>
      {candiates.length === 0 ? (
        <p>No Records were Found</p>
      ) : (
        <Table
          striped
          bordered
          hover
          variant='dark'
          style={{ width: "950px", margin: "auto" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {candiates.map((candiate) => (
              <tr key={candiate.id}>
                <td>{candiate.fullName}</td>
                <td>{candiate.email}</td>
                <td>{candiate.age}</td>
                <td>{candiate.mobile}</td>
                <td>
                  <Button
                    className='mr-3'
                    variant='success'
                    style={{ width: "85px", marginRight: "5px" }}
                    onClick={() => editCandiate(candiate.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className='ml-3'
                    variant='danger'
                    style={{ width: "85px", marginLeft: "5px" }}
                    onClick={() => deleteCandiate(candiate.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default Home;
