export const gallery = [
  { id: "g1", category: "maternity", image: "/images/gallery/MaternityStudioPortrait.jpg", alt: "Maternity studio portrait" },
  { id: "g2", category: "newborn", image: "/images/gallery/NewBornBabySleeping.jpg", alt: "Newborn baby sleeping peacefully" },
  { id: "g3", category: "baby", image: "/images/gallery/HappyBabySmiling.jpg", alt: "Happy baby smiling" },
  { id: "g4", category: "themes", image: "/images/gallery/CreativeThemePhotography.jpg", alt: "Creative theme photoshoot" },
  { id: "g5", category: "family", image: "/images/gallery/FamilyPhotoshoot.jpg", alt: "Family photoshoot" },
  { id: "g6", category: "birthday", image: "/images/gallery/FirstBirthdayCakeSmash.jpg", alt: "First birthday cake smash" },
  { id: "g7", category: "maternity", image: "/images/gallery/OutdoorMaternityPortrait.jpg", alt: "Outdoor maternity portrait" },
  { id: "g8", category: "baby", image: "/images/gallery/BabyMilestonePhotoshoot.jpg", alt: "Baby milestones photoshoot" },
];

export const getGalleryCategories = () => {
  return [
    { id: "all", label: "All" },
    { id: "maternity", label: "Maternity" },
    { id: "newborn", label: "Newborn" },
    { id: "baby", label: "Baby" },
    { id: "themes", label: "Creative Themes" },
    { id: "birthday", label: "Birthday" },
    { id: "family", label: "Family" },
  ];
};
