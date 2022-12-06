import React from "react";
// import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import {
    Grid, TextField, Button, Card, CardContent, MenuItem, FormControl,
    Select, DialogTitle, InputLabel
} from "@mui/material";
import { Divider, Typography } from "@material-ui/core";
import { Male } from "@mui/icons-material";

import DeleteIcon from '@mui/icons-material/Delete';
import uploadFileToBlob, { deleteBlob, handlePriview, getFileName } from "src/utils/azureBlob";
import { IconButton, } from "@mui/material";

export default function PlayerDetailsTab({formik}) {

    const [loading, setLoading] = useState();

    //   Photo upload
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [selectedPhotoName, setSelectedPhotoName] = useState("");

    const [uploadedPhoto, setUploadedPhoto] = useState(false);
    const [uploadedPhotoName, setUploadedPhotoName] = useState("");

    //  Document banner
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [selectedDocumentName, setSelectedDocumentName] = useState("");

    const [uploadedDocument, setUploadedDocument] = useState(false);
    const [uploadedDocumentName, setUploadedDocumentName] = useState("");

    const onFileChnage = (e) => {
        if (e.target.name == "photo") {
            setUploadedPhoto(false)
            setSelectedPhoto(e.target.files[0])
            setSelectedPhotoName(e.target.files[0].name)
        }

        if (e.target.name == "document") {
            setUploadedDocument(false)
            setSelectedDocument(e.target.files[0])
            setSelectedDocumentName(e.target.files[0].name)
        }
    }

    const onFileUpload = async (file, id) => {
        setLoading(true)

        // *** UPLOAD TO AZURE STORAGE ***
        const blobsInContainer = await uploadFileToBlob(file).then(() => {

            if (id == 1) {
                // prepare UI for results
                setUploadedPhoto(true);
                setUploadedPhotoName(selectedPhotoName);
                //   reseting selected files
                setSelectedPhoto(null);
                setSelectedPhotoName("");
            }

            if (id == 2) {
                // prepare UI for results
                setUploadedDocument(true);
                setUploadedDocumentName(selectedDocumentName);
                //   reseting selected files
                setSelectedDocument(null);
                setSelectedDocumentName("");
            }
        });
        setLoading(false)
    };

    const onDeleteFile = (fileName, id) => {
        deleteBlob(fileName)
            .then(() => {

                if (id == 1) {
                    setSelectedPhoto(null);
                    setUploadedPhotoName("");
                    setUploadedPhoto(false);
                }

                if (id == 2) {
                    setSelectedDocument(null);
                    setUploadedDocumentName("");
                    setUploadedDocument(false);
                }
            })
    }



    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: {
    //         FirstName: "",
    //         LastName: "",
    //         AcademyClub: "",
    //         TypeOfPlayer: "",
    //         Gender: "",
    //         DateOfBirth: "",
    //         Address: "",
    //         Phone: "",
    //         EducationQualification: "",
    //         document: "",
    //         photo: "",
    //         PlayerTeam: "",
    //         Facebook: "",
    //         Twitter: "",
    //         LinkedIn: "",
    //         Email: "",
    //         BasePrice: "",
    //         PlayingPosition: "",
    //         TMSITMSApplicable: "",
    //         ParentName: "",
    //         ParentAddress: "",
    //         ParentEmail: "",
    //         ParentPhone: "",
    //     },
    //     validationSchema: Yup.object({}),

    //     onSubmit: async (data) => {
    //         try {
    //             let finalData = { ...data, photo: handlePriview(uploadedPhotoName), document: handlePriview(uploadedDocumentName) }
    //             console.log(finalData);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     },
    // });

    return (
        <>
            {/* <form onSubmit={formik.handleSubmit}> */}
                <Card>
                    <CardContent>

                        <Grid
                            container
                            spacing={3}
                            sx={{ marginBottom: 2 }}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.FirstName && formik.errors.FirstName)}
                                    fullWidth
                                    helperText={formik.touched.FirstName && formik.errors.FirstName}
                                    label="First Name"
                                    margin="dense"
                                    name="FirstName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.FirstName}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LastName && formik.errors.LastName)}
                                    fullWidth
                                    helperText={formik.touched.LastName && formik.errors.LastName}
                                    label="Last Name"
                                    margin="dense"
                                    name="LastName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LastName}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.AcademyClub && formik.errors.AcademyClub)}
                                    fullWidth
                                    helperText={formik.touched.AcademyClub && formik.errors.AcademyClub}
                                    label="Academy / Club"
                                    margin="dense"
                                    name="AcademyClub"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.AcademyClub}
                                    variant="outlined"
                                />
                            </Grid> */}

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TypeOfPlayerID && formik.errors.TypeOfPlayerID)}
                                    fullWidth
                                    helperText={formik.touched.TypeOfPlayerID && formik.errors.TypeOfPlayerID}
                                    label="Type Of Player"
                                    margin="dense"
                                    name="TypeOfPlayerID"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TypeOfPlayerID}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Gender"
                                        error={Boolean(formik.touched.Gender && formik.errors.Gender)}
                                        fullWidth
                                        helperText={formik.touched.Gender && formik.errors.Gender}
                                        margin="dense"
                                        name="Gender"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.Gender}
                                        variant="outlined"
                                    >
                                        <MenuItem value="male">Male</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.DateOfBirth && formik.errors.DateOfBirth)}
                                    fullWidth
                                    helperText={formik.touched.DateOfBirth && formik.errors.DateOfBirth}
                                    label="Date Of Birth"
                                    margin="dense"
                                    name="DateOfBirth"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="date"
                                    value={formik.values.DateOfBirth}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Address1 && formik.errors.Address1)}
                                    fullWidth
                                    helperText={formik.touched.Address1 && formik.errors.Address1}
                                    label="Address"
                                    margin="dense"
                                    name="Address1"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Address1}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Phone && formik.errors.Phone)}
                                    fullWidth
                                    helperText={formik.touched.Phone && formik.errors.Phone}
                                    label="Phone Number"
                                    margin="dense"
                                    name="Phone"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.Phone}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.EducationQualification && formik.errors.edu)}
                                    fullWidth
                                    helperText={formik.touched.EducationQualification && formik.errors.edu}
                                    label="Educational Qualification"
                                    margin="dense"
                                    name="EducationQualification"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.EducationQualification}
                                    variant="outlined"
                                />
                            </Grid>

                            {/* <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PlayerTeam && formik.errors.PlayerTeam)}
                                    fullWidth
                                    helperText={formik.touched.PlayerTeam && formik.errors.PlayerTeam}
                                    label="Player Team"
                                    margin="dense"
                                    name="PlayerTeam"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PlayerTeam}
                                    variant="outlined"
                                />
                            </Grid> */}

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Email && formik.errors.Email)}
                                    fullWidth
                                    helperText={formik.touched.Email && formik.errors.Email}
                                    label="Email"
                                    margin="dense"
                                    name="Email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.Email}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Facebook && formik.errors.Facebook)}
                                    fullWidth
                                    helperText={formik.touched.Facebook && formik.errors.Facebook}
                                    label="Facebook"
                                    margin="dense"
                                    name="Facebook"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Facebook}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Twitter && formik.errors.Twitter)}
                                    fullWidth
                                    helperText={formik.touched.Twitter && formik.errors.Twitter}
                                    label="Twitter"
                                    margin="dense"
                                    name="Twitter"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Twitter}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.LinkedIn && formik.errors.Linked)}
                                    fullWidth
                                    helperText={formik.touched.LinkedIn && formik.errors.Linked}
                                    label="LinkedIn"
                                    margin="dense"
                                    name="LinkedIn"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.LinkedIn}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.BasePrice && formik.errors.BasePrice)}
                                    fullWidth
                                    helperText={formik.touched.BasePrice && formik.errors.BasePrice}
                                    label="Base Price"
                                    margin="dense"
                                    name="BasePrice"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.BasePrice}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PlayingPosition && formik.errors.PlayingPosition)}
                                    fullWidth
                                    helperText={formik.touched.PlayingPosition && formik.errors.PlayingPosition}
                                    label="Playing Position"
                                    margin="dense"
                                    name="PlayingPosition"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PlayingPosition}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TMSITMSApplicable && formik.errors.TMSITMSApplicable)}
                                    fullWidth
                                    helperText={formik.touched.TMSITMSApplicable && formik.errors.TMSITMSApplicable}
                                    label=" TMS / ITMS Applicable"
                                    margin="dense"
                                    name="TMSITMSApplicable"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TMSITMSApplicable}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            ></Grid>


                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    style={{ display: "none" }}
                                    error={Boolean(formik.touched.photo && formik.errors.photo)}
                                    fullWidth
                                    helperText={formik.touched.photo && formik.errors.photo}
                                    label="Photo"
                                    margin="dense"
                                    name="photo"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={onFileChnage}
                                    id="uploadPlayerPersonalDetailPhoto"
                                    type="file"
                                    value={formik.values.photo}
                                    variant="outlined"
                                />

                                <Button
                                    onClick={() => {
                                        document.getElementById("uploadPlayerPersonalDetailPhoto").click();
                                    }}
                                >
                                    Upload Photo
                                </Button>

                                <Button disabled>
                                    <Typography>{selectedPhotoName}</Typography>
                                </Button>
                                {uploadedPhoto ? <Button disabled variant="contained">Uploaded &#10004; </Button> : <Button variant="contained" disabled={!selectedPhoto} onClick={(e) => {
                                    onFileUpload(selectedPhoto, 1)
                                }} >Upload</Button>}
                                <br></br>
                                {uploadedPhoto ? <><Button target="blank" href={handlePriview(uploadedPhotoName)}>
                                    <Typography>{uploadedPhotoName}</Typography>
                                </Button>
                                    <IconButton onClick={() => {
                                        onDeleteFile(uploadedPhotoName, 1)
                                    }} aria-label="delete" size="large">
                                        <DeleteIcon />
                                    </IconButton></> : ""}
                            </Grid>


                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField

                                    style={{ display: "none" }}
                                    error={Boolean(formik.touched.documents && formik.errors.documents)}
                                    fullWidth
                                    helperText={formik.touched.documents && formik.errors.documents}
                                    label="Documents"
                                    margin="dense"
                                    name="documents"
                                    id="uploadPlayerPersonalDetailDocument"
                                    InputLabelProps={{ shrink: true }}
                                    onBlur={formik.handleBlur}
                                    onChange={onFileChnage}
                                    type="file"
                                    value={formik.values.documents}
                                    variant="outlined"
                                />
                                
                                <Button
                                    onClick={() => {
                                        document.getElementById("uploadPlayerPersonalDetailDocument").click();
                                    }}
                                >
                                    Upload Document
                                </Button>

                                <Button disabled>
                                    <Typography>{selectedDocumentName}</Typography>
                                </Button>
                                {uploadedDocument ? <Button disabled variant="contained">Uploaded &#10004; </Button> : <Button variant="contained" disabled={!selectedDocument} onClick={(e) => {
                                    onFileUpload(selectedDocument, 2)
                                }} >Upload</Button>}
                                <br></br>
                                {uploadedDocument ? <><Button target="blank" href={handlePriview(uploadedDocumentName)}>
                                    <Typography>{uploadedDocumentName}</Typography>
                                </Button>
                                    <IconButton onClick={() => {
                                        onDeleteFile(uploadedDocumentName, 2)
                                    }} aria-label="delete" size="large">
                                        <DeleteIcon />
                                    </IconButton></> : ""}
                            </Grid>

                        </Grid>
                        <Divider />

                        <DialogTitle
                            textAlign="center">
                            Parents Details (Optional)
                        </DialogTitle>

                        <Grid container
                            spacing={3}>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.familyinfoName && formik.errors.familyinfoName)}
                                    fullWidth
                                    helperText={formik.touched.familyinfoName && formik.errors.familyinfoName}
                                    label="Parents Name"
                                    margin="dense"
                                    name="familyinfoName"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.familyinfoName}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.familyinfo.City && formik.errors.familyinfo.City)}
                                    fullWidth
                                    helperText={formik.touched.familyinfo.City && formik.errors.familyinfo.City}
                                    label="Parents Address"
                                    margin="dense"
                                    name="familyinfo.City"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.familyinfo.City}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.familyinfo.Email && formik.errors.familyinfo.Email)}
                                    fullWidth
                                    helperText={formik.touched.familyinfo.Email && formik.errors.familyinfo.Email}
                                    label="Parents Email"
                                    margin="dense"
                                    name="familyinfo.Email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="email"
                                    value={formik.values.familyinfo.Email}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.familyinfo.MobileNo && formik.errors.familyinfo.MobileNo)}
                                    fullWidth
                                    helperText={formik.touched.familyinfo.MobileNo && formik.errors.familyinfo.MobileNo}
                                    label="Parents Phone Number"
                                    margin="dense"
                                    name="familyinfo.MobileNo"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="number"
                                    value={formik.values.familyinfo.MobileNo}
                                    variant="outlined"
                                />
                            </Grid>

                        </Grid>
                        <Grid item md={12} xs={12} textAlign="center">
                            <Button sx={{ marginTop: 2 }} type="submit" variant="outlined" color="primary">
                                Save
                            </Button>
                        </Grid>
                    </CardContent>
                </Card>
            {/* </form> */}
        </>
    );
}
