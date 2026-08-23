export const PROJECTS_PAGE_ENABLED = false;

export const FEATURED_PROJECTS = PROJECTS_PAGE_ENABLED
  ? [
      {
        id: "cohen-co",
        number: "01",
        category: "משרד עורכי דין",
        name: "כהן ושות'",
        title: "כהן ושות' — בוטיק משפטי.",
        description: "אתר תדמית מקצועי.",
        meta: "עיצוב ופיתוח, 2025",
        image: "/projects/cohen-co-hero.jpg",
        imageWidth: 1024,
        imageHeight: 587,
        imageAlt: "אתר כהן ושות'",
      },
    ]
  : [];

export const COHEN_CO_IMAGE = "/projects/cohen-co-hero.jpg";
export const ROMEMA_IMAGE = "/projects/romema-hero.jpg";
