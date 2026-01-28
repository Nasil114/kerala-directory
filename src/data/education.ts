import { artsScienceColleges } from "./colleges-arts";
import { engineeringColleges } from "./colleges-engineering";
import { medicalColleges } from "./colleges-medical";
import { polytechnicColleges } from "./colleges-poly";
import { iasCoachingCenters } from "./coaching-ias";
import { pscCoachingCenters } from "./coaching-psc";
import { entranceCoachingCenters } from "./coaching-entrance";
import { bankCoachingCenters } from "./coaching-bank";
import { publicLibraries } from "./libraries-public";
import { digitalLibraryPortals } from "./libraries-digital";

export type LinkItem = {
    label: string;
    url: string;
    description?: string;
};

export type DistrictData = {
    district: string;
    items: (string | LinkItem)[];
};

export type CollegeClassification = {
    type: string; // e.g., "Government", "Aided", "Self-financing"
    data: DistrictData[];
    heading?: string;
};

export type ServiceSubCategory = {
    id: string;
    title: string;
    data?: DistrictData[]; // Keep optional for backward compatibility
    classifications?: CollegeClassification[]; // New field for classified data
    description?: string;
};

export const educationData: ServiceSubCategory[] = [
    {
        id: "colleges-arts",
        title: "ആർട്സ് & സയൻസ് കോളേജുകൾ",
        description: "Govt, Aided & Self-financing Arts & Science Colleges",
        classifications: artsScienceColleges,
        data: []
    },
    {
        id: "colleges-engineering",
        title: "എഞ്ചിനീയറിംഗ് കോളേജുകൾ",
        description: "Govt, Aided & Controlled Engineering Colleges",
        classifications: engineeringColleges,
        data: []
    },
    {
        id: "colleges-medical",
        title: "മെഡിക്കൽ കോളേജുകൾ",
        description: "Govt Medical, Dental & Ayurveda Colleges",
        classifications: medicalColleges,
        data: []
    },
    {
        id: "colleges-poly",
        title: "പോളിടെക്നിക് കോളേജുകൾ",
        description: "Govt & Aided Polytechnic Colleges",
        classifications: polytechnicColleges,
        data: []
    },
    {
        id: "ias-coaching",
        title: "IAS / സിവിൽ സർവീസ് പരിശീലനം",
        description: "Civil Service Academies & Libraries",
        data: iasCoachingCenters
    },
    {
        id: "psc-coaching",
        title: "PSC / KAS പരിശീലനം",
        description: "PSC, KAS Coaching Centers",
        data: pscCoachingCenters
    },
    {
        id: "entrance-coaching",
        title: "മെഡിക്കൽ / എഞ്ചിനീയറിംഗ് എൻട്രൻസ്",
        description: "NEET, JEE Coaching Centers",
        data: entranceCoachingCenters
    },
    {
        id: "bank-coaching",
        title: "ബാങ്ക് / റെയിൽവേ / SSC പരിശീലനം",
        description: "Bank, RRB, SSC Coaching",
        data: bankCoachingCenters
    },
    {
        id: "scholarships",
        title: "സ്കോളർഷിപ്പ് പോർട്ടലുകൾ",
        description: "Government & Private Scholarships",
        data: [
            {
                district: "കേന്ദ്ര സർക്കാർ",
                items: [
                    { label: "National Scholarship Portal (NSP)", url: "https://scholarships.gov.in", description: "കേന്ദ്ര സർക്കാരിലെ എല്ലാ സ്കോളർഷിപ്പുകളും." },
                    { label: "AICTE Scholarships (Pragati, Saksham)", url: "https://www.aicte-india.org", description: "എഞ്ചിനീയറിംഗ്/ടെക്നിക്കൽ വിദ്യാർഥികൾക്കുള്ള പദ്ധതികൾ." },
                    { label: "INSPIRE Scholarship (Science)", url: "https://online-inspire.gov.in", description: "സയൻസ് വിഷയങ്ങളിൽ ഉപരിപഠനം ചെയ്യുന്നവർക്ക്." },
                    { label: "UGC Scholarships (PG/Research)", url: "https://www.ugc.gov.in", description: "PG/റിസർച്ച് വിദ്യാർഥികൾക്കുള്ള വിവിധ സ്കോളർഷിപ്പുകൾ." },
                    { label: "MOMA Scholarship (Merit-cum-Means)", url: "https://scholarships.gov.in", description: "മെഡിക്കൽ/എഞ്ചിനീയറിംഗ്/ബിസിനസ് കോഴ്‌സുകൾക്ക് വാർഷിക ധനസഹായം." }
                ]
            },
            {
                district: "കേരള സർക്കാർ",
                items: [
                    { label: "DCE Scholarship Kerala (College Ed)", url: "http://dcescholarship.kerala.gov.in", description: "കേരള കോളേജ് വിദ്യാഭ്യാസ വകുപ്പ് നൽകുന്ന സ്കോളർഷിപ്പുകൾ." },
                    { label: "Minority Welfare Scholarship", url: "http://minoritywelfare.kerala.gov.in", description: "ന്യൂനപക്ഷ വിഭാഗങ്ങൾക്കുള്ള പ്രത്യേക പദ്ധതികൾ." },
                    { label: "E-Grants (Vidyasiri, Post-Matric)", url: "https://egrantz.kerala.gov.in", description: "പിന്നാക്ക വിഭാഗങ്ങൾക്കും ഹോസ്റ്റൽ ഫീസിനുമുള്ള സഹായം." },
                    { label: "CH Mohammed Koya Scholarship", url: "http://minoritywelfare.kerala.gov.in", description: "മുസ്ലിം/ലത്തീൻ/പരിവർത്തിത ക്രിസ്ത്യൻ പെൺകുട്ടികൾക്ക് സഹായം." },
                    { label: "KPCR Fee Concession", url: "http://dcescholarship.kerala.gov.in", description: "കേരള കോളേജ് വിദ്യാർഥികൾക്ക് ഫീസ് ഇളവ്." },
                    { label: "KSCSTE Research Fellowship", url: "https://kscste.kerala.gov.in", description: "സയൻസ് പ്രോജക്ടുകളും റിസർച്ചും ചെയ്യാൻ സഹായം." },
                    { label: "Overseas Scholarship (SC/ST)", url: "https://scholarship.itschool.gov.in", description: "വിദേശ സർവ്വകലാശാലകളിൽ പഠിക്കാൻ ധനസഹായം." }
                ]
            },
            {
                district: "സ്കൂൾ തലത്തിലുള്ളവ",
                items: [
                    { label: "NTSE (Class 10)", url: "https://ncert.nic.in", description: "പത്താം ക്ലാസ് വിദ്യാർഥികൾക്കുള്ള NCERT സ്കോളർഷിപ്പ്." },
                    { label: "NMMS (Class 8)", url: "http://nmmse.kerala.gov.in", description: "എട്ടാം ക്ലാസ് വിദ്യാർഥികൾക്കുള്ള National Means cum Merit Scholarship." }
                ]
            },
            {
                district: "സ്വകാര്യ / മറ്റുള്ളവ",
                items: [
                    { label: "LIC Golden Jubilee Scholarship", url: "https://licindia.in", description: "സാമ്പത്തികമായി പിന്നാക്കം നിൽക്കുന്ന കുടുംബങ്ങളിലെ കുട്ടികൾക്ക്." },
                    { label: "Federal Bank Hormis Memorial Foundation", url: "https://www.federalbank.co.in", description: "മെഡിക്കൽ/എഞ്ചിനീയറിംഗ്/അഗ്രികൾച്ചർ പഠിക്കുന്നവർക്ക്." },
                    { label: "Sitaram Jindal Foundation", url: "https://sitaramjindalfoundation.org", description: "എല്ലാ വിഭാഗം വിദ്യാർഥികൾക്കുള്ള സഹായ പദ്ധതി." }
                ]
            }
        ]
    },
    {
        id: "public-libraries",
        title: "പൊതു ലൈബ്രറികൾ",
        description: "Public Libraries & Reading Rooms",
        data: publicLibraries
    },
    {
        id: "digital-libraries",
        title: "ഡിജിറ്റൽ ലൈബ്രറികൾ",
        description: "National & International Digital Portals",
        data: digitalLibraryPortals
    }
];
