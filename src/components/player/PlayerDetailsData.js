export const initialValues = {
  // personal info
  ID: 6,
  FirstName: "Monish",
  LastName: "Barse",
  Gender: "Male",
  DateOfBirth: "1990/01/01",
  Phone: "9876543210",
  Email: "a@gmail.com",
  Password: "Password",
  RecoveryEMail: "a@gmail.com",
  TypeOfPlayerID: 1,
  EducationQualification: "EducationQualification",
  edudocuments: "edudocuments",
  photo: "photo",
  BasePrice: "req.body.BasePrice",
  PlayingPosition: "req.body.PlayingPosition",
  TMSITMSApplicable: 1,
  documents: "req.body.documents",
  LongDescription: "req.body.LongDescription",
  Facebook: "req.body.Facebook",
  Twitter: "req.body.Twitter",
  Linkedin: "req.body.Linkedin",

  // Address
  Address1: "Address1",
  Address2: "Address2",
  City: "City",
  Country: "Country",
  Nationality: "Nationality",
  ZipCode: "ZipCode",
  IsLocal: "0",

  // Player AcademyClub
  playersacademyclub: {
    AcademyID: [0, 49],
    ClubID: [],
  },

  // Document
  Document: {
    DocumentTypeID: "1",
    StatusID: "1",
    FilePath: "documents.pdf",
  },

  // 
  familyinfoName: "",
  familyinfo: {
    Name: "family name",
    City: "nagpur",
    Country: "ind",
    JobTelNo: "1234567890",
    HomeTelNo: "07125683",
    MobileNo: "9823000000",
    Email: "monish@gmail.vom",
    FamilyMember: "2",
  },

  // fitness
  Fitness: {
    PhysicalFitness: "physical",
    LabInfo: "labinfo",
    PastMedication: "no past med",
    DietPlan: "good plan",
    PlayersInjuryID: "1",
  },

  // TMS_ITMS
  TMS_ITMS: {
    TransferdClubID: 1,
    TransferFromDate: "2021-06-13",
    TransferToDate: "2022-06-13",
    MOUDocument: "mou",
    AgreementDocument: "agree",
    OtherDocuments: "other",
  },
};
