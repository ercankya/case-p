import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import axios from "../axiosConfig";

const AddPersonPage = () => {
  const [person, setPerson] = useState({
    username: "",
    password: "",
    email: "",
    city: "",
    district: "",
  });
  const [provinces, setProvinces] = React.useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleProvinceChange = (event) => {
    const selectedProvinceId = event.target.value;
    const selectedProvinceObject = provinces.find(
      (province) => province.id === selectedProvinceId
    );

    setSelectedProvince(selectedProvinceObject);
    setSelectedDistrict("");
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const personData = {
        ...person,
        city: selectedProvince.name,
        district: selectedDistrict,
      };
      await axios.post("/api/users", personData);
      alert("Person added successfully!");
      setPerson({
        username: '',
        password: '',
        email: '',
      });
      setSelectedProvince('');
      setSelectedDistrict('');
    } catch (error) {
      console.error("Error adding person:", error);
      alert("Error adding person. Please try again.");
    }
  };


  const province = async () => {
    const response = await fetch(
      "https://turkiyeapi.dev/api/v1/provinces"
    ).then((response) => response.json());
    setProvinces(response.data);
    console.log(provinces);
  };
  React.useEffect(() => {
    province();
  }, []);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={6}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Add Person
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Username"
              type="text"
              name="username"
              value={person.username}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={person.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={person.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>City</InputLabel>
              <Select
                value={selectedProvince.id || ""}
                onChange={handleProvinceChange}
              >
                {provinces.map((province) => (
                  <MenuItem key={province.id} value={province.id}>
                    {province.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel>District</InputLabel>
              <Select
                value={selectedDistrict || ""}
                onChange={handleDistrictChange}
                disabled={!selectedProvince}
              >
                {selectedProvince &&
                  selectedProvince.districts.map((district) => (
                    <MenuItem key={district.id} value={district.name}>
                      {district.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
            >
              Add Person
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddPersonPage;
