import { ServiceSubCategory } from "./education";
import { tertiaryCareCenters, secondaryCareCenters, wcHospitals, specializedCenters } from "./health-govt";
import { ayurvedaHospitals } from "./health-ayurveda";
import { homeoHospitals } from "./health-homeo";
import { bloodBanks } from "./health-blood";
import { deaddictionCenters } from "./health-deaddiction";
import { emergencyServices } from "./health-emergency";
import { fitnessCenters } from "./health-fitness";
import { welfarePrograms } from "./health-welfare-programs";
import { healthSchemes } from "./health-schemes";

export const healthData: ServiceSubCategory[] = [
    {
        id: "medical-colleges",
        title: "മെഡിക്കൽ കോളേജുകൾ",
        description: "Govt Medical Colleges & Tertiary Care",
        data: tertiaryCareCenters
    },
    {
        id: "hospitals",
        title: "ജില്ലാ / ജനറൽ ആശുപത്രികൾ",
        description: "General & District Hospitals",
        data: secondaryCareCenters
    },
    {
        id: "wc-hospitals",
        title: "സ്ത്രീകളുടെയും കുട്ടികളുടെയും ആശുപത്രികൾ",
        description: "W&C Hospitals",
        data: wcHospitals
    },
    {
        id: "spec-centers",
        title: "പ്രത്യേക ചികിത്സാ കേന്ദ്രങ്ങൾ",
        description: "Specialized Care Centers",
        data: specializedCenters
    },
    {
        id: "ayurveda",
        title: "ആയുർവേദ ആശുപത്രികൾ",
        description: "Govt Ayurveda Hospitals",
        data: ayurvedaHospitals
    },
    {
        id: "homeo",
        title: "ഹോമിയോപ്പതി ആശുപത്രികൾ",
        description: "Govt Homeopathy Hospitals",
        data: homeoHospitals
    },
    {
        id: "blood-banks",
        title: "രക്തബാങ്കുകൾ",
        description: "District-wise Main Blood Banks",
        data: bloodBanks
    },
    {
        id: "deaddiction",
        title: "ഡി-അഡിക്ഷൻ സെന്ററുകൾ",
        description: "Govt De-addiction Centers",
        data: deaddictionCenters
    },
    {
        id: "health-schemes",
        title: "ഇൻഷുറൻസ് & സഹായ പദ്ധതികൾ",
        description: "Health Insurance & Assistance Schemes",
        data: healthSchemes
    },
    {
        id: "emergency-services",
        title: "അടിയന്തര സേവനങ്ങൾ",
        description: "Emergency Helplines & Services",
        data: emergencyServices
    },
    {
        id: "fitness-yoga",
        title: "ഫിറ്റ്നസ് & യോഗ",
        description: "Government Fitness Centers & Yoga",
        data: fitnessCenters
    },
    {
        id: "welfare-programs",
        title: "പ്രത്യേക വിഭാഗങ്ങൾക്കുള്ള പദ്ധതികൾ",
        description: "Special Programs for Elderly, Differently-abled & Financial Aid",
        data: welfarePrograms
    }
];
