// Mock Data source for the Qene Masnegeria App

export const dailyMasnegeria = [
    {
        id: 1,
        dayAmharic: "እሁድ",
        dayEnglish: "Sunday",
        title: "የሰንበት ክብር",
        titleEnglish: "The Glory of Sabbath",
        description: "በመጀመሪያ ቀን ዓለምን ሲፈጥር በአንደኛው ቀን ጀመረ። ጨለማን፣ መሬትን፣ ነፋስን፣ ውሃን፣ እሳትን፣ ሰማይን፣ መላእክትን ፈጠረ።",
        qeneThemes: [
            "በእሁድ ቀን ዓለምን መፍጠሩ",
            "ጨለማን፣ ነፋስን፣ ውሃን አስቀድሞ መፍጠሩ",
            "ብርሃን በሌለበት",
        ]
    },
    {
        id: 2,
        dayAmharic: "ሰኞ",
        dayEnglish: "Monday",
        title: "ጠፈር",
        titleEnglish: "The Firmament",
        description: "በዚች ቀን ጠፈርን ፈጠረ።",
        qeneThemes: [
            "ሰማይን መስቀሉ",
            "ውሃን ከውሃ መለየቱ"
        ]
    },
    { id: 3, dayAmharic: "ማክሰኞ", dayEnglish: "Tuesday", title: "አትክልት", titleEnglish: "Plants and Seeds", description: "ምድር ዘርን ታብቅል አለ።" },
    { id: 4, dayAmharic: "ረቡዕ", dayEnglish: "Wednesday", title: "ብርሃናት", titleEnglish: "The Luminaries (Sun, Moon, Stars)", description: "ፀሐይ፣ ጨረቃና ከዋክብትን ፈጠረ።" },
    { id: 5, dayAmharic: "ሐሙስ", dayEnglish: "Thursday", title: "ዘመን", titleEnglish: "Sea Creatures and Birds", description: "ፍጥረታት በባሕርና በአየር እንዲንቀሳቀሱ አዘዘ።" },
    { id: 6, dayAmharic: "ዓርብ", dayEnglish: "Friday", title: "ስነ ፍጥረት", titleEnglish: "Creation of Adam", description: "አዳምን ፈጠረ።" },
    { id: 7, dayAmharic: "ቅዳሜ", dayEnglish: "Saturday", title: "ዕረፍት", titleEnglish: "Sabbath Rest", description: "ፈጣሪ ከሥራው ሁሉ ዐረፈ።" },
];

export const monthlyHolidays = [
    { day: 1, title: "ልደታ ለማርያም / ራጉኤል", titleEnglish: "Lideta Mariam / Raguel (Saint)", events: ["ልደታ ለማርያም", "ቅዱስ ራጉኤል", "ኤልያስ ነቢይ", "በርተሎሜዎስ ሐዋርያ"] },
    { day: 2, title: "ታድዮስ ሐዋርያ", titleEnglish: "Thaddeus Apostle (Saint)", events: ["ታድዮስ", "አባ ጉባ"] },
    { day: 3, title: "በዓታ ለማርያም", titleEnglish: "Baata Mariam", events: ["በዓታ", "ፋኑኤል"] },
    { day: 4, title: "ዮሐንስ ወልደ ነጎድጓድ", titleEnglish: "John Son of Thunder", events: ["ዮሐንስ"] },
    { day: 5, title: "ጴጥሮስ ወጳውሎስ", titleEnglish: "Peter and Paul (Saints)", events: ["ጴጥሮስ ወጳውሎስ", "ገብረ መንፈስ ቅዱስ"] },
    { day: 12, title: "ቅዱስ ሚካኤል", titleEnglish: "Saint Michael", events: ["ሊቀ መላእክት ቅዱስ ሚካኤል", "ላልይበላ"] },
    { day: 19, title: "ቅዱስ ገብርኤል", titleEnglish: "Saint Gabriel", events: ["ሊቀ መላእክት ቅዱስ ገብርኤል"] },
    { day: 21, title: "ቅድስት ማርያም", titleEnglish: "Saint Mary", events: ["እመቤታችን ቅድስት ድንግል ማርያም"] },
    { day: 23, title: "ቅዱስ ጊዮርጊስ", titleEnglish: "Saint George", events: ["ሰማዕቱ ቅዱስ ጊዮርጊስ"] },
    { day: 27, title: "መድኃኔዓለም", titleEnglish: "Medhane Alem (Savior of the World)", events: ["መድኃኔዓለም ክርስቶስ"] },
    { day: 29, title: "ብአለ ወልድ", titleEnglish: "Feast of the Son", events: ["ብአለ ወልድ"] },
];

export const annualHolidays = [
    { month: "መስከረም", day: 1, title: "እንቁጣጣሽ (አዲስ ዓመት)", titleEnglish: "Enkutatash (New Year)", description: "ርዮሐንስ መጥምቅ፣ ቅዱስ ራጉኤል..." },
    { month: "ጥቅምት", day: 27, title: "መድኃኔዓለም", titleEnglish: "Medhane Alem", description: "" },
    { month: "ታህሳስ", day: 19, title: "ቅዱስ ገብርኤል", titleEnglish: "Saint Gabriel", description: "ሶስቱ ህፃናት" },
    { month: "ታህሳስ", day: 29, title: "በዓለ ወልድ", titleEnglish: "Feast of the Son", description: "የጌታችን የኢየሱስ ክርስቶስ ልደት" },
];

export const seasons = [
    { title: "ዘመነ ጽጌ", titleEnglish: "Season of Flowers", description: "የአበባ ወቅት (መስከረም 26 - ህዳር 6)" },
    { title: "ዘመነ አስተርዮ", titleEnglish: "Season of Epiphany", description: "የመገለጥ ወቅት" },
    { title: "ዐቢይ ጾም", titleEnglish: "Great Lent", description: "የጌታችን ጾም" },
    { title: "ትንሳኤ", titleEnglish: "Resurrection (Easter)", description: "የፋሲካ በዓል" },
];

export const fasts = [
    { title: "ዐቢይ ጾም", titleEnglish: "Great Lent", duration: "55 ቀናት" },
    { title: "ጾመ ነቢያት", titleEnglish: "Fast of the Prophets", duration: "43 ቀናት" },
    { title: "ጾመ ሐዋርያት", titleEnglish: "Fast of the Apostles", duration: "እንደ በዓለ ሃምሳ ይወሰናል" },
    { title: "ጾመ ፍልሰታ", titleEnglish: "Fast of Filseta (Assumption)", duration: "16 ቀናት" }
];
