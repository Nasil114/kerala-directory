import { ServiceSubCategory } from "./education";

export const welfareData: ServiceSubCategory[] = [
    {
        id: "health-schemes",
        title: "ആരോഗ്യ സംരക്ഷണ പദ്ധതികൾ",
        description: "Health Insurance, Medical Aid, Telemedicine",
        data: [
            {
                district: "സർക്കാർ പദ്ധതികൾ",
                items: [
                    { label: "കാരുണ്യ ആരോഗ്യ സുരക്ഷാ പദ്ധതി (KASP)", url: "https://sha.kerala.gov.in", description: "5 ലക്ഷം രൂപ വരെ സൗജന്യ ചികിത്സ (Rs. 5 Lakh Health Insurance)" },
                    { label: "താലോലം (Thalolam)", url: "http://socialsecuritymission.gov.in/schemes", description: "18 വയസിന് താഴെയുള്ള കുട്ടികൾക്ക് സൗജന്യ ചികിത്സ (Free Treatment for Children)" },
                    { label: "മിഠായി (Mittayi)", url: "https://mittayi.kssm.ikm.in", description: "ടൈപ്പ് 1 പ്രമേഹമുള്ള കുട്ടികൾക്ക് സഹായം (Type-1 Diabetes Aid)" },
                    { label: "മെഡിസെപ്പ് (MEDISEP)", url: "https://medisep.kerala.gov.in", description: "സർക്കാർ ജീവനക്കാർക്കുള്ള ഇൻഷുറൻസ് (Govt Employees Insurance)" },
                    { label: "കാരുണ്യ ബെനവലന്റ് ഫണ്ട് (KBF)", url: "https://sha.kerala.gov.in", description: "ധനസഹായം - കിഡ്നി/കാൻസർ/ഹാർട്ട് (Financial Aid for Critical Illness)" }
                ]
            },
            {
                district: "മറ്റ് സേവനങ്ങൾ",
                items: [
                    { label: "ഇ-സഞ്ജീവനി (e-Sanjeevani)", url: "https://esanjeevaniopd.in", description: "സൗജന്യ ഓൺലൈൻ ഡോക്ടർ സേവനം (Free Online OPD)" },
                    { label: "ഹൃദയം (Hridayam)", url: "https://hridyam.kerala.gov.in", description: "കുട്ടികളുടെ ഹൃദയ ശസ്ത്രക്രിയ സഹായം (Cardiac Surgery Aid for Kids)" },
                    "ആശ്വാസധാര - ഡയാലിസിസ്/ഹീമോഫീലിയ സഹായം",
                    "കാൻസർ സുരക്ഷാ പദ്ധതി - കാൻസർ ചികിത്സാ സഹായം"
                ]
            }
        ]
    },
    {
        id: "financial-schemes",
        title: "സാമ്പത്തിക സുരക്ഷ",
        description: "Pension, Life Mission, Relief Funds",
        data: [
            {
                district: "പെൻഷനുകൾ",
                items: [
                    { label: "സാമൂഹ്യ സുരക്ഷാ പെൻഷനുകൾ", url: "https://welfarepension.lsgkerala.gov.in", description: "Vayojana, Widow, Disability Pensions" },
                    { label: "പ്രവാസി ക്ഷേമ പദ്ധതികൾ (NORKA)", url: "https://pravasikerala.org", description: "Pravasi Pension & Insurance" },
                    "കാർഷിക പെൻഷൻ (Farmer's Pension)"
                ]
            },
            {
                district: "സഹായ പദ്ധതികൾ",
                items: [
                    { label: "സ്നേഹപൂർവ്വം (Snehapoorvam)", url: "http://socialsecuritymission.gov.in/schemes", description: "കുട്ടികൾക്കുള്ള ധനസഹായം (Financial Aid for Students)" },
                    { label: "ആശ്വാസകിരണം (Aswasakiranam)", url: "http://socialsecuritymission.gov.in/schemes", description: "കിടപ്പുരോഗികളെ പരിചരിക്കുന്നവർക്ക് സഹായം (Carer Allowance)" },
                    { label: "മംഗല്യ (Mangalya)", url: "http://wcd.kerala.gov.in", description: "വിധവകളുടെ പുനർവിവാഹ സഹായം (Remarriage Aid)" },
                    { label: "മുഖ്യമന്ത്രിയുടെ ദുരിതാശ്വാസ നിധി (CMDRF)", url: "https://cmdrf.kerala.gov.in", description: "Apply for CM's Relief Fund" }
                ]
            },
            {
                district: "ഭവന പദ്ധതികൾ",
                items: [
                    { label: "ലൈഫ് മിഷൻ (Life Mission)", url: "https://lifemission.kerala.gov.in", description: "എല്ലാവർക്കും വീട് (Housing for All)" },
                    { label: "കുടുംബശ്രീ വായ്പകൾ", url: "https://www.kudumbashree.org", description: "Micro-finance & Loans" }
                ]
            }
        ]
    },
    {
        id: "women-welfare",
        title: "സ്ത്രീ ശാക്തീകരണം",
        description: "Safety, Financial Aid, Shelters",
        data: [
            {
                district: "സുരക്ഷ & സഹായം",
                items: [
                    { label: "മിത്ര ഹെൽപ്പ് ലൈൻ (181)", url: "tel:181", description: "24x7 Women Helpline" },
                    { label: "She-Taxi", url: "https://shetaxi.in", description: "Safe Taxi Service for Women" },
                    { label: "വനിതാ കമ്മീഷൻ", url: "http://keralawomenscommission.ni.in", description: "Kerala Women's Commission" },
                    "അപരാജിത (Aparajitha) - 9497996992 (Police Help)"
                ]
            },
            {
                district: "സാമ്പത്തിക ശാക്തീകരണം",
                items: [
                    { label: "കുടുംബശ്രീ (Kudumbashree)", url: "https://www.kudumbashree.org", description: "Women's Self Help Groups" },
                    "അമൃതശ്രീ - Self Help Groups",
                    "രാജീവ് ഗാന്ധി മഹിളാ വികാസ് യോജന"
                ]
            },
            {
                district: "ക്ഷേമ പദ്ധതികൾ",
                items: [
                    "അഭയകിരണം - വിധവകളുടെ സംരക്ഷണം",
                    "സ്നേഹസ്പർശം - അവിവാഹിത അമ്മമാർക്ക് പെൻഷൻ",
                    "സഹായഹസ്തം - സ്വയംതൊഴിൽ ഗ്രാന്റ്"
                ]
            }
        ]
    },
    {
        id: "disability-welfare",
        title: "ഭിന്നശേഷി ക്ഷേമം",
        description: "Pension, UDID, Aids, Scholarships",
        data: [
            {
                district: "പ്രധാന സേവനങ്ങൾ",
                items: [
                    { label: "UDID Card Registration", url: "https://swavlambancard.gov.in", description: "Unique Disability ID Card" },
                    { label: "NISH", url: "https://nish.ac.in", description: "Speech & Hearing Institute" },
                    { label: "സാമൂഹ്യനീതി വകുപ്പ്", url: "http://sjd.kerala.gov.in", description: "Social Justice Dept Portal" }
                ]
            },
            {
                district: "സഹായ പദ്ധതികൾ",
                items: [
                    "ഭിന്നശേഷി പെൻഷൻ (Disability Pension)",
                    "വിദ്യാകിരണം - സ്കോളർഷിപ്പ് പദ്ധതി",
                    "വിജയാമൃതം - കാഷ് അവാർഡ് (Merit Award)",
                    "മാതൃയാനം - യാത്രാ ചെലവ് സഹായം",
                    "സഹചാരി - ചികിത്സാ/ഉപകരണ സഹായം"
                ]
            },
            {
                district: "ഇൻഷുറൻസ്",
                items: [
                    "നിരാമയ (Niramaya) - Health Insurance (Rs. 1 Lakh)",
                    "സ്വാവലംബൻ (Swavlamban) - Health Insurance"
                ]
            }
        ]
    },
    {
        id: "elderly-welfare",
        title: "വയോജന ക്ഷേമം",
        description: "Pension, Care Homes, Medical Aid",
        data: [
            {
                district: "ആരോഗ്യം & സുരക്ഷ",
                items: [
                    { label: "വയോമിത്രം (Vayomithram)", url: "http://socialsecuritymission.gov.in/schemes", description: "Mobile Clinic & Medicine for 65+" },
                    { label: "മന്ദഹാസം (Mandahasam)", url: "http://socialsecuritymission.gov.in/schemes", description: "Free Dentures (പല്ല് സെറ്റ്)" },
                    { label: "Elder Line (14567)", url: "tel:14567", description: "Senior Citizen Helpline" }
                ]
            },
            {
                district: "സേവനങ്ങൾ",
                items: [
                    "വാർദ്ധക്യകാല പെൻഷൻ (Old Age Pension)",
                    "സായംപ്രഭ - പകൽ വീടുകൾ (Day Care Provided)",
                    "വയോമധുരം - ഗ്ലൂക്കോമീറ്റർ സഹായം",
                    "സെക്കൻഡ് ഇന്നിങ്സ് ഹോം - Rehabilitation"
                ]
            }
        ]
    },
    {
        id: "child-welfare",
        title: "കുട്ടികളുടെ ക്ഷേമം",
        description: "Protection, Health, Education",
        data: [
            {
                district: "സേവനങ്ങൾ",
                items: [
                    { label: "Childline (1098)", url: "tel:1098", description: "24x7 Child Help Line" },
                    { label: "വനിതാ ശിശു വികസന വകുപ്പ്", url: "https://wcd.kerala.gov.in", description: "WCD Kerala Portal" },
                    { label: "ചിരി (Chiri)", url: "tel:9497900200", description: "Child Counselling Helpline" }
                ]
            },
            {
                district: "പദ്ധതികൾ",
                items: [
                    "താലോലം - സൗജന്യ ചികിത്സ (Free Treatment)",
                    "അങ്കണവാടി പോഷകാഹാര പദ്ധതി",
                    "ശ്രുതിതരംഗം - കോക്ലിയർ ഇംപ്ലാന്റ്",
                    "നിർഭയ - പെൺകുട്ടികളുടെ സംരക്ഷണം"
                ]
            }
        ]
    },
    {
        id: "rehab-centers",
        title: "പുനരധിവാസ കേന്ദ്രങ്ങൾ",
        description: "Shelters, Old Age Homes",
        data: [
            {
                district: "സ്ഥാപനങ്ങൾ",
                items: [
                    { label: "ഓർഫനേജ് കൺട്രോൾ ബോർഡ്", url: "https://ocb.kerala.gov.in", description: "List of Recognized Institutions" },
                    "സർക്കാർ വൃദ്ധ സദനములు (Govt Old Age Homes)",
                    "മഹിളാ മന്ദിരങ്ങൾ (Women's Shelters)",
                    "വൺ സ്റ്റോപ്പ് സെന്ററുകൾ (Sakhi)",
                    "BUDS Schools & Rehabilitation Centres (BRC)"
                ]
            }
        ]
    },
    {
        id: "welfare-boards",
        title: "ക്ഷേമനിധി ബോർഡുകൾ",
        description: "Labor & Welfare Fund Boards",
        data: [
            {
                district: "പ്രധാന ബോർഡുകൾ",
                items: [
                    { label: "Welfare Fund Board Portal", url: "https://welfarefund.kerala.gov.in", description: "രജിസ്ട്രേഷൻ & അംശാദായം (Payment)" },
                    { label: "Labour Commissionerate", url: "https://lc.kerala.gov.in", description: "Labour Dept Official Portal" }
                ]
            },
            {
                district: "ലിസ്റ്റ്",
                items: [
                    "നിർമ്മാണ തൊഴിലാളി ക്ഷേമനിധി (Construction Workers)",
                    "കർഷക തൊഴിലാളി ക്ഷേമനിധി (Agri Workers)",
                    "മോട്ടോർ തൊഴിലാളി ക്ഷേമനിധി (Motor Workers)",
                    "പ്രവാസി ക്ഷേമനിധി (Pravasi/NRK)",
                    "മത്സ്യ തൊഴിലാളി ക്ഷേമനിധി (Fishermen)",
                    "തയ്യൽ തൊഴിലാളി ക്ഷേമനിധി (Tailors)",
                    "ചുമട്ടു തൊഴിലാളി ക്ഷേമനിധി (Headload Workers)",
                    "കയർ / കൈത്തറി / കശുവണ്ടി തൊഴിലാളി ബോർഡുകൾ",
                    "വ്യാപാരി വ്യാവസായി ക്ഷേമനിധി (Traders)"
                ]
            }
        ]
    },
    {
        id: "helplines",
        title: "ഹെൽപ്പ് ലൈൻ",
        description: "Emergency Numbers",
        data: [
            {
                district: "അടിയന്തര സേവനങ്ങൾ",
                items: [
                    { label: "Police / ERSS", url: "tel:112", description: "Emergency Response Support System" },
                    { label: "Ambulance", url: "tel:108", description: "Kanivu 108 Ambulance" },
                    { label: "Fire Force", url: "tel:101", description: "Fire & Rescue" },
                    { label: "DISHA Health", url: "tel:1056", description: "Health Helpline / Telemedicine" }
                ]
            },
            {
                district: "മറ്റ് ഹെൽപ്പ് ലൈനുകൾ",
                items: [
                    { label: "Women Helpline (Mitra)", url: "tel:181", description: "Women Safety" },
                    { label: "Child Helpline", url: "tel:1098", description: "Child Protection" },
                    { label: "Cyber Crime", url: "tel:1930", description: "Cyber Fraud Reporting" },
                    { label: "Senior Citizen (Elder Line)", url: "tel:14567", description: "Helpline for Elderly" },
                    { label: "Coastal Police", url: "tel:1093", description: "Coastal Emergency" }
                ]
            }
        ]
    },
    {
        id: "grievance",
        title: "പരാതി പരിഹാരം",
        description: "CMO, Grievance Portals",
        data: [
            {
                district: "ഓൺലൈൻ പോർട്ടലുകൾ",
                items: [
                    { label: "CMO Portal", url: "https://cmo.kerala.gov.in", description: "മുഖ്യമന്ത്രിയുടെ പരാതി പരിഹാര സെൽ (CM's Grievance Cell)" },
                    { label: "ILGMS (LSGD)", url: "https://services.lsgkerala.gov.in", description: "തദ്ദേശ സ്ഥാപനങ്ങളിലെ പരാതികൾ (Panchayat/Municipality)" },
                    { label: "SPARK", url: "https://spark.kerala.gov.in", description: "Govt Employees Service Matters" },
                    { label: "Consumer Court", url: "https://edaakhil.nic.in", description: "Consumer Complaints (ഇ-ദാഖിൽ)" }
                ]
            }
        ]
    }
];
