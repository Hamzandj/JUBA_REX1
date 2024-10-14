import { Artefact } from "@/types";
import OSS from "ali-oss";

let artefacts = [
  {
    id: 1,
    name: "Ancient Vase",
    description:
      "A beautiful ancient vase from the Ming dynasty. This exquisite piece showcases the mastery of ancient Chinese pottery, with intricate patterns and a timeless design. Perfect for collectors or history enthusiasts.",
    imageUrl: "/assets/images/001.png",
    fileUrl: "/assets/3d/house1.glb",
  },
  {
    id: 2,
    name: "Pharaoh Statue",
    description:
      "A golden statue of Pharaoh Tutankhamun, found in the Valley of the Kings. The statue captures the essence of the Egyptian ruler's majesty, with intricate detailing and the iconic headdress, making it a prized artifact.",
    imageUrl: "/assets/images/002.png",
    fileUrl: "/assets/3d/house1.glb",
  },
  {
    id: 3,
    name: "Medieval Sword",
    description:
      "A finely crafted medieval sword from the 14th century, with intricate engravings along the blade. This weapon of choice for knights is a symbol of honour, bravery, and strength. It tells the story of battles fought and victories earned.",
    imageUrl: "/assets/images/003.png",
    fileUrl: "/assets/3d/house1.glb",
  },
  {
    id: 1,
    name: "Ancient Vase",
    description:
      "A beautiful ancient vase from the Ming dynasty. This exquisite piece showcases the mastery of ancient Chinese pottery, with intricate patterns and a timeless design. Perfect for collectors or history enthusiasts.",
    imageUrl: "/assets/images/005.png",
    fileUrl: "/assets/3d/house1.glb",
  },
  {
    id: 2,
    name: "Pharaoh Statue",
    description:
      "A golden statue of Pharaoh Tutankhamun, found in the Valley of the Kings. The statue captures the essence of the Egyptian ruler's majesty, with intricate detailing and the iconic headdress, making it a prized artifact.",
    imageUrl: "/assets/images/008.png",
    fileUrl: "/assets/3d/house1.glb",
  },
  {
    id: 3,
    name: "Medieval Sword",
    description:
      "A finely crafted medieval sword from the 14th century, with intricate engravings along the blade. This weapon of choice for knights is a symbol of honour, bravery, and strength. It tells the story of battles fought and victories earned.",
    imageUrl: "/assets/images/019.png",
    fileUrl: "/assets/3d/house1.glb",
  },
] as Artefact[];

const client = new OSS({
  region: process.env.OSS_REGION as string,
  accessKeyId: process.env.OSS_ACCESS_KEY_ID as string,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET as string,
  bucket: process.env.OSS_BUCKET as string,
});

export function getAllArtefacts(): Artefact[] {
  return artefacts;
}

export function getArtefactById(id: number): Artefact | undefined {
  const artefact = artefacts.find((artefact) => artefact.id === id);
  return artefact;
}

export async function addArtefact(formData: FormData): Promise<Artefact | undefined> {
  const name = formData.get("name") as string;
  const imageFile = formData.get("image") as File;
  const threeDItemFile = formData.get("threeDItem") as File;
  let imagePath = "";
  let modelPath = "";
  try {
    // Upload image file if it exists
    if (imageFile) {
      const imageResult = await client.put(
        `uploads/images/${name}`,
        imageFile
      );
      imagePath = imageResult.url; // Save the image path
    }

    const modelResult = await client.put(
      `uploads/3dModels/${name}`,
      threeDItemFile
    );
    modelPath = modelResult.url; // Save the 3D model path

    let artefact: Artefact = {
      id: 1000,
      name: name,
      description: formData.get("description") as string,
      imageUrl: imagePath,
      fileUrl: modelPath,
    };

    artefacts.push(artefact);

    return artefact;
  } catch (error) {
    console.error("Error uploading to OSS:", error);
  }
}

export function deleteArtefact(id: number): Artefact[] | undefined {
  artefacts = artefacts.filter((item) => item.id !== id);
  return artefacts;
}

export function updateArtefact(updatedArtefact: Artefact): Artefact[] {
  const newArtefacts = artefacts.map((artefact) => {
    if (artefact.id === updatedArtefact.id) {
      return updatedArtefact; // Replace existing artefact with updated one
    }
    return artefact;
  });
  artefacts = newArtefacts;
  return artefacts;
}
