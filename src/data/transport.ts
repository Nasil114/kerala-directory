import { ServiceSubCategory } from "./education";

export const transportData: ServiceSubCategory[] = [
    {
        id: "public-transport",
        title: "പൊതു ഗതാഗതം",
        description: "KSRTC, Railways, Metro",
        data: [
            {
                district: "റോഡ് ഗതാഗതം",
                items: [
                    "കെ.എസ്.ആർ.ടി.സി (KSRTC) - കേരള സ്റ്റേറ്റ് റോഡ് ട്രാൻസ്‌പോർട്ട്",
                    { label: "K-SWIFT", url: "https://onlineksrtcswift.com", description: "ദീർഘദൂര സ്ലീപ്പർ/വോൾവോ സർവീസുകൾ" }
                ]
            },
            {
                district: "റെയിൽവേ",
                items: [
                    { label: "ഇന്ത്യൻ റെയിൽവേ (Indian Railways)", url: "https://www.irctc.co.in", description: "റെയിൽവേ ടിക്കറ്റ് ബുക്കിംഗ്" },
                    "പ്രധാന സ്റ്റേഷനുകൾ: TVC, ERS, TCR, CLT, CAN"
                ]
            },
            {
                district: "മെട്രോ",
                items: [
                    "കൊച്ചി മെട്രോ (Kochi Metro) - ആലുവ to തൃപ്പൂണിത്തുറ",
                    "കൊച്ചി വാട്ടർ മെട്രോ (Water Metro) - ദ്വീപ് ഗതാഗതം",
                    { label: "Kochi Metro Website", url: "https://kochimetro.org", description: "ടിക്കറ്റുകളും സമയവിവരങ്ങളും" }
                ]
            }
        ]
    },
    {
        id: "air-transport",
        title: "വിമാനഗതാഗതം",
        description: "Airports in Kerala",
        data: [
            {
                district: "അന്താരാഷ്ട്ര വിമാനത്താവളങ്ങൾ",
                items: [
                    { label: "കൊച്ചി അന്താരാഷ്ട്ര വിമാനത്താവളം (CIAL)", url: "https://cial.aero", description: "നെടുമ്പാശ്ശേരി" },
                    { label: "തിരുവനന്തപുരം അന്താരാഷ്ട്ര വിമാനത്താവളം (TRV)", url: "https://www.adaniairports.com", description: "തിരുവനന്തപുരം" },
                    { label: "കോഴിക്കോട് അന്താരാഷ്ട്ര വിമാനത്താവളം (CCJ)", url: "https://www.aai.aero", description: "കരിപ്പൂർ" },
                    { label: "കണ്ണൂർ അന്താരാഷ്ട്ര വിമാനത്താവളം (KIAL)", url: "https://kannurairport.aero", description: "മട്ടന്നൂർ" }
                ]
            }
        ]
    },
    {
        id: "water-transport",
        title: "ജലഗതാഗതം",
        description: "SWTD, Houseboats, Ferry",
        data: [
            {
                district: "സർക്കാർ സേവനങ്ങൾ",
                items: [
                    { label: "സ്റ്റേറ്റ് വാട്ടർ ട്രാൻസ്പോർട്ട് (SWTD)", url: "https://swtd.kerala.gov.in", description: "ബോട്ട് സർവീസുകൾ" },
                    "യാത്രാ ബോട്ടുകൾ & ടൂറിസ്റ്റ് ബോട്ടുകൾ"
                ]
            },
            {
                district: "മറ്റ് സേവനങ്ങൾ",
                items: [
                    "ഹൗസ് ബോട്ടുകൾ - ആലപ്പുഴ, കുമരകം",
                    "ഷിക്കാരകൾ & ചെറുവള്ളങ്ങൾ",
                    "ഫോർട്ട് കൊച്ചി - വൈപ്പിൻ റോ-റോ ഫെറി"
                ]
            }
        ]
    },
    {
        id: "private-transport",
        title: "ടാക്സി/സ്വകാര്യ സേവനങ്ങൾ",
        description: "Taxi, Auto, Rent-a-Car",
        data: [
            {
                district: "ടാക്സി സേവനങ്ങൾ",
                items: [
                    "Uber & Ola Cabs",
                    { label: "Kerala Savaari", url: "https://keralasavaari.kerala.gov.in", description: "സർക്കാർ ഓൺലൈൻ ടാക്സി" },
                    { label: "She-Taxi", url: "https://shetaxi.in", description: "സ്ത്രീകൾക്കായുള്ള സുരക്ഷിത യാത്ര" },
                    "Pre-paid Taxi കൗണ്ടറുകൾ (Airports/Railway Stations)"
                ]
            },
            {
                district: "Rent-a-Car/Bike",
                items: [
                    { label: "Indus Go", url: "https://indusgo.in", description: "Rent-a-Car Service" },
                    { label: "EVM Wheels", url: "https://evmwheels.com", description: "Car Rental" },
                    { label: "Royal Brothers", url: "https://www.royalbrothers.com", description: "Bike Rental" }
                ]
            }
        ]
    },
    {
        id: "transport-assist",
        title: "യാത്രാ സഹായങ്ങൾ",
        description: "Maps, Rates, Info",
        data: [
            {
                district: "വിവരങ്ങൾ",
                items: [
                    { label: "Google Maps", url: "https://google.com/maps", description: "വഴികൾ കണ്ടെത്താൻ" },
                    "Ente KSRTC Neo-OPRS - Live Bus Tracking App",
                    { label: "RTO/MVD വിവരങ്ങൾ", url: "https://mvd.kerala.gov.in", description: "വാഹന വിവരങ്ങൾ & നിയമങ്ങൾ" },
                    "Transportation Fare Rates & Rules"
                ]
            }
        ]
    }
];
