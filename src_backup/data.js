
// Mock Data source for the Qene Masnegeria App

export const dailyMasnegeria = [
  {
    id: 1,
    dayAmharic: "እሁድ",
    dayEnglish: "Sunday",
    title: "የሰንበት ክብር",
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
    description: "በዚች ቀን ጠፈርን ፈጠረ።",
    qeneThemes: [
       "ሰማይን መስቀሉ",
       "ውሃን ከውሃ መለየቱ"
    ]
  },
  { id: 3, dayAmharic: "ማክሰኞ", dayEnglish: "Tuesday", title: "አትክልት", description: "ምድር ዘርን ታብቅል አለ።" },
  { id: 4, dayAmharic: "ረቡዕ", dayEnglish: "Wednesday", title: "ብርሃናት", description: "ፀሐይ፣ ጨረቃና ከዋክብትን ፈጠረ።" },
  { id: 5, dayAmharic: "ሐሙስ", dayEnglish: "Thursday", title: "ዘመን", description: "ፍጥረታት በባሕርና በአየር እንዲንቀሳቀሱ አዘዘ።" },
  { id: 6, dayAmharic: "ዓርብ", dayEnglish: "Friday", title: "ስነ ፍጥረት", description: "አዳምን ፈጠረ።" },
  { id: 7, dayAmharic: "ቅዳሜ", dayEnglish: "Saturday", title: "ዕረፍት", description: "ፈጣሪ ከሥራው ሁሉ ዐረፈ።" },
];

export const monthlyHolidays = [
  { day: 1, title: "ልደታ ለማርያም / ራጉኤል", events: ["ልደታ ለማርያም", "ቅዱስ ራጉኤል", "ኤልያስ ነቢይ", "በርተሎሜዎስ ሐዋርያ"] },
  { day: 2, title: "ታድዮስ ሐዋርያ", events: ["ታድዮስ", "አባ ጉባ"] },
  { day: 3, title: "በዓታ ለማርያም", events: ["በዓታ", "ፋኑኤል"] },
  { day: 4, title: "ዮሐንስ ወልደ ነጎድጓድ", events: ["ዮሐንስ"] },
  { day: 5, title: "ጴጥሮስ ወጳውሎስ", events: ["ጴጥሮስ ወጳውሎስ", "ገብረ መንፈስ ቅዱስ"] },
  { day: 12, title: "ቅዱስ ሚካኤል", events: ["ሊቀ መላእክት ቅዱስ ሚካኤል", "ላልይበላ"] },
  { day: 19, title: "ቅዱስ ገብርኤል", events: ["ሊቀ መላእክት ቅዱስ ገብርኤል"] },
  { day: 21, title: "ቅድስት ማርያም", events: ["እመቤታችን ቅድስት ድንግል ማርያም"] },
  { day: 23, title: "ቅዱስ ጊዮርጊስ", events: ["ሰማዕቱ ቅዱስ ጊዮርጊስ"] },
  { day: 27, title: "መድኃኔዓለም", events: ["መድኃኔዓለም ክርስቶስ"] },
  { day: 29, title: "ብአለ ወልድ", events: ["ብአለ ወልድ"] },
];

export const annualHolidays = [
  { month: "መስከረም", day: 1, title: "እንቁጣጣሽ (አዲስ ዓመት)", description: "ርዮሐንስ መጥምቅ፣ ቅዱስ ራጉኤል..." },
  { month: "ጥቅምት", day: 27, title: "መድኃኔዓለም", description: "" },
  { month: "ታህሳስ", day: 19, title: "ቅዱስ ገብርኤል", description: "ሶስቱ ህፃናት" },
  { month: "ታህሳስ", day: 29, title: "በዓለ ወልድ", description: "የጌታችን የኢየሱስ ክርስቶስ ልደት" },
];

export const seasons = [
  { title: "ዘመነ ጽጌ", description: "የአበባ ወቅት (መስከረም 26 - ህዳር 6)" },
  { title: "ዘመነ አስተርዮ", description: "የመገለጥ ወቅት" },
  { title: "ዐቢይ ጾም", description: "የጌታችን ጾም" },
  { title: "ትንሳኤ", description: "የፋሲካ በዓል" },
];

export const fasts = [
  { title: "ዐቢይ ጾም", duration: "55 ቀናት" },
  { title: "ጾመ ነቢያት", duration: "43 ቀናት" },
  { title: "ጾመ ሐዋርያት", duration: "እንደ በዓለ ሃምሳ ይወሰናል" },
  { title: "ጾመ ፍልሰታ", duration: "16 ቀናት" }
];
