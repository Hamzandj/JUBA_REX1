"use client";

import { useContext } from "react";
import { JubarexContext, JubarexContextType } from "../context";
import Link from "next/link";
import Image from "next/image";
import img001 from "@/assets/images/001.png";
 
import img019 from "@/assets/images/019.png";
import img021 from "@/assets/images/021.png";


import Shiba from "../../components/MeshComponent"
import  ModelViewer   from "@/components/ModelViewer";


export default function Models() {
  const {
    user,
    setUser,
    userProfile,
    setUserProfile,
    logout,
    refreshUserFromToken,
  } = useContext(JubarexContext) as JubarexContextType;

  console.log(img001)

 const items = [
    {
      id: 1,
      name: "Ancient Vase",
      description: "A beautiful ancient vase from the Ming dynasty.",
      imageUrl: img001.src,
      fileUrl : "/house1.glb"
    },
    {
      id: 2,
      name: "Pharaoh Statue",
      description: "A golden statue of Pharaoh Tutankhamun, found in the Valley of the Kings.",
      imageUrl: img019.src,
      fileUrl : "/house2.glb"
    },
    {
      id: 3,
      name: "Medieval Sword",
      description: "A finely crafted medieval sword from the 14th century, with intricate engravings.",
      imageUrl: img021.src,
      fileUrl : "/house3.glb"
    } 
  ];
 



  return (
    <section className="relative">
  <div className="container mx-auto p-4">
    <h2 className="text-2xl font-bold text-center mb-6">Models</h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <li
          key={item.id}
          className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105 transform duration-300"
        >
          <Link href={`/models/${item.id}`} passHref>
            <div className="cursor-pointer">
              <div className="w-full h-48 mb-4 relative overflow-hidden rounded-lg">
                {/* Keep Shiba component here */}
                {/* <Shiba fileUrl={item.fileUrl} /> */}
                   <Image
                    src={item.imageUrl}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  /> 
                {/* <ModelViewer fileUrl={item.fileUrl} /> */}

                {/* <ModelViewer/> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
</section>

  );
}
