import Image from "next/image";
import Card from "./components/Card";


export default function Home() {
  return (
   <div className="flex flex-wrap">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
   </div>
  );
}


// postgresql://postgres.jjuclcgascwyegoqahtr:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres