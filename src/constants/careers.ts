export interface JobPosition {
  id: string;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Contract';
  location: string;
  description: string;
  hours: string;
  benefits: string[];
  responsibilities: string[];
  qualifications: string[];
}

interface CareersData {
  hero: {
    title: string;
    description: string;
  };
  positions: JobPosition[];
}

export const CAREERS_DATA: CareersData = {
  hero: {
    title: "Join Our Team",
    description: "Build your career with a company that values innovation, safety, and excellence."
  },
  positions: [
    {
      id: "auto-electrician",
      title: "Auto Electrician",
      type: "Full Time",
      location: "Central Queensland",
      description: "GMR (Granger Mechanical Repairs Pty Ltd) are a leading service provider in the Mining, Rural and Civil industries that offer services in both light and heavy equipment mechanical repairs and maintenance. GMR have a reputation for excellent customer service and quality workmanship. We are currently seeking a trade qualified & experienced Auto Electrician to join our maintenance team in Central Qld.",
      hours: "Full Time - 7/7 DIDO Roster",
      benefits: [
        "7/7 Roster - DIDO",
        "Competitive Hourly Rate",
        "Company Benefits",
        "Accommodation & Meals while on site",
        "Permanent, full-time position"
      ],
      responsibilities: [
        "Service and repair electrical systems in vehicles and equipment",
        "Diagnose and troubleshoot electrical issues",
        "Work on Toyota 4WD's, road trucks, lighting plants, generator sets & small earth-moving equipment",
        "Perform air conditioning repairs and maintenance",
        "Maintain high standards of safety and quality"
      ],
      qualifications: [
        "Australian Recognised Trade Certificate/qualifications or TSS skills assessment",
        "Minimum 3 years extensive experience as a qualified Auto Electrician",
        "Coal board medical and Standard 11 or willingness to obtain",
        "Air Conditioning License",
        "Full Qld Drivers License — HR preferred or willingness to obtain",
        "Experience on Toyota 4WD's, road trucks, lighting plants, generator sets & small earth-moving equipment",
        "Extensive air conditioning experience",
        "The ability to diagnose and fault find",
        "Strong focus on safety",
        "Flexibility with working hours",
        "The ability to work autonomously as well as within a team environment",
        "Excellent organisational and communication skills",
        "Clean and tidy work habits"
      ]
    },
    {
      id: "boilermaker",
      title: "Boilermaker",
      type: "Full Time",
      location: "Central Queensland",
      description: "GMR (Granger Mechanical Repairs Pty Ltd) are a leading service provider in the Mining, Rural and Civil Industries that offer services in both light and heavy equipment mechanical repairs and maintenance. GMR have a reputation for excellent customer service and quality. We are currently seeking a trade qualified Boilermaker to join our team in Central Queensland.",
      hours: "Full Time - 7/7 DIDO Roster",
      benefits: [
        "7/7 day shift roster DIDO",
        "Competitive Hourly Rate",
        "Company Benefits",
        "Accommodation & Meals while on site",
        "Permanent, full-time position"
      ],
      responsibilities: [
        "Work on mine sites and other locations as required",
        "Perform boilermaking and welding tasks",
        "Maintain high standards of quality and safety",
        "Work independently and as part of a team"
      ],
      qualifications: [
        "Australian Recognised Trade Certificate/qualifications",
        "Minimum 3 years post trade experience as a Qualified Boilermaker",
        "Standard 11 - or willingness to obtain",
        "Coal Board Medical - or willingness to obtain",
        "Must be able to work unsupervised",
        "Must hold a valid drivers licence (HR or MR preferred or willingness to obtain)",
        "Must be a self starter, reliable and punctual",
        "Have own basic tools"
      ]
    },
    {
      id: "diesel-fitter",
      title: "Diesel Fitter",
      type: "Full Time",
      location: "Central Queensland",
      description: "GMR (Granger Mechanical Repairs Pty Ltd) are a leading service provider in the Mining, Rural and Civil industries that offer services in both light and heavy equipment mechanical repairs and maintenance. We are currently seeking a trade qualified & experienced Diesel Fitter to join our maintenance team in Central Qld.",
      hours: "Full Time - 7/7 DIDO Roster",
      benefits: [
        "7/7 Roster - DIDO",
        "Competitive Hourly Rate",
        "Company Benefits",
        "Accommodation & Meals while on site",
        "Permanent, full-time position",
        "Work Vehicle supplied as Tools for Trade"
      ],
      responsibilities: [
        "Servicing of light vehicles and varied machinery",
        "Diagnosing faults",
        "Carrying out minor and major repairs to light vehicles varied machinery",
        "Conducting brake test and compliance checks",
        "General maintenance of light vehicles and varied machinery"
      ],
      qualifications: [
        "Australian Recognised Trade Certificate/qualifications",
        "Minimum 3 years post trade experience as a Qualified Diesel Fitter",
        "Standard 11 - or willingness to obtain",
        "Coal Board Medical - or willingness to obtain",
        "Air Conditioning License - Highly Regarded",
        "Brake Testing Qualifications - Highly Regarded",
        "Full Qld Drivers License – HR preferred or willingness to obtain",
        "Experience on Caterpillar & Komatsu mining equipment",
        "High Risk License (WAH, EWP) - Highly Regarded",
        "Strong ability to diagnose and fault find",
        "Strong focus on safety",
        "Flexibility with working hours",
        "The ability to work autonomously as well as within a team environment",
        "Excellent organisational and communication skills",
        "Clean and tidy work habits"
      ]
    },
    {
      id: "diesel-motor-mechanic",
      title: "Diesel Motor Mechanic",
      type: "Full Time",
      location: "Central Queensland",
      description: "GMR (Granger Mechanical Repairs Pty Ltd) are a leading service provider in the Mining, Rural and Civil industries that offer services in both light and heavy equipment mechanical repairs and maintenance. We are currently seeking a trade qualified & experienced Diesel Motor Mechanic to join our maintenance team in Central Qld.",
      hours: "Full Time - 7/7 DIDO Roster",
      benefits: [
        "7/7 Roster - DIDO",
        "Competitive Hourly Rate",
        "Company Benefits",
        "Accommodation & Meals while on site",
        "Permanent, full-time position",
        "Work Vehicle supplied as Tools for Trade"
      ],
      responsibilities: [
        "Servicing of light vehicles and varied machinery",
        "Diagnosing faults",
        "Carrying out minor and major repairs to light vehicles varied machinery",
        "Conducting brake test and compliance checks",
        "General maintenance of light vehicles and varied machinery"
      ],
      qualifications: [
        "Australian Recognised Trade Certificate/qualifications",
        "Minimum 3 years post trade experience as a Qualified Diesel Fitter",
        "Standard 11 - or willingness to obtain",
        "Coal Board Medical - or willingness to obtain",
        "Air Conditioning License - Highly Regarded",
        "Brake Testing Qualifications - Highly Regarded",
        "Full Qld Drivers License – HR preferred or willingness to obtain",
        "Experience on Caterpillar & Komatsu mining equipment",
        "High Risk License (WAH, EWP) - Highly Regarded",
        "Strong ability to diagnose and fault find",
        "Strong focus on safety",
        "Flexibility with working hours",
        "The ability to work autonomously as well as within a team environment",
        "Excellent organisational and communication skills",
        "Clean and tidy work habits"
      ]
    },
    {
      id: "hydraulic-hose-technician",
      title: "Hydraulic Hose Technician",
      type: "Full Time",
      location: "Central Queensland",
      description: "GMR (Granger Mechanical Repairs Pty Ltd) are seeking a Hose Technician to join our maintenance team in Central Qld. This position offers a 7/7 DIDO roster with competitive benefits.",
      hours: "Full Time - 7/7 DIDO Roster",
      benefits: [
        "Competitive Hourly Rate",
        "Company Benefits",
        "Accommodation & Meals while on site",
        "Permanent, full-time position",
        "Possibility of adult diesel fitter apprenticeship for the right candidate"
      ],
      responsibilities: [
        "Diagnose and fault find hydraulic systems",
        "Maintain clean and tidy work habits",
        "Work both autonomously and within a team environment",
        "Flexibility to work at various locations when required",
        "Maintain strong focus on safety protocols"
      ],
      qualifications: [
        "Standard 11 - or willingness to obtain",
        "Coal Board Medical - or willingness to obtain",
        "Full Qld Drivers License – HR preferred or willingness to obtain",
        "Strong diagnostic and fault-finding abilities",
        "Excellent organisational and communication skills"
      ]
    }
  ]
}; 