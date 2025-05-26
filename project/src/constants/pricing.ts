export interface PricingPlan {
  name: string;
  description: string;
  price: number | string;
  period?: string;
  buttonText: string;
  features: string[];
  nonFeatures?: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    description: "Perfect for homeowners exploring solar options",
    price: 0,
    buttonText: "Start Free Trial",
    features: [
      "Basic solar savings calculator",
      "Standard system recommendations",
      "Limited to 2 property analyses",
      "Email support"
    ],
    nonFeatures: [
      "Weather-integrated projections",
      "Detailed PDF reports",
      "Advanced ROI calculator",
      "White-label reports"
    ]
  },
  {
    name: "Premium",
    description: "For homeowners serious about solar investment",
    price: 29,
    period: "month",
    buttonText: "Get Started",
    features: [
      "Advanced AI-powered calculator",
      "Personalized system recommendations",
      "Weather-integrated projections",
      "Detailed PDF reports",
      "Unlimited property analyses",
      "Priority email & chat support"
    ],
    nonFeatures: [
      "API access",
      "White-label reports"
    ]
  },
  {
    name: "Enterprise",
    description: "For solar professionals and installers",
    price: 99,
    period: "month",
    buttonText: "Contact Sales",
    features: [
      "Everything in Premium",
      "API access",
      "White-label reports",
      "Installer dashboard",
      "Customer management tools",
      "Bulk property analysis",
      "Priority phone support",
      "Custom integrations"
    ]
  }
];