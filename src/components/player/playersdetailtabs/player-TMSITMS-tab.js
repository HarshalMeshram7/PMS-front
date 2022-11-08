import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

import { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import uploadFileToBlob, { deleteBlob, handlePriview, getFileName } from "src/utils/azureBlob";
import { IconButton, Typography } from "@mui/material";

export default function PlayerTMSITMSTab() {

    const [loading, setLoading] = useState();

  
  //  Document Upload
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedDocumentName, setSelectedDocumentName] = useState("");

  const [uploadedDocument, setUploadedDocument] = useState(false);
  const [uploadedDocumentName, setUploadedDocumentName] = useState("");

  const onFileChnage = (e) => {
   
    if (e.target.name == "documentation") {
      setUploadedDocument(false)
      setSelectedDocument(e.target.files[0])
      setSelectedDocumentName(e.target.files[0].name)
    }
  }

  const onFileUpload = async (file, id) => {
    setLoading(true)

    // *** UPLOAD TO AZURE STORAGE ***
    const blobsInContainer = await uploadFileToBlob(file).then(() => {

      
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

        if (id == 2) {
          setSelectedDocument(null);
          setUploadedDocumentName("");
          setUploadedDocument(false);
        }

      })

  }



    const formik = useFormik({
        initialValues: {
            TransferredToWhichClub: "",
            PeriodOfTransfer: "",
            documentation: "",
            MOU: "",
            Agreement: "",
            PaymentDetails: "",

        },
        validationSchema: Yup.object({}),

        onSubmit: async (data) => {
            try {
                let finalData = { ...data, document: handlePriview(uploadedDocumentName) }
                console.log(finalData);
            } catch (error) {
                console.log(error);
            }
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Card>
                    <CardContent>

                        <Grid
                            container
                            spacing={3}
                        >
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.TransferredToWhichClub && formik.errors.TransferredToWhichClub)}
                                    fullWidth
                                    helperText={formik.touched.TransferredToWhichClub && formik.errors.TransferredToWhichClub}
                                    label="Transferred To Which Club"
                                    margin="dense"
                                    name="TransferredToWhichClub"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.TransferredToWhichClub}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PeriodOfTransfer && formik.errors.PeriodOfTransfer)}
                                    fullWidth
                                    helperText={formik.touched.PeriodOfTransfer && formik.errors.PeriodOfTransfer}
                                    label="Period Of Transfer"
                                    margin="dense"
                                    name="PeriodOfTransfer"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PeriodOfTransfer}
                                    variant="outlined"
                                />
                            </Grid>

                           
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.MOU && formik.errors.MOU)}
                                    fullWidth
                                    helperText={formik.touched.MOU && formik.errors.MOU}
                                    label="MOU"
                                    margin="dense"
                                    name="MOU"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.MOU}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.Agreement && formik.errors.Agreement)}
                                    fullWidth
                                    helperText={formik.touched.Agreement && formik.errors.Agreement}
                                    label="Agreement"
                                    margin="dense"
                                    name="Agreement"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.Agreement}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    error={Boolean(formik.touched.PaymentDetails && formik.errors.PaymentDetails)}
                                    fullWidth
                                    helperText={formik.touched.PaymentDetails && formik.errors.PaymentDetails}
                                    label="Payment Details"
                                    margin="dense"
                                    name="PaymentDetails"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.PaymentDetails}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    style={{ display: "none" }}
                                    error={Boolean(formik.touched.documentation && formik.errors.documentation)}
                                    fullWidth
                                    helperText={formik.touched.documentation && formik.errors.documentation}
                                    label="Documentation"
                                    id="uploadPlayerTMSITMSDocument"
                                    margin="dense"
                                    InputLabelProps={{ shrink: true }}
                                    name="documentation"
                                    onBlur={formik.handleBlur}
                                    onChange={onFileChnage}
                                    type="file"
                                    value={formik.values.documentation}
                                    variant="outlined"
                                />
                                <Button
                                    onClick={() => {
                                        document.getElementById("uploadPlayerTMSITMSDocument").click();
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


                            <Grid item md={12} xs={12} textAlign="center">
                                <Button type="submit" variant="outlined" color="primary">
                                    Save
                                </Button>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </form>
        </>
    );
}
