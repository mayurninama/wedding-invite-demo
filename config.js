/**
 * WEDDING CONFIGURATION — SUMIT VYAS & NIDHI DAVE
 * Tradition: Royal North Indian / Rajasthani & Gujarati Brahmin Hindu Wedding (Shubh Vivah)
 * Door Styles:
 *   - 'bougainvillea': Arched Sage Green Villa Door with Cascading Bougainvillea, Vintage Lanterns & Chandelier Walkway
 *   - 'sandstone': Carved Sandstone Palace Door with Brass Jali Lattice & Peacock Handles
 */
window.WEDDING_CONFIG = {
  activeDoorStyle: "bougainvillea",

  couple: {
    groom: {
      firstName: { en: "Sumit", hi: "सुमित" },
      fullName: { en: "Sumit Vyas", hi: "चि. सुमित व्यास" },
      shortTitle: { en: "Chi. Sumit", hi: "चि. सुमित" },
      parents: {
        en: "Grandson of Late Smt. Saraswati Devi & Late Pandit Rameshwar Prasad Vyas\nSon of Smt. Kavita Vyas & Shri Rajeshwar Vyas",
        hi: "सुपौत्र: स्व. श्रीमती सरस्वती देवी एवं स्व. पं. रामेश्वर प्रसाद व्यास\nसुपुत्र: श्रीमती कविता व्यास एवं श्री राजेश्वर व्यास"
      },
      familyName: { en: "The Vyas Family", hi: "व्यास परिवार" }
    },
    bride: {
      firstName: { en: "Nidhi", hi: "निधि" },
      fullName: { en: "Nidhi Dave", hi: "आयु. निधि दवे" },
      shortTitle: { en: "Sushri Nidhi", hi: "आयु. निधि" },
      parents: {
        en: "Granddaughter of Late Smt. Shantaben & Late Shri Harishankar Dave\nDaughter of Smt. Meenakshi Dave & Shri Devendra Dave",
        hi: "सुपौत्री: स्व. श्रीमती शांताबेन एवं स्व. श्री हरिशंकर दवे\nसुपुत्री: श्रीमती मीनाक्षी दवे एवं श्री देवेन्द्र दवे"
      },
      familyName: { en: "The Dave Family", hi: "दवे परिवार" }
    },
    monogram: {
      groomFirst: "S & N",
      brideFirst: "N & S"
    }
  },

  wedding: {
    dateDisplay: {
      en: "Tuesday, 22nd February 2022",
      hi: "मंगलवार, २२ फरवरी २०२२"
    },
    shortDate: {
      en: "22 · 02 · 2022",
      hi: "२२ · ०२ · २०२२"
    },
    hashtag: "#SumitKiNidhi",
    city: {
      en: "Benaulim, South Goa",
      hi: "बेनौलिम, दक्षिण गोवा"
    },
    venueName: {
      en: "Fairfield By Marriott Goa Benaulim",
      hi: "फेयरफील्ड बाय मैरियट गोवा बेनौलिम"
    },
    venueAddress: {
      en: "Survey No 11/14, Plot B C & E, Vasvaddo, Benaulim, Salcete, South Goa, Goa 403716",
      hi: "सर्वे नं. ११/१४, वासवड्डो, बेनौलिम, साल्सेते, दक्षिण गोवा, गोवा ४०३७१६"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Goa+Benaulim",
    timezone: "Asia/Kolkata",
    ceremonyISO: "2022-02-22T18:30:00+05:30",
    ceremonyEndISO: "2022-02-22T23:30:00+05:30",
    countdownModeDefault: "live_preview",
    previewFutureISO: "2027-02-22T18:30:00+05:30"
  },

  assets: {
    monogramSrc: "monogram.svg",
    audioSrc: "song.mp3",
    audioVolume: 0.5,
    videoUrl: "",
    ogImage: "preview.svg"
  },

  scratchCard: {
    enabled: true,
    title: {
      en: "Scratch to reveal wedding date...",
      hi: "शुभ विवाह की पावन तिथि जानने के लिए स्क्रैच करें..."
    },
    subtitle: {
      en: "Scratch with your finger or mouse",
      hi: "उंगली या माउस से धीरे-धीरे स्क्रैच करें"
    },
    quickBtn: {
      en: "Quick Reveal Date ⚡",
      hi: "त्वरित तिथि देखें ⚡"
    },
    revealedNote: {
      en: "Auspicious Date Revealed! Shubh Muhurat Pheras at Sunset",
      hi: "शुभ मुहूर्त प्रकट हुआ! गोधूलि वेला में पाणिग्रहण संस्कार"
    }
  },

  invitationCard: {
    groomSideHost: {
      hostsLine: {
        en: "Smt. Kavita Vyas & Shri Rajeshwar Vyas",
        hi: "श्रीमती कविता व्यास एवं श्री राजेश्वर व्यास"
      },
      blessingsLine: {
        en: "With the heavenly blessings of Late Smt. Saraswati Devi & Late Pandit Rameshwar Prasad Vyas",
        hi: "स्व. श्रीमती सरस्वती देवी एवं स्व. पं. रामेश्वर प्रसाद व्यास के दिव्य आशीर्वाद से"
      },
      inviteText: {
        en: "cordially request the honour of your gracious presence and blessings with family on the auspicious occasion of the Shubh Vivah of their beloved son",
        hi: "अपने लाड़ले सुपुत्र के शुभ विवाह के पावन अवसर पर सपरिवार आपकी गरिमामयी उपस्थिति एवं स्नेहिल आशीर्वाद हेतु सादर निमंत्रण प्रेषित करते हैं"
      },
      awaitingLine: {
        en: "Awaiting Your Gracious Presence: Vikram Vyas, Neha Vyas, Rohan Vyas & All Members of the Vyas Parivar",
        hi: "दर्शनाभिलाषी: विक्रम व्यास, नेहा व्यास, रोहन व्यास एवं समस्त व्यास परिवार"
      },
      complimentsLine: {
        en: "With Best Compliments From: The Vyas & Dave Families, Friends & Relatives",
        hi: "विनीत: समस्त व्यास एवं दवे परिवार तथा इष्टमित्र"
      }
    },
    brideSideHost: {
      hostsLine: {
        en: "Smt. Meenakshi Dave & Shri Devendra Dave",
        hi: "श्रीमती मीनाक्षी दवे एवं श्री देवेन्द्र दवे"
      },
      blessingsLine: {
        en: "With the heavenly blessings of Late Smt. Shantaben & Late Shri Harishankar Dave",
        hi: "स्व. श्रीमती शांताबेन एवं स्व. श्री हरिशंकर दवे के दिव्य आशीर्वाद से"
      },
      inviteText: {
        en: "cordially request the honour of your gracious presence and blessings with family on the auspicious occasion of the Shubh Vivah of their beloved daughter",
        hi: "अपनी लाड़ली सुपुत्री के शुभ विवाह के पावन अवसर पर सपरिवार आपकी गरिमामयी उपस्थिति एवं स्नेहिल आशीर्वाद हेतु सादर निमंत्रण प्रेषित करते हैं"
      },
      awaitingLine: {
        en: "Awaiting Your Gracious Presence: Siddharth Dave, Pooja Dave, Aarav Dave & All Members of the Dave Parivar",
        hi: "दर्शनाभिलाषी: सिद्धार्थ दवे, पूजा दवे, आरव दवे एवं समस्त दवे परिवार"
      },
      complimentsLine: {
        en: "With Best Compliments From: The Dave & Vyas Families, Friends & Relatives",
        hi: "विनीत: समस्त दवे एवं व्यास परिवार तथा इष्टमित्र"
      }
    }
  },

  functions: [
    {
      id: "haldi-mehendi",
      icon: "marigold",
      title: {
        en: "Haldi & Mehendi Carnival",
        hi: "हल्दी एवं मेहंदी उत्सव"
      },
      subtitle: {
        en: "Sun-kissed hues of turmeric, henna & coastal folk dhol",
        hi: "हल्दी की आभा, मेहंदी की रचावट एवं लोक संगीत की मधुर बेला"
      },
      dayDate: {
        en: "Monday, 21st February 2022",
        hi: "सोमवार, २१ फरवरी २०२२"
      },
      time: {
        en: "11:00 AM – 3:30 PM",
        hi: "प्रातः ११:०० से दोपहर ३:३० बजे तक"
      },
      venue: {
        en: "Poolside Tropical Lawns · Fairfield By Marriott Goa Benaulim",
        hi: "पूलसाइड लॉन · फेयरफील्ड बाय मैरियट गोवा बेनौलिम"
      },
      address: {
        en: "Vasvaddo, Benaulim, South Goa 403716",
        hi: "वासवड्डो, बेनौलिम, दक्षिण गोवा ४०३७१६"
      },
      dressCode: {
        en: "Dress Code: Marigold Yellow, Lime & Sunset Pastels",
        hi: "परिधान: गेंदे का पीला एवं सौम्य पेस्टल रंग"
      },
      startISO: "20220221T110000",
      endISO: "20220221T153000",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Goa+Benaulim"
    },
    {
      id: "sangeet",
      icon: "bells",
      title: {
        en: "Sangeet & Ring Ceremony",
        hi: "संगीत संध्या एवं सगाई समारोह"
      },
      subtitle: {
        en: "An evening of royal melodies, exchange of rings & family performances",
        hi: "अंगूठी रस्म, सुरमयी संगीत एवं पारिवारिक नृत्य की यादगार संध्या"
      },
      dayDate: {
        en: "Monday, 21st February 2022",
        hi: "सोमवार, २१ फरवरी २०२२"
      },
      time: {
        en: "7:30 PM Onwards",
        hi: "सायं ७:३० बजे से"
      },
      venue: {
        en: "The Grand Ballroom · Fairfield By Marriott Goa Benaulim",
        hi: "द ग्रैंड बॉलरूम · फेयरफील्ड बाय मैरियट गोवा बेनौलिम"
      },
      address: {
        en: "Vasvaddo, Benaulim, South Goa 403716",
        hi: "वासवड्डो, बेनौलिम, दक्षिण गोवा ४०३७१६"
      },
      dressCode: {
        en: "Dress Code: Royal Indo-Western & Antique Gold Shimmer",
        hi: "परिधान: रॉयल इंडो-वेस्टर्न एवं सुनहरी आभा"
      },
      startISO: "20220221T193000",
      endISO: "20220221T233000",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Goa+Benaulim"
    },
    {
      id: "pheras",
      icon: "kalash",
      isMainCeremony: true,
      title: {
        en: "Baraat Swagat & Vedic Pheras (Shubh Muhurat)",
        hi: "बारात स्वागत एवं पाणिग्रहण संस्कार (शुभ मुहूर्त)"
      },
      subtitle: {
        en: "Sacred Vedic vows under the coastal sunset Jharokha Mandap · Followed by Dinner & Ashirwad",
        hi: "वैदिक मंत्रोच्चार के मध्य सप्तपदी एवं पाणिग्रहण संस्कार · तत्पश्चात प्रीतिभोज एवं आशीर्वाद"
      },
      dayDate: {
        en: "Tuesday, 22nd February 2022",
        hi: "मंगलवार, २२ फरवरी २०२२"
      },
      time: {
        en: "4:00 PM – 8:30 PM",
        hi: "सायं ४:०० से रात्रि ८:३० बजे तक"
      },
      venue: {
        en: "Royal Courtyard Mandap · Fairfield By Marriott Goa Benaulim",
        hi: "रॉयल कोर्टयार्ड मंडप · फेयरफील्ड बाय मैरियट गोवा बेनौलिम"
      },
      address: {
        en: "Vasvaddo, Benaulim, South Goa 403716",
        hi: "वासवड्डो, बेनौलिम, दक्षिण गोवा ४०३७१६"
      },
      dressCode: {
        en: "Dress Code: Traditional Royal Heritage (Sandstone, Ivory & Terracotta Rose)",
        hi: "परिधान: पारंपरिक राजसी परिधान (आइवरी, सैंडस्टोन एवं टेराकोटा गुलाबी)"
      },
      subSchedule: [
        {
          time: { en: "4:00 PM", hi: "सायं ४:००" },
          label: { en: "Sehra Bandi & Ghurchari", hi: "सेहरा बंदी एवं घुड़चढ़ी" }
        },
        {
          time: { en: "4:30 PM", hi: "सायं ४:३०" },
          label: { en: "Baraat Prasthan & Royal Swagat", hi: "बारात प्रस्थान एवं भव्य स्वागत" }
        },
        {
          time: { en: "5:45 PM", hi: "सायं ५:४५" },
          label: { en: "Sunset Varmala (Jaimala)", hi: "गोधूलि वरमाला (जयमाला)" }
        },
        {
          time: { en: "6:30 PM", hi: "सायं ६:३०" },
          label: { en: "Hastmelap & Shubh Muhurat Pheras", hi: "हस्तमेलाप एवं शुभ मुहूर्त फेरे" }
        },
        {
          time: { en: "8:30 PM", hi: "रात्रि ८:३०" },
          label: { en: "Taron Ki Chhaon Mein Vidai", hi: "तारों की छाँव में विदाई" }
        }
      ],
      etiquetteNote: {
        en: "Shubh Muhurat Note: Please grace the Courtyard Mandap 15 minutes prior to Sunset Varmala. Followed by Royal Dinner & Ashirwad.",
        hi: "विशेष आग्रह: कृपया गोधूलि वरमाला से १५ मिनट पूर्व मंडप में पधारकर वर-वधू को आशीर्वाद प्रदान करें। तत्पश्चात प्रीतिभोज।"
      },
      startISO: "20220222T160000",
      endISO: "20220222T203000",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Goa+Benaulim"
    },
    {
      id: "reception",
      icon: "diya",
      title: {
        en: "Ashirwad & Grand Reception Dinner",
        hi: "आशीर्वाद समारोह एवं भव्य प्रीतिभोज"
      },
      subtitle: {
        en: "Celebrating the newlyweds under the starlit palms of Benaulim",
        hi: "नवदंपति के सम्मान में तारों भरी संध्या एवं स्वागत प्रीतिभोज"
      },
      dayDate: {
        en: "Tuesday, 22nd February 2022",
        hi: "मंगलवार, २२ फरवरी २०२२"
      },
      time: {
        en: "8:00 PM Onwards",
        hi: "रात्रि ८:०० बजे से"
      },
      venue: {
        en: "Starlit Palm Lawns · Fairfield By Marriott Goa Benaulim",
        hi: "पाम लॉन · फेयरफील्ड बाय मैरियट गोवा बेनौलिम"
      },
      address: {
        en: "Vasvaddo, Benaulim, South Goa 403716",
        hi: "वासवड्डो, बेनौलिम, दक्षिण गोवा ४०३७१६"
      },
      dressCode: {
        en: "Dress Code: Regal Evening Finery",
        hi: "परिधान: गरिमामय संध्या परिधान"
      },
      startISO: "20220222T200000",
      endISO: "20220222T235900",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Fairfield+by+Marriott+Goa+Benaulim"
    }
  ],

  // Gallery Photos matching each section title with high-res Indian wedding dummy images
  gallery: [
    {
      id: 1,
      imageSrc: "gallery/gallery-1-couple.jpg",
      imageFallback: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
      title: { en: "Sumit & Nidhi · Pre-Wedding Portrait", hi: "सुमित एवं निधि · प्री-वेडिंग पोर्ट्रेट" },
      caption: { en: "Golden Hour by the Benaulim Coast, South Goa", hi: "बेनौलिम तट पर सुनहरी संध्या, दक्षिण गोवा" },
      tag: { en: "Couple Portrait", hi: "युगल छायाचित्र" }
    },
    {
      id: 2,
      imageSrc: "gallery/gallery-2-mehendi.jpg",
      imageFallback: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      title: { en: "Haldi & Intricate Henna Celebration", hi: "हल्दी एवं मेहंदी की मनमोहक रचावट" },
      caption: { en: "Auspicious turmeric blessings & bridal mehendi", hi: "हल्दी के पावन संस्कार एवं सखियों का उल्लास" },
      tag: { en: "Haldi & Mehendi", hi: "हल्दी व मेहंदी" }
    },
    {
      id: 3,
      imageSrc: "gallery/gallery-3-mandap.jpg",
      imageFallback: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      title: { en: "The Royal Jharokha Mandap", hi: "राजसी झरोखा विवाह मंडप" },
      caption: { en: "Courtyard Mandap · Fairfield By Marriott Goa Benaulim", hi: "फेयरफील्ड बाय मैरियट गोवा बेनौलिम प्रांगण" },
      tag: { en: "Mandap Decor", hi: "मंडप सज्जा" }
    },
    {
      id: 4,
      imageSrc: "gallery/gallery-4-varmala.jpg",
      imageFallback: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      title: { en: "Sunset Varmala & Sacred Vedic Pheras", hi: "गोधूलि वरमाला एवं पाणिग्रहण संस्कार" },
      caption: { en: "Hastmelap & sacred vows under the sunset sky", hi: "सप्तपदी एवं वैदिक मंत्रोच्चार के पावन फेरे" },
      tag: { en: "Shubh Pheras", hi: "शुभ फेरे" }
    },
    {
      id: 5,
      imageSrc: "gallery/gallery-5-sangeet.jpg",
      imageFallback: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
      title: { en: "Starlit Sangeet & Ring Ceremony", hi: "सुरमयी संगीत एवं सगाई संध्या" },
      caption: { en: "Grand Ballroom · An evening of melodies & dance", hi: "द ग्रैंड बॉलरूम · नृत्य, संगीत एवं उल्लास" },
      tag: { en: "Sangeet Night", hi: "संगीत संध्या" }
    },
    {
      id: 6,
      imageSrc: "gallery/gallery-6-reception.jpg",
      imageFallback: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      title: { en: "Grand Ashirwad Reception Gala", hi: "भव्य आशीर्वाद समारोह एवं प्रीतिभोज" },
      caption: { en: "Celebrating #SumitKiNidhi under the starlit palms", hi: "तारों भरी संध्या में नवदंपति का स्नेहिल स्वागत" },
      tag: { en: "Grand Reception", hi: "प्रीतिभोज" }
    }
  ],

  rsvpContacts: [
    {
      name: { en: "Shri Rajeshwar Vyas (Groom's Father)", hi: "श्री राजेश्वर व्यास (वर पक्ष)" },
      phone: "+91 111 222 3333",
      phoneClean: "911112223333"
    },
    {
      name: { en: "Shri Devendra Dave (Bride's Father)", hi: "श्री देवेन्द्र दवे (वधू पक्ष)" },
      phone: "+91 444 555 6666",
      phoneClean: "914445556666"
    },
    {
      name: { en: "Wedding Hospitality Desk · Fairfield Benaulim", hi: "विवाह अतिथि सत्कार डेस्क · फेयरफील्ड बेनौलिम" },
      phone: "+91 777 888 9999",
      phoneClean: "917778889999"
    }
  ]
};
