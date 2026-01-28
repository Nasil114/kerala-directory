import { ServiceSubCategory, DistrictData } from "./education";

const govtJobs: DistrictData[] = [
    {
        district: "കേരള സർക്കാർ (Kerala Govt)",
        items: [
            {
                label: "കേരള പി.എസ്.സി (Kerala PSC)",
                url: "https://thulasi.psc.kerala.gov.in",
                description: "\"തുളസി\" പോർട്ടൽ വഴി വൺ-ടൈം രജിസ്ട്രേഷൻ."
            }
        ]
    },
    {
        district: "കേന്ദ്ര സർക്കാർ (Central Govt)",
        items: [
            {
                label: "യു.പി.എസ്.സി & എസ്.എസ്.സി (UPSC & SSC)",
                url: "https://upsc.gov.in",
                description: "IAS, IPS തുടങ്ങിയ പരീക്ഷകൾക്കും കേന്ദ്ര സർക്കാർ തസ്തികകൾക്കും അപേക്ഷ."
            },
            {
                label: "ബാങ്കിംഗ് മേഖല (IBPS)",
                url: "https://www.ibps.in",
                description: "പൊതുമേഖലാ ബാങ്കുകളിലെ ക്ലറിക്കൽ/ഓഫിസർ പരീക്ഷകൾ."
            },
            {
                label: "റെയിൽവേ (RRB)",
                url: "https://indianrailways.gov.in",
                description: "ഇന്ത്യൻ റെയിൽവേയിലെ അവസരങ്ങൾക്ക് RRB പോർട്ടലുകൾ."
            }
        ]
    }
];

const privateJobs: DistrictData[] = [
    {
        district: "ഐ.ടി & നോളജ് എക്കോണമി",
        items: [
            {
                label: "കേരള നോളജ് ഇക്കോണമി മിഷൻ (KKEM)",
                url: "https://knowledgemission.kerala.gov.in",
                description: "അഭ്യസ്തവിദ്യരായ തൊഴിലന്വേഷകർക്ക് അനുയോജ്യമായ ജോലി കണ്ടെത്താൻ കേരള സർക്കാർ ഒരുക്കുന്ന പ്ലാറ്റ്ഫോം."
            },
            {
                label: "Technopark Jobs",
                url: "https://www.technopark.org/job-search",
                description: "തിരുവനന്തപുരം ടെക്നോപാർക്കിലെ ജോലി അവസരങ്ങൾ."
            },
            {
                label: "Infopark Jobs",
                url: "https://infopark.in/jobs",
                description: "കൊച്ചി ഇൻഫോപാർക്കിലെ ജോലി അവസരങ്ങൾ."
            },
            {
                label: "Cyberpark Jobs",
                url: "https://www.cyberparkkerala.org/careers",
                description: "കോഴിക്കോട് സൈബർപാർക്കിലെ ജോലി അവസരങ്ങൾ."
            }
        ]
    }
];

const jobFairs: DistrictData[] = [
    {
        district: "തൊഴിൽ മേളകൾ (Job Fairs)",
        items: [
            {
                label: "നിയുക്തി (Niyukthi - Employment Exchange)",
                url: "https://employment.kerala.gov.in",
                description: "സംസ്ഥാന എംപ്ലോയ്മെൻ്റ് എക്സ്ചേഞ്ച് വഴി നടത്തുന്ന തൊഴിൽ മേളകൾ."
            },
            {
                label: "National Career Service (NCS)",
                url: "https://www.ncs.gov.in",
                description: "കേന്ദ്ര സർക്കാർ നടത്തുന്ന തൊഴിൽ സേവനങ്ങളും കരിയർ ഗൈഡൻസും."
            }
        ]
    }
];

const overseasJobs: DistrictData[] = [
    {
        district: "വിദേശ തൊഴിൽ (Overseas Jobs)",
        items: [
            {
                label: "നോർക്ക റൂട്ട്സ് (NORKA Roots)",
                url: "https://norkaroots.org",
                description: "പ്രവാസികൾക്കും വിദേശത്ത് ജോലി ആഗ്രഹിക്കുന്നവർക്കുമായി കേരള സർക്കാർ നടത്തുന്ന വിശ്വസനീയമായ സംവിധാനം."
            },
            {
                label: "ODEPC (Overseas Development & Employment)",
                url: "https://odepc.kerala.gov.in",
                description: "വിദേശത്തെ നഴ്സിംഗ്, ടീച്ചിംഗ് മേഖലകളിലെ നിയമനങ്ങൾക്കായി സർക്കാർ ഉടമസ്ഥതയിലുള്ള ഏജൻസി."
            }
        ]
    }
];

const govtTraining: DistrictData[] = [
    {
        district: "സർക്കാർ പരിശീലന കേന്ദ്രങ്ങൾ",
        items: [
            {
                label: "ASAP Kerala (അസാപ് കേരള)",
                url: "https://asapkerala.gov.in",
                description: "നൂതന സാങ്കേതിക വിദ്യകളിൽ (AI, Data Science, Logistics etc.) പരിശീലനം നൽകുന്നു."
            },
            {
                label: "KASE (Kerala Academy for Skills Excellence)",
                url: "https://kase.kerala.gov.in",
                description: "അന്താരാഷ്ട്ര നിലവാരത്തിലുള്ള നൈപുണ്യ പരിശീലനം നൽകുന്ന നോഡൽ ഏജൻസി."
            },
            {
                label: "K-DISC (കെ-ഡിസ്ക്)",
                url: "https://kdisc.kerala.gov.in",
                description: "ഇന്നവേഷൻ പ്രോത്സാഹിപ്പിക്കുന്നതിനും നൈപുണ്യ വികസനത്തിനുമായി പ്രവർത്തിക്കുന്ന സ്ട്രാറ്റജിക് ഗ്രൂപ്പ്."
            }
        ]
    }
];

const onlineCourses: DistrictData[] = [
    {
        district: "സൗജന്യ / ഓൺലൈൻ സർട്ടിഫിക്കറ്റ് കോഴ്സുകൾ",
        items: [
            {
                label: "SWAYAM (സ്വയം)",
                url: "https://swayam.gov.in",
                description: "ഭാരത സർക്കാരിന്റെ വിദ്യാഭ്യാസ മന്ത്രാലയം നടത്തുന്ന പോർട്ടൽ. IIT, IIM കോഴ്സുകൾ സൗജന്യമായി പഠിക്കാം."
            },
            {
                label: "Google Career Certificates",
                url: "https://grow.google/certificates",
                description: "ഡാറ്റാ അനലിറ്റിക്സ്, ഐടി സപ്പോർട്ട്, പ്രോജക്ട് മാനേജ്മെന്റ് സർട്ടിഫിക്കറ്റുകൾ."
            },
            {
                label: "Coursera",
                url: "https://www.coursera.org",
                description: "Google, IBM, Meta തുടങ്ങിയ കമ്പനികളുടെയും സർവ്വകലാശാലകളുടെയും കോഴ്സുകൾ."
            },
            {
                label: "NPTEL",
                url: "https://nptel.ac.in",
                description: "IIT-കളും IISc-യും ചേർന്ന് നടത്തുന്ന പ്ലാറ്റ്ഫോം. എൻജിനീയറിംഗ്, സയൻസ് വിഷയങ്ങൾ."
            },
            {
                label: "edX",
                url: "https://www.edx.org",
                description: "ഹാർവാർഡ്, MIT തുടങ്ങിയ ലോകോത്തര സർവ്വകലാശാലകളിൽ നിന്നുള്ള കോഴ്സുകൾ."
            },
            {
                label: "Udemy",
                url: "https://www.udemy.com",
                description: "വീഡിയോ എഡിറ്റിംഗ്, ഡിജിറ്റൽ മാർക്കറ്റിംഗ്, പ്രോഗ്രാമിംഗ് കോഴ്സുകൾ കുറഞ്ഞ ചിലവിൽ."
            }
        ]
    }
];

