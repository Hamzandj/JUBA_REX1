"use client";

// pages/items/[id].tsx
import img001 from "@/assets/images/001.png";
import img019 from "@/assets/images/019.png";
import img021 from "@/assets/images/021.png";

import Image from "next/image";
import { useEffect, useState } from "react";
import "@google/model-viewer-effects";
import ModelViewer from "@/components/ModelViewer";

const ItemDetail = ({ params }) => {
    const { id } = params;

    const [showItem, setShowItem] = useState([]);

    const items = [
        {
            id: 1,
            name: "Ancient Vase",
            description:
                "This exquisite ancient vase, dating back to the Ming dynasty, showcases the artistry and craftsmanship of its time. Hand-painted with intricate floral patterns and glazes that have stood the test of centuries, this vase not only serves as a decorative piece but also tells a story of the rich cultural heritage of China. Its unique shape and vibrant colors make it a stunning addition to any collection.",
            imageUrl: img001.src,
            fileUrl: "https://raw.githubusercontent.com/ferrari212/vesseljs/master/examples/3D_models/GLTF/Gunnerus.glb",
        },
        {
            id: 2,
            name: "Pharaoh Statue",
            description:
                "A remarkable golden statue of Pharaoh Tutankhamun, meticulously crafted and adorned with precious jewels, was discovered in the Valley of the Kings. This statue represents the glory of ancient Egypt and the opulence of its rulers. With detailed hieroglyphics inscribed on its base, it provides insight into the religious beliefs and practices of the time. Displaying this statue not only highlights the craftsmanship of ancient artisans but also connects us to the mysteries of Egypt's past.",
            imageUrl: img019.src,
            fileUrl: "https://raw.githubusercontent.com/ferrari212/vesseljs/master/examples/3D_models/GLTF/Gunnerus.glb",
        },
        {
            id: 3,
            name: "Medieval Sword",
            description:
                "This finely crafted medieval sword, originating from the 14th century, is a testament to the artistry of weapon-making in the Middle Ages. Featuring intricate engravings along the blade and a beautifully designed hilt, this sword was not only a practical weapon but also a symbol of nobility and chivalry. Its balance and craftsmanship reflect the advanced techniques of the period, making it a prized possession for any collector. Holding this sword allows one to imagine the battles fought and the legends created during its time.",
            imageUrl: img021.src,
            fileUrl: "/house3.glb",
        },
    ];

    useEffect(() => {
        const x = items.filter((item) => {
            return item.id === +id;
        })[0];

        setShowItem(x);
    }, [id]);

    // Fetch data or display information based on the item ID
    return (
      <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">
          Item Detail for {showItem?.name}
      </h1>
      <li
          key={showItem?.id}
          className="p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow flex bg-gray-800 text-gray-100"
      >
          <div className="w-1/2 p-4">
              <h3 className="text-xl font-semibold">{showItem?.name}</h3>
              <p className="text-gray-200 mt-2">
                  {showItem?.description}
              </p>
          </div>
          <div className="w-1/2">
              <ModelViewer fileUrl={showItem?.fileUrl} />
          </div>
      </li>
  </div>
  
    );
};

export default ItemDetail;
