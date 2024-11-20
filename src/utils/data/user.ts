interface imageProps {
  id: number;
  name: string;
  role?: string;
  image: string;
  email?: string;
}

export const user: imageProps[] = [
  {
    id: 1,
    name: "Tosin Eme",
    role: "Product Designer",
    image: "/images/tosin_profile_pic.png",
    email: "toseme@gmail.com",
  },
];
