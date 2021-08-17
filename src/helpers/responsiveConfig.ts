import { THREE_THOUSAND, THREE_THOUSAND_TWENTY_FOUR, FOUR, ONE, FOUR_HUNDRED_SIXTY_FOUR, TWO, ZERO, THIRTY } from "./constants";
//responsive breakpoints for plugin
export  const responsive = {
    desktop: {
      breakpoint: { max: THREE_THOUSAND, min: THREE_THOUSAND_TWENTY_FOUR },
      items: FOUR,
      slidesToSlide: ONE, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: THREE_THOUSAND_TWENTY_FOUR, min: FOUR_HUNDRED_SIXTY_FOUR },
      items: TWO,
      slidesToSlide: ONE, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: FOUR_HUNDRED_SIXTY_FOUR, min:ZERO },
      items: ONE,
      slidesToSlide: ONE, // optional, default to 1.
      partialVisibilityGutter: THIRTY,
    },
  };
