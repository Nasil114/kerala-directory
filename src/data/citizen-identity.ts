import { DistrictData, LinkItem } from "./education";

export const identityDocuments: DistrictData[] = [
    {
        district: "1. ആധാർ കാർഡ് (Aadhaar Card)",
        items: [
            "ഇന്ത്യയിലെ ഏറ്റവും പ്രധാനപ്പെട്ട തിരിച്ചറിയൽ രേഖയാണിത്. യുണീക് ഐഡന്റിഫിക്കേഷൻ അതോറിറ്റി ഓഫ് ഇന്ത്യ (UIDAI) ആണ് ഇത് നിയന്ത്രിക്കുന്നത്.",
            {
                label: "പ്രധാന സേവനങ്ങൾ",
                url: "https://myaadhaar.uidai.gov.in",
                description: "പുതിയ ആധാർ എൻറോൾമെന്റ്, ബയോമെട്രിക് പുതുക്കൽ (5, 15 വയസ്സിൽ നിർബന്ധം), വിലാസം മാറ്റൽ, മൊബൈൽ നമ്പർ ലിങ്ക് ചെയ്യൽ, ആധാർ കാർഡ് ഡൗൺലോഡ് ചെയ്യൽ"
            },
            "ശ്രദ്ധിക്കാൻ: 10 വർഷത്തിലൊരിക്കൽ ആധാറിലെ രേഖകൾ (Identity & Address Proof) പുതുക്കുന്നത് ഇപ്പോൾ നിർബന്ധമാക്കിയിട്ടുണ്ട്. ഇത് ഓൺലൈനായോ അക്ഷയ കേന്ദ്രങ്ങൾ വഴിയോ ചെയ്യാം.",
            {
                label: "MyAadhaar Portal",
                url: "https://myaadhaar.uidai.gov.in",
                description: "ഔദ്യോഗിക ആധാർ പോർട്ടൽ"
            }
        ]
    },
    {
        district: "2. വോട്ടർ ഐഡി (Voter ID / EPIC)",
        items: [
            "തിരഞ്ഞെടുപ്പ് കമ്മീഷൻ നൽകുന്ന ഈ രേഖ വോട്ട് ചെയ്യുന്നതിനും ഔദ്യോഗിക തിരിച്ചറിയൽ രേഖയായും ഉപയോഗിക്കുന്നു.",
            {
                label: "പ്രധാന സേവനങ്ങൾ",
                url: "https://voters.eci.gov.in",
                description: "പുതിയ വോട്ടർ പട്ടികയിൽ പേര് ചേർക്കൽ (Form 6), വോട്ടർ കാർഡിലെ തിരുത്തലുകൾ (Form 8), മരിച്ചവരുടെയോ താമസം മാറിയവരുടെയോ പേര് ഒഴിവാക്കൽ (Form 7), വോട്ടർ ഐഡി ആധാറുമായി ലിങ്ക് ചെയ്യൽ"
            },
            {
                label: "Voters Service Portal",
                url: "https://voters.eci.gov.in",
                description: "ഇലക്ഷൻ കമ്മീഷൻ ഓഫ് ഇന്ത്യ പോർട്ടൽ"
            }
        ]
    },
    {
        district: "3. റേഷൻ കാർഡ് (Ration Card)",
        items: [
            "ഭക്ഷ്യ-സിവിൽ സപ്ലൈസ് വകുപ്പ് നൽകുന്ന റേഷൻ കാർഡ് കുറഞ്ഞ നിരക്കിൽ ഭക്ഷ്യധാന്യങ്ങൾ ലഭിക്കുന്നതിനും ഒരു അഡ്രസ് പ്രൂഫ് ആയും ഉപയോഗിക്കുന്നു.",
            {
                label: "പ്രധാന സേവനങ്ങൾ",
                url: "https://civilsupplieskerala.gov.in",
                description: "പുതിയ റേഷൻ കാർഡിനുള്ള അപേക്ഷ, കുടുംബാംഗങ്ങളെ ചേർക്കൽ അല്ലെങ്കിൽ ഒഴിവാക്കൽ, കാർഡ് മാറ്റം (ഉദാഹരണത്തിന് താലൂക്ക് മാറ്റം), കാർഡ് തരം മാറ്റൽ (Non-Priority-ൽ നിന്നും Priority-ലേക്ക്), വരുമാന വിവരങ്ങൾ പുതുക്കൽ"
            },
            {
                label: "Civil Supplies Kerala",
                url: "https://civilsupplieskerala.gov.in",
                description: "കേരള സിവിൽ സപ്ലൈസ് വകുപ്പ് പോർട്ടൽ"
            }
        ]
    },
    {
        district: "4. പാൻ കാർഡ് (PAN Card)",
        items: [
            "ആദായനികുതി വകുപ്പ് നൽകുന്ന പാൻ കാർഡ് സാമ്പത്തിക ഇടപാടുകൾക്കും ബാങ്ക് അക്കൗണ്ട് തുടങ്ങുന്നതിനും നിർബന്ധമാണ്.",
            {
                label: "പ്രധാന സേവനങ്ങൾ",
                url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
                description: "പുതിയ പാൻ കാർഡ് അപേക്ഷ, പാൻ കാർഡിലെ തിരുത്തലുകൾ, പാൻ-ആധാർ ലിങ്കിംഗ്"
            },
            {
                label: "NSDL PAN Services",
                url: "https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html",
                description: "NSDL പാൻ സർവീസ് പോർട്ടൽ"
            }
        ]
    },
    {
        district: "5. പാസ്‌പോർട്ട് (Passport)",
        items: [
            "വിദേശ യാത്രകൾക്ക് അത്യാവശ്യമായ രേഖയാണിത്.",
            {
                label: "പ്രധാന സേവനങ്ങൾ",
                url: "https://www.passportindia.gov.in",
                description: "പുതിയ പാസ്‌പോർട്ട് അപേക്ഷ, പാസ്‌പോർട്ട് പുതുക്കൽ (Re-issue), കുട്ടികൾക്കുള്ള പാസ്‌പോർട്ട്"
            },
            {
                label: "Passport Seva Portal",
                url: "https://www.passportindia.gov.in",
                description: "ഔദ്യോഗിക പാസ്‌പോർട്ട് സേവന പോർട്ടൽ"
            }
        ]
    }
];
