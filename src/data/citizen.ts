import { ServiceSubCategory } from "./education";
import { akshayaCenters, eDistrictServices, sevanaServices, digiLockerInfo } from "./citizen-digital";
import { identityDocuments } from "./citizen-identity";
import { localGovtServices } from "./citizen-lsg";
import { wasteManagement } from "./citizen-waste";
import { grievanceRedressal } from "./citizen-grievance";
import { emergencyHelplines } from "./citizen-emergency";

export const citizenData: ServiceSubCategory[] = [
    {
        id: "digital-services",
        title: "ഡിജിറ്റൽ സേവനങ്ങൾ",
        description: "Akshaya, e-District, Sevana, DigiLocker",
        classifications: [
            {
                type: "Akshaya",
                heading: "അക്ഷയ ജില്ലാ ഹെൽപ്പ് ലൈൻ നമ്പറുകൾ",
                data: akshayaCenters
            },
            {
                type: "e-District",
                data: eDistrictServices
            },
            {
                type: "Sevana - Civil Registration",
                data: sevanaServices
            },
            {
                type: "DigiLocker",
                data: digiLockerInfo
            }
        ],
        data: []
    },
    {
        id: "identity-docs",
        title: "തിരിച്ചറിയൽ രേഖകൾ",
        description: "Aadhaar, Voter ID, Ration Card, PAN, Passport",
        data: identityDocuments
    },
    {
        id: "lsg-services",
        title: "തദേശ സ്വയംഭരണ സേവനങ്ങൾ",
        description: "Building Permit, Property Tax",
        data: localGovtServices
    },
    {
        id: "waste-management",
        title: "മാലിന്യ നിർമ്മാർജ്ജനം",
        description: "Haritha Karma Sena, Clean Kerala Company",
        data: wasteManagement
    },
    {
        id: "grievance-redressal",
        title: "പരാതി പരിഹാരം",
        description: "CMO Portal, RTI, Pukar, Cyber Crime",
        data: grievanceRedressal
    },
    {
        id: "emergency-helplines",
        title: "അത്യാവശ്യ ഹെൽപ്പ് ലൈൻ",
        description: "Emergency Numbers - Police, Fire, Ambulance",
        data: emergencyHelplines
    }
];

