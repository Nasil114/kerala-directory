import { ServiceSubCategory, DistrictData } from "./education";

export const agricultureData: ServiceSubCategory[] = [
    {
        id: "schemes",
        title: "കൃഷി പദ്ധതികളും സബ്സിഡികളും",
        description: "AIMS, PM-KISAN, Crop Insurance, SMAM",
        data: [
            {
                district: "സർക്കാർ പദ്ധതികൾ",
                items: [
                    {
                        label: "എയിംസ് പോർട്ടൽ (AIMS)",
                        url: "https://aims.kerala.gov.in",
                        description: "കേരള കൃഷി വകുപ്പിന്റെ ആനുകൂല്യങ്ങൾ ഓൺലൈൻ ആക്കി നൽകുന്ന പോർട്ടൽ. കൃഷി നാശനഷ്ടങ്ങൾക്കും സബ്സിഡികൾക്കും അപേക്ഷിക്കാം."
                    },
                    {
                        label: "പി.എം കിസാൻ (PM-KISAN)",
                        url: "https://pmkisan.gov.in",
                        description: "കൃഷിഭൂമിയുള്ള കർഷകർക്കുള്ള വാർഷിക സഹായം (₹6000)."
                    },
                    {
                        label: "സംസ്ഥാന വിള ഇൻഷുറൻസ് (State Crop Insurance)",
                        url: "https://aims.kerala.gov.in",
                        description: "പ്രകൃതി ക്ഷോഭം, കീടബാധ മുതലായവയ്ക്കുള്ള ഇൻഷുറൻസ് പരിരക്ഷ (20+ വിളകൾ)."
                    },
                    {
                        label: "കാർഷിക യന്ത്രവൽക്കരണ പദ്ധതി (SMAM)",
                        url: "https://agrimachinery.nic.in",
                        description: "ട്രാക്ടർ, ടില്ലർ, പമ്പ്, ഡ്രോൺ എന്നിവയ്ക്ക് 40%–80% സബ്സിഡി."
                    }
                ]
            }
        ]
    },
    {
        id: "marketing",
        title: "വിപണനം & വിൽപ്പന",
        description: "Horticorp, VFPCK, e-NAM",
        data: [
            {
                district: "വിപണന കേന്ദ്രങ്ങൾ",
                items: [
                    {
                        label: "ഹോർട്ടികോർപ്പ് (Horticorp)",
                        url: "https://horticorp.org",
                        description: "കർഷകരിൽ നിന്നുള്ള പച്ചക്കറികൾ വാങ്ങി കൃത്യമായ വില നൽകുന്ന സർക്കാർ ഏജൻസി."
                    },
                    {
                        label: "വി.എഫ്.പി.സി.കെ (VFPCK)",
                        url: "https://vfpck.org",
                        description: "കർഷക കൂട്ടായ്മകൾ വഴി ലേലം വിളിച്ച് പച്ചക്കറികളും പഴങ്ങളും വിറ്റഴിക്കാൻ സൗകര്യം."
                    },
                    {
                        label: "ഇ-നാം (e-NAM)",
                        url: "https://enam.gov.in",
                        description: "കാർഷിക ഉൽപ്പന്നങ്ങൾ ഓൺലൈനായി ഇന്ത്യയാകെ വ്യാപാരികൾക്ക് വിൽക്കാനുള്ള പ്ലാറ്റ്ഫോം."
                    },
                    {
                        label: "ഇക്കോ ഷോപ്പുകൾ (Eco-Shops)",
                        url: "#",
                        description: "ജൈവ ഉൽപ്പന്നങ്ങളും മൂല്യവർധിത ഉൽപ്പന്നങ്ങളും വിൽക്കാനുളള വിപണന കേന്ദ്രങ്ങൾ."
                    }
                ]
            }
        ]
    },
    {
        id: "services",
        title: "സേവനങ്ങളും പോർട്ടലുകളും",
        description: "Soil Testing, KCC, Agmarknet",
        data: [
            {
                district: "കാർഷിക സേവനങ്ങൾ",
                items: [
                    {
                        label: "മണ്ണ് പരിശോധന (Soil Testing)",
                        url: "#",
                        description: "വളപ്രയോഗം ശരിയാക്കാനും ചെലവ് കുറയ്ക്കാനും സഹായിക്കുന്നു. കൃഷിഭവനുകളും സോയിൽ ടെസ്റ്റിംഗ് ലാബുകളും വഴി ലഭ്യം."
                    },
                    {
                        label: "കിസാൻ കോൾ സെന്റർ (KCC)",
                        url: "#",
                        description: "കൃഷി സംശയങ്ങൾക്ക് ടോൾ-ഫ്രീ സേവനം. നമ്പർ: 1800-180-1551 (6 AM - 10 PM)"
                    },
                    {
                        label: "അഗ്‌മാർക്ക്നെറ്റ് (Agmarknet)",
                        url: "https://agmarknet.gov.in",
                        description: "വിപണി വിലകൾ തത്സമയം അറിയാൻ."
                    },
                    {
                        label: "കിസാൻ സുവിധ ആപ്പ്",
                        url: "#",
                        description: "കാലാവസ്ഥ, വിപണി വില, വിതരണക്കാർ, കീടനിയന്ത്രണം എന്നിവ അറിയാൻ. (Google Play Store)"
                    }
                ]
            }
        ]
    },
    {
        id: "training",
        title: "പരിശീലനവും സാങ്കേതിക വിദ്യയും",
        description: "KAU, KVK, Organic Farming",
        data: [
            {
                district: "പരിശീലന കേന്ദ്രങ്ങൾ",
                items: [
                    {
                        label: "കേരള കാർഷിക സർവ്വകലാശാല (KAU)",
                        url: "https://kau.in",
                        description: "കർഷകർക്കുള്ള പരിശീലനവും 'അഗ്രി ഇൻഫർമേഷൻ സെന്റർ' വഴി പിന്തുണയും."
                    },
                    {
                        label: "ഹൈടെക് ഫാമിംഗ് (Hi-Tech Farming)",
                        url: "#",
                        description: "പോളിഹൗസ്, ഡ്രിപ്പ് ഇറിഗേഷൻ, ഹൈഡ്രോപോണിക്സ് എന്നിവക്ക് പരിശീലനവും സാങ്കേതിക സഹായവും."
                    },
                    {
                        label: "കൃഷി വിജ്ഞാന കേന്ദ്രങ്ങൾ (KVK)",
                        url: "#",
                        description: "ജില്ലാതല ഫീൽഡ് ട്രെയിനിംഗ്, കാലാവസ്ഥ അനുയോജ്യമായ കൃഷി രീതികൾ, കീടനിയന്ത്രണ മാർഗങ്ങൾ."
                    },
                    {
                        label: "ജൈവകൃഷി പരിശീലനം (Organic Farming)",
                        url: "#",
                        description: "രാസവളങ്ങൾ ഒഴിവാക്കി ജൈവകൃഷി നടപ്പാക്കുന്നതിനുള്ള പരിശീലനം, സർട്ടിഫിക്കേഷൻ സഹായം."
                    }
                ]
            }
        ]
    }
];
