export const servicesArray = [
  {
    title: "Pregnancy and Birth Support",
    content:
      "Mothers & mothers-to-be, we got you covered! Get personalised antenatal care information + all necessary support from pregnancy to birth. Find clinics that suit you best, reach our Health Providers whenever and wherever you need to!",
    icon: "1",
  },
  {
    title: "GrowingUP",
    content:
      "Adolescents find information and support here. Find centers close to you, join a reproductive health group and share experience with other adolescents like you.",
    icon: "2",
  },
  {
    title: "Hospitals and Clinics",
    content:
      "Reimagine your patient education and engagement. It's about to get better!",
    icon: "3",
  }
  ,
  {
    title: "Health and Childbirth Professionals",
    content:
      "We connect you with more patients and the community you've always cared for. Change your game, your clinic experience is about to get better!",
    icon: "4",
  },
  {
    title: "Volunteers",
    content:
      "We need you! Volunteering with us will be a rewarding experience. Join us.",
    icon: "5",
  },
];

export const whyChooseUs = [
  "birth support","coach", "companion", "information and emotional support", "Post birth support",
]

export  const formatDate = (date) => {
  let formattedDate = "";

  if (date.toDateString() === new Date().toDateString()) {
    formattedDate += "Today";
  } else {
    formattedDate += new Intl.DateTimeFormat("en-US", {
      weekday: "short",
    }).format(date);
  }

  formattedDate += `, ${date.getDate()} ${date.toLocaleDateString("en-US", {
    month: "long",
  })}`;

  return formattedDate;
};