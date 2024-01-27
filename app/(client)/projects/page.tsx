import Image from "next/image";
import Section from "@/components/section";
import Layout from "@/components/layouts/MainLayout";
import Card from "@/components/card";
import Work1 from "@/public/work-1.webp";
import Work2 from "@/public/work-2.webp";
import BOfficeProject from "@/public/boffice.png";
import AuditionProject from "@/public/audition.jpg";
import ToaSoanHoiTuProject from "@/public/toasoanhoitu.png";
export default function Projects() {
  return (
    <>
      <div className="min-h-screen">
        <Section title="Enterprise Projects">
          <div className="grid grid-cols-2 gap-[25px]">
            <Card
              desc="An NFT Marketplace about Physical Art. NFT allows artists to exhibit their artworks and reach millions of art lovers in all countries around the world"
              title="Avatar Art"
              imageUrl={"https://avatarart.io/images/preview.png"}
              url="https://avatarart.io/"
            />
            <Card
              desc="Voting Portal allows organizations, group and communities to make decisions online by providing e-voting technology"
              title="BOffice"
              imageUrl={BOfficeProject}
              url="https://boffice.bytesoft.vn/"
            />
            <Card
              desc="Where Audition players can pair up, break keys to receive gifts, and many more features await."
              title="AU-League"
              imageUrl={AuditionProject}
              url="https://au.vtc.vn/auleague/"
            />
            <Card
              desc="Dashboard specializes in managing newspapers, news channels and events."
              title="Tòa soạn hội tụ VTC"
              imageUrl={ToaSoanHoiTuProject}
              url="https://demo-cms.vtcplay.vn/list-events"
            />
            <Card
              desc="Duyên dáng ngoại thương, Hoa hậu hoàn vũ, MC Nhí"
              title="BVote"
              imageUrl={
                "https://bvote.vn/_next/image?url=%2Fimages%2Fmeeting%2FbannerImg.png&w=3840&q=75"
              }
              url="https://bvote.vn/"
            />
          </div>
        </Section>
        <br />
        <Section title="Personal Projects">
          <div className="grid grid-cols-2 gap-[25px]"></div>
        </Section>
        <Section title="Animation Projects">
          <div className="grid grid-cols-2 gap-[25px]"></div>
        </Section>
      </div>
    </>
  );
}