export const jobsData: ServiceSubCategory[] = [
    {
        id: "govt-jobs",
        title: "സർക്കാർ ജോലികൾ (Government Jobs)",
        description: "PSC, UPSC, SSC, Bank, Railway",
        data: govtJobs
    },
    {
        id: "private-jobs",
        title: "സ്വകാര്യ മേഖല (Private Sector)",
        description: "IT Parks, Knowledge Economy Mission",
        data: privateJobs
    },
    {
        id: "job-fairs",
        title: "തൊഴിൽ മേളകൾ (Job Fairs)",
        description: "Employment Exchange, NCS",
        data: jobFairs
    },
    {
        id: "overseas-jobs",
        title: "വിദേശ തൊഴിൽ (Overseas Jobs)",
        description: "NORKA, ODEPC",
        data: overseasJobs
    },
    {
        id: "govt-training",
        title: "നൈപുണ്യ വികസനം (Skill Development)",
        description: "ASAP, KASE, K-DISC",
        data: govtTraining
    },
    {
        id: "online-courses",
        title: "ഓൺലൈൻ കോഴ്സുകൾ (Online Courses)",
        description: "SWAYAM, Coursera, Google",
        data: onlineCourses
    },
    {
        id: "language-training",
        title: "ഭാഷാ പഠനം (Language Training)",
        description: "IELTS, OET, Foreign Languages",
        data: [
            {
                district: "English Proficiency Tests",
                items: [
                    {
                        label: "IELTS (International English Language Testing System)",
                        url: "https://www.ielts.org",
                        description: "വിദേശത്ത് പഠിക്കാൻ (Academic), ജോലി/കുടിയേറ്റ ആവശ്യങ്ങൾക്ക് (General Training) വേണ്ടിയുള്ള പരീക്ഷ. UK, Canada, Australia, NZ തുടങ്ങിയ രാജ്യങ്ങളിൽ അംഗീകൃതം."
                    },
                    {
                        label: "OET (Occupational English Test)",
                        url: "https://www.occupationalenglishtest.org",
                        description: "ആരോഗ്യ പ്രവർത്തകർക്ക് (ഡോക്ടർമാർ, നഴ്സുമാർ) വേണ്ടി മാത്രമുള്ള പ്രത്യേക ഇംഗ്ലീഷ് പരീക്ഷ. യുകെ, അയർലണ്ട്, ഓസ്ട്രേലിയ തുടങ്ങിയ രാജ്യങ്ങളിൽ ജോലി ലഭിക്കാൻ സഹായകരമാണ്."
                    },
                    {
                        label: "TOEFL (Test of English as a Foreign Language)",
                        url: "https://www.ets.org/toefl",
                        description: "അമേരിക്ക (USA), കാനഡ തുടങ്ങിയ രാജ്യങ്ങളിലെ സർവ്വകലാശാലകൾ അംഗീകരിക്കുന്ന പരീക്ഷ."
                    }
                ]
            },
            {
                district: "Foreign Languages",
                items: [
                    {
                        label: "Goethe-Zentrum (German Language)",
                        url: "https://trivandrum.goethe-zentrum.org",
                        description: "ജർമ്മനിയിലെ ഉന്നത വിദ്യാഭ്യാസത്തിനും നഴ്സിംഗ് ജോലികൾക്കും ജർമ്മൻ ഭാഷാ പ്രാവീണ്യം (B1/B2 Level) നേടാം."
                    }
                ]
            },
            {
                district: "Communication Skills",
                items: [
                    {
                        label: "Spoken English & Confidence",
                        url: "#",
                        description: "ശരിയായ ഉച്ചാരണം (Pronunciation), വ്യാകരണം (Grammar), ആത്മവിശ്വാസത്തോടെ സംസാരിക്കൽ എന്നിവ മെച്ചപ്പെടുത്താൻ."
                    },
                    {
                        label: "Duolingo",
                        url: "https://www.duolingo.com",
                        description: "സൗജന്യമായി ഭാഷകൾ പഠിക്കാൻ സഹായിക്കുന്ന ആഗോള മൊബൈൽ ആപ്പ്."
                    },
                    {
                        label: "ELSA Speak",
                        url: "https://elsaspeak.com",
                        description: "ഇംഗ്ലീഷ് ഉച്ചാരണം മെച്ചപ്പെടുത്താൻ സഹായിക്കുന്ന ആപ്പ്."
                    }
                ]
            }
        ]
    },
    {
        id: "entrepreneurship",
        title: "സംരംഭകത്വം (Business & Entrepreneurship)",
        description: "Starting Business, Govt Support",
        data: [
            {
                district: "രജിസ്ട്രേഷൻ & ലൈസൻസ്",
                items: [
                    {
                        label: "Udyam Registration (MSME)",
                        url: "https://udyamregistration.gov.in",
                        description: "ചെറുകിട സംരംഭങ്ങൾക്കുള്ള കേന്ദ്ര സർക്കാർ അംഗീകാരം. ബാങ്ക് ലോണുകൾക്കും ആനുകൂല്യങ്ങൾക്കും നിർബന്ധം."
                    },
                    {
                        label: "K-SWIFT (Single Window Clearance)",
                        url: "https://kswift.kerala.gov.in",
                        description: "സംരംഭം തുടങ്ങാനുള്ള അനുമതികളും ലൈസൻസുകളും വേഗത്തിൽ ലഭ്യമാക്കുന്ന ഏകജാലക സംവിധാനം."
                    }
                ]
            },
            {
                district: "സർക്കാർ സഹായങ്ങൾ",
                items: [
                    {
                        label: "Kerala Startup Mission (KSUM)",
                        url: "https://startupmission.kerala.gov.in",
                        description: "ബിസിനസ് ആശയങ്ങൾക്ക് സാങ്കേതിക സഹായം, ഫണ്ടിംഗ്, പരിശീലനം എന്നിവ നൽകുന്ന ഏജൻസി."
                    },
                    {
                        label: "ജില്ലാ വ്യവസായ കേന്ദ്രങ്ങൾ (DIC)",
                        url: "https://industry.kerala.gov.in",
                        description: "സബ്സിഡികൾ, വായ്പകൾ, പ്രോജക്ട് റിപ്പോർട്ട് തയ്യാറാക്കൽ എന്നിവയ്ക്കുള്ള ഔദ്യോഗിക ഓഫീസ്."
                    }
                ]
            }
        ]
    }
];
