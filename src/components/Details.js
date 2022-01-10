import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import "./details.css";

const Details = ({ match }) => {
  const [details, setDetails] = useState([]);

  const { id } = useParams();

  const fetchitems = async () => {
    const { data } = await Axios.get(
      `https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json`
    );
    console.log(data[id - 1]);

    setDetails(data[id - 1]);
  };

  useEffect(() => {
    fetchitems();
  }, []);

  const navigate = useNavigate();

  const style = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
  };

  return (
    <div className="details">
      <div className="btn">
        <BsFillArrowLeftSquareFill
          onClick={() => navigate("/users")}
          style={{ cursor: "pointer" }}
          size={50}
        />
      </div>

      <div className="d-flex tablem container justify-content-center">
        <List
          sx={style}
          className="ourList"
          component="nav"
          aria-label="mailbox folders"
        >
          <ListItem button>
            <ListItemText secondary={details.first_name} primary="First Name" />
          </ListItem>
          <Divider light />
          <ListItem button divider>
            <ListItemText secondary={details.last_name} primary="Last Name" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText secondary={details.age} primary="Age" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText secondary={details.email} primary="Mail" />
          </ListItem>
          <Divider light />
          <ListItem button>
          <div className="m-0 p-0">
          <h6 className="headingWeb" >Website</h6>
          <a href={details.web} style={{textDecoration : 'none'}} target="_blank" className="webLink">
          {details.web} 
        </a>
          </div>
         
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText secondary={details.zip} primary="Zip code" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Details;
