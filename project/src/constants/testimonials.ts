export interface Testimonial {
  name: string;
  title: string;
  location?: string;
  quote: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sibongile M.",
    title: "Homeowner",
    location: "Cape Town",
    quote: "I never thought solar could be this simple. SolarIntelli showed me exactly what I'd save. I booked my installer the next week!",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
  },
  {
    name: "Thabiso L.",
    title: "Solar Installation Partner",
    location: "Johannesburg",
    quote: "As an installer, I now close 3x more deals just by showing clients their custom savings reports. The AI recommendations are spot-on.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    name: "Jennifer W.",
    title: "Clean Energy Advocate",
    location: "Durban",
    quote: "SolarIntelli helped me convince my entire neighborhood to go solar. The ROI calculations are incredibly accurate and easy to understand.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "David C.",
    title: "Solar Energy Consultant",
    quote: "The level of detail in these reports is incredible. My clients love seeing the exact savings breakdown and system recommendations.",
    rating: 5,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  }
];