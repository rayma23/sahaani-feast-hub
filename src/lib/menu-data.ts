export type MenuCategoryId =
  | "chicken"
  | "beef"
  | "agatogo"
  | "omelet"
  | "snacks"
  | "drinks"
  | "fruits_salads"
  | "packages";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: MenuCategoryId;
  image?: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // Chicken
  { id: "chicken-wings", name: "Chicken wings", price: "6.5k rwf", category: "chicken" },
  { id: "chicken-stir-fry", name: "Chicken stir fry", price: "7.5k rwf", category: "chicken" },
  { id: "chicken-legs", name: "Chicken legs", price: "8k rwf", category: "chicken" },
  { id: "chicken-breast", name: "Chicken breast", price: "8.5k rwf", category: "chicken" },

  // Beef
  { id: "beef-fillet", name: "Beef fillet", price: "8.5k rwf", category: "beef", isPopular: true },
  { id: "beef-stir-fry", name: "Beef stir fry", price: "8k rwf", category: "beef" },
  { id: "beef-steak", name: "Beef steak", price: "8.5k rwf", category: "beef" },

  // Agatogo & Boil
  { id: "agatogo-beef", name: "Agatogo Beef", price: "6.5k rwf", category: "agatogo" },
  { id: "agatogo-chicken", name: "Agatogo Chicken", price: "6k rwf", category: "agatogo" },
  { id: "agatogo-vegetable", name: "Agatogo vegetable", price: "4.5k rwf", category: "agatogo" },
  { id: "boiled-chicken", name: "Boiled Chicken", price: "7k rwf", category: "agatogo" },
  { id: "boiled-beef", name: "Boiled Beef", price: "6.5k rwf", category: "agatogo" },
  { id: "boiled-fish", name: "Boiled Fish", price: "7.5k rwf", category: "agatogo" },

  // Omelet
  { id: "special-omelet", name: "Special Omelet", description: "Meat, onion, green pepper", price: "5k rwf", category: "omelet" },
  { id: "plain-omelet", name: "Plain Omelet", description: "Tomato, eggs", price: "3k rwf", category: "omelet" },
  { id: "spanish-omelet", name: "Spanish Omelet", description: "Tomato, onion, green pepper", price: "4k rwf", category: "omelet" },

  // Snacks
  { id: "chapatti", name: "Chapatti", price: "700 rwf", category: "snacks" },
  { id: "veg-samosa", name: "Vegetable Samosa", price: "300 rwf", category: "snacks" },
  { id: "beef-samosa", name: "Beef Samosa", price: "500 rwf", category: "snacks" },
  { id: "rolex", name: "Rolex", price: "2.5k – 5k rwf", category: "snacks" },
  { id: "spring-roll", name: "Spring roll (chicken & beef)", price: "400 rwf", category: "snacks" },

  // Drinks
  { id: "mango-juice", name: "Mango", price: "4k rwf", category: "drinks" },
  { id: "passion-juice", name: "Passion", price: "3.5k rwf", category: "drinks" },
  { id: "tree-tomato", name: "Tree tomato", price: "4k rwf", category: "drinks" },
  { id: "watermelon", name: "Watermelon", price: "3k rwf", category: "drinks" },
  { id: "cocktail", name: "Cocktail juice", price: "4.5k rwf", category: "drinks" },
  { id: "smoothies", name: "Smoothies", price: "3.5k – 5k rwf", category: "drinks" },
  { id: "soda", name: "Soda", price: "1k rwf", category: "drinks" },

  // Fruits & Salads
  { id: "fruit-plate", name: "Mango, Banana, tree tomato, Watermelon", price: "5k rwf", category: "fruits_salads" },
  { id: "mix-salad", name: "Mix salad: Lettuce, tomato, cucumber, onion", price: "4k rwf", category: "fruits_salads" },
  { id: "avocado-salad", name: "Avocado salad: Lettuce, avocado", price: "2.5k rwf", category: "fruits_salads" },
  { id: "chicken-salad", name: "Chicken salad: Chicken, tomato, onion", price: "5.5k rwf", category: "fruits_salads" },

  // Packages
  { id: "combo-2", name: "Sahaani Combo for 2", description: "Rice, beef or chicken, fries or plantain, salad & homemade chapatti", price: "14k rwf", category: "packages", isPopular: true },
  { id: "solo-1", name: "Sahaani Solo delight for 1", description: "Rice, beef or chicken, fries or plantain, salad & homemade chapatti", price: "6k rwf", category: "packages" },
  { id: "quick-1", name: "Sahaani Quick bite for 1", description: "Rice, fries beef or peas/beans, vegetables", price: "4k rwf", category: "packages" },
];

export const categoryOrder: { id: MenuCategoryId; name: string }[] = [
  { id: "chicken", name: "Chicken" },
  { id: "beef", name: "Beef" },
  { id: "agatogo", name: "Agatogo & Boil" },
  { id: "omelet", name: "Omelet" },
  { id: "snacks", name: "Snacks" },
  { id: "drinks", name: "Soft Drinks" },
  { id: "fruits_salads", name: "Fruits & Salads" },
  { id: "packages", name: "Sahaani Packages" },
];


