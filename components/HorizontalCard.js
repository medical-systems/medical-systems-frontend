import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";

const people = [
  {
    id: 1,
    name: 'Tooth extraction',
    avatar:
      'https://www.aspiredental.ca/wp-content/uploads/2023/03/how-do-your-gums-heal-after-a-tooth-extraction-scaled.jpg',
    additionalInfo: 'You will get a local anesthetic to numb the area around the tooth so you do not feel pain.Your dentist may loosen the tooth in the gum using a tooth removal instrument called an elevator. Your dentist will then place forceps around the tooth and pull the tooth out from the gum',

  },

  {
    id: 6,
    name: 'Orthodontics',
    avatar:
      'https://www.stamforddentalarts.com/wp-content/uploads/2021/12/Orthodontics.jpg',
    additionalInfo: 'if you have crooked, overlapped, twisted or gapped teeth. Common orthodontic treatments include traditional braces, clear aligners and removable retainers.',

  },
  {
    id: 7,
    name: 'Tooth nerve pulling',
    avatar:
      'https://kes.com.ua/wp-content/uploads/2022/10/what-does-a-dental-nerve-look-like.jpeg',
    additionalInfo: ' root canal is performed if the nerve pain is due to a tooth that is severely infected or decayed. During a root canal, a dentist removes the damaged nerve and the pulp from inside the tooth, cleans the area, and seals it.',

  },
  {
    id: 8,
    name: 'Teeth whitening',
    avatar:
      'https://www.myperfectsmiledds.com/wp-content/uploads/2019/10/bigstock-Veneers-Lumineers-Onlays-Mi-301293493.jpg',
    additionalInfo: 'Laser bleaching at a dental clinic:It is the fastest way to whiten teeth. It requires only one session and no anesthesia. To protect the mouth and gums and avoid the effect of bleaching materials, a semi-gel is applied to the gums, then the teeth are coated with a chemical solution made of hydrogen peroxide.',

  },
  {
    id: 9,
    name: 'Dental implants',
    avatar:
      'https://www.shutterstock.com/image-illustration/3d-render-lower-jaw-cast-260nw-2294049901.jpg',
    additionalInfo: 'procedure that replaces tooth roots with metal, screwlike posts and replaces damaged or missing teeth with artificial teeth that look and function much like real ones. Dental implant surgery can offer a welcome alternative to dentures or bridgework that doesnt fit well and can offer an option when a lack of natural teeth roots dont allow building denture or bridgework tooth replacements.',

  },
  {
    id: 10,
    name: 'Restoration of the front teeth',
    avatar:
      'https://static.wixstatic.com/media/346f57_6bc5d965478e4938b789296774b87ecd~mv2.jpg/v1/fit/w_320%2Ch_1000%2Cal_c%2Cq_80,enc_auto/file.jpg',
    additionalInfo: 'dental aesthetics as a procedure to enhance the overall appearance of the teeth. The primary purpose of dental aesthetics is to keep the teeth aligned, improve their structure, and beautify their color and shape so that you can smile confidently.',

  },
]

export default function HorizontalCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full flex justify-center items-center h-screen bg-gray-100">
      <Card className="animate-pulse w-full max-w-3xl flex-row shadow-lg">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={people[currentIndex]?.avatar}
            alt="" height={500} width={500}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h2" color="gray" className="animate-pulse mb-8 font-normal">
            {people[currentIndex]?.name}
          </Typography>
          <Typography color="gray" className="animate-pulse mb-8 font-normal">
            {people[currentIndex]?.additionalInfo}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}