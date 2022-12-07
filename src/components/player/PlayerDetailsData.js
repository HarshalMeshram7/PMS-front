export const initialValues = {
  // Personal Information
  ID: 6,
  PersonalFirstName: "Monish",
  PersonalLastName: "Barse",
  PersonalGender: "Male",
  PersonalDateOfBirth: "1990-01-01",
  PersonalPhone: "9876543210",
  PersonalEmail: "a@gmail.com",
  PersonalPassword: "Password",
  PersonalRecoveryEMail: "a@gmail.com",
  PersonalTypeOfPlayerID: 1,
  PersonalEducationQualification: "EducationQualification",
  Personaledudocuments: "edudocuments",
  Personalphoto: "photo",
  PersonalBasePrice: "5555",
  PersonalPlayingPosition: "req.body.PlayingPosition",
  PersonalTMSITMSApplicable: 1,
  Personaldocuments: "req.body.documents",
  PersonalLongDescription: "req.body.LongDescription",
  PersonalFacebook: "req.body.Facebook",
  PersonalTwitter: "req.body.Twitter",
  PersonalLinkedIn: "req.body.Linkedin",

  // Address
  Address1: "Address1",
  Address2: "Address2",
  City: "Nagpur",
  Country: "India",
  Nationality: "Nationality",
  ZipCode: "ZipCode",
  IsLocal: "0",

  // Player AcademyClub
  playersacademyclub: {
    AcademyID: [0, 49],
    ClubID: [],
  },

  // Document
  DocumentTypeID: "1",
  DocumentStatusID: "1",
  DocumentFilePath: "documents.pdf",

  Document: {
    DocumentTypeID: "1",
    StatusID: "1",
    FilePath: "documents.pdf",
  },

  // Parents Information
  familyinfoName: "Family name ok",
  familyinfoCity: "Family City ok",
  familyinfoCountry: "Family country ok",
  familyinfoJobTelNo: "",
  familyinfoHomeTelNo: "",
  familyinfoMobileNo: "78888",
  familyinfoEmail: "Family mail ok",
  familyinfoFamilyMember: "",


  // TMS_ITMS
  TMS_ITMSTransferdClubID: 1,
  TMS_ITMSTransferredToWhichClub: "to india 11",
  TMS_ITMSTransferFromDate: "2021-06-13",
  TMS_ITMSTransferToDate: "2022-06-14",
  TMS_ITMSMOUDocument: "mou",
  TMS_ITMSAgreementDocument: "agree",
  TMS_ITMSOtherDocuments: "other",
  TMS_ITMSPaymentDetails: "other ok",      // not in data base table


  // Fitness
  FitnessPhysicalFitnessInfo: "physical ok",
  FitnessLaboratoryInfo: "labinfo ok",
  FitnessPastMedication: "no past med ok",
  FitnessCurrentMedication: "no past med ok",  // not in data base table
  FitnessPlayersInjuryID: 1,
  FitnessDietPlan: 1,
  FitnessTestDetails: "tested ok",    // not in data base table
  FitnessTestConductedDate: "2021-06-13",    // not in data base table
  FitnessTestResult: "tested",   // not in data base table


  // Training Module
  TrainingShortTerm: "ok",  // not in data base table
  TrainingLongTerm: "ok",   // not in data base table
  TrainingSpecial: "ok",    // not in data base table


  //Training Management
  ManagementPlan: "tested",    // not in data base table
  ManagementGoalSetting: "tested",   // not in data base table


  //Profile


  //Player Statistic
  StaticMatchesPlayed: "checked",     // not in data base table
  StaticPointScore: "checked",      // not in data base table
  StaticPenaltyScore: "checked",      // not in data base table
  StaticVoilations: "checked",      // not in data base table
  StaticDisqualification: "checked",      // not in data base table


  //Evaluation


  //Communication
  CommunicationCoaches: "checked",      // not in data base table
  CommunicationTeamMember: "checked",     // not in data base table
  CommunicationGroupMessaging: "checked",     // not in data base table
  CommunicationLiveChat: "checked",     // not in data base table
  CommunicationNotificationRemainder: "checked",      // not in data base table


};

export const DataModel = (data) => {
  console.log(data)
  return new Promise(function (resolve, reject) {
    let DataModel =
    {
      "ID": data.ID,
      "FirstName": data.PersonalFirstName,
      "LastName": data.PersonalLastName,
      "Gender": data.PersonalGender,
      "DateOfBirth": data.PersonalDateOfBirth,
      "Phone": data.PersonalPhone,
      "Email": data.PersonalEmail,
      "Password": data.PersonalPassword,
      "RecoveryEMail": data.PersonalRecoveryEMail,
      "TypeOfPlayerID": data.PersonalTypeOfPlayerID,
      "EducationQualification": data.PersonalEducationQualification,
      "edudocuments": data.Personaledudocuments,
      "photo": data.Personalphoto,
      "BasePrice": data.PersonalBasePrice,
      "PlayingPosition": data.PersonalPlayingPosition,
      "TMSITMSApplicable": data.PersonalTMSITMSApplicable,
      "documents": data.Personaldocuments,
      "LongDescription": data.PersonalLongDescription,
      "Facebook": data.PersonalFacebook,
      "Twitter": data.PersonalTwitter,
      "Linkedin": data.PersonalLinkedIn,

      "playersacademyclub": {
        "AcademyID": [0, 49],
        "ClubID": []
      },

      "Address":
      {
        "Address1": data.Address1,
        "Address2": data.Address2,
        "City": data.City,
        "Country": data.Country,
        "Nationality": data.Nationality,
        "ZipCode": data.ZipCode,
        "IsLocal": data.IsLocal,
      },

      "Document":
      {
        "DocumentTypeID": "1",
        "StatusID": "1",
        "FilePath": "documents.pdf"
      },

      "familyinfo":
      {
        "Name": data.familyinfoName,
        "City": data.familyinfoCity,
        "Country": data.familyinfoCountry,
        "JobTelNo": data.familyinfoJobTelNo,
        "HomeTelNo": data.familyinfoHomeTelNo,
        "MobileNo": data.familyinfoMobileNo,
        "Email": data.familyinfoEmail,
        "FamilyMember": data.familyinfoFamilyMember,
      },

      "TMS_ITMS":
      {
        "TransferdClubID": data.TMS_ITMSTransferdClubID,
        "TransferFromDate": data.TMS_ITMSTransferFromDate,
        "TransferToDate": data.TMS_ITMSTransferToDate,
        "MOUDocument": data.TMS_ITMSMOUDocument,
        "AgreementDocument": data.TMS_ITMSAgreementDocument,
        "OtherDocuments": data.TMS_ITMSOtherDocuments,
      },

      "Fitness":
      {
        "PhysicalFitness": data.FitnessPhysicalFitnessInfo,
        "LabInfo": data.FitnessLaboratoryInfo,
        "PastMedication": data.FitnessPastMedication,
        "DietPlan": data.FitnessDietPlan,
        "PlayersInjuryID": data.FitnessPlayersInjuryID,
      },
    }
    resolve(DataModel)
  })


}


