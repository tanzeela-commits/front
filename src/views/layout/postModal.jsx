import React, { useState, useEffect } from "react";
import axios from "axios";

// mui imports
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

// Icons
import ImageIcon from "@mui/icons-material/Image";

import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "85%",
  maxWidth: "1020px",
  overflowY: "auto",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

export default function JobPostModal({ open, handleClose }) {
  const [jobType, setJobType] = useState("");
  const handleChange = (event) => {
    setJobType(event.target.value);
  };

  // async function getPost() {
  //   const response = await axios.get("https://bkbutt.herokuapp.com/postjob");
  //   console.log(response);
  // }

  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <>
      <Modal
        aria-labelledby="Job-title"
        aria-describedby="job-inputs"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h5" component="h2">
            Create a Job Post
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Shop Name: " variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Job Type: </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={jobType}
                  label="Job Type"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Plumber</MenuItem>
                  <MenuItem value={20}>Electrition</MenuItem>
                  <MenuItem value={30}>Milk man</MenuItem>
                  <MenuItem value={30}>General store helper</MenuItem>
                  <MenuItem value={30}>Bike Mechanic</MenuItem>
                  <MenuItem value={30}>Car Mechanic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Timings: " variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Location: " variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField id="outlined-basic" label="Age Required: " variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Salary Offered: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="No. of Employee Required: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Experience required: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader name="file" types={["JPG", "PNG"]} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Description: "
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{}}>
              <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  sx={{ color: "text.disabled", borderColor: "text.disabled" }}
                  onClick={handleClose}
                >
                  cancel
                </Button>
                <Button variant="contained">Post</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
