import Image from "next/image";
import WorkspaceImage from "@/public/workspace.svg";
import AvatarImage from "@/public/avatar.jpg";
import Section from "@/components/section";
import Layout from "@/components/layouts/MainLayout";
import BioSection, { BioYear } from "@/components/bio-section";
import { FaGithub, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";
import Button from "@/components/button";
// import AntdIcon from "skills/antd.svg";
export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <Image
          src={WorkspaceImage}
          width={240}
          alt="workspace image"
          className="mx-auto mt-[30px] mb-[60px]"
        />
        <div className="mb-[30px] bg-white/30 text-black-1 dark:text-white rounded-[8px] p-[12px] text-center text-[14px]">
          Hello I`m a web developer based in Viet Nam!
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] justify-between mb-[15px]">
          <div>
            <h2 className="text-[26px] md:text-[36px] font-bold">
              Mr. Hoàng Tuấn Anh
            </h2>
            <p>Digital Craftsman ( Developer )</p>
          </div>
          <Image
            src={AvatarImage}
            alt="avatar"
            className="w-[100px] h-[100px] mx-auto  rounded-full object-cover object-top border-[2px] border-white"
          />
        </div>

        <Section title="Work" isUnderline>
          <p className="mb-[8px] indent-5">
            I am a web developer with a passion for creating beautiful,
            functional, and user-centered websites. With 2 years of experience
            in the field. I am always looking for new and innovative ways to
            bring my clients visions to life. I believe that Front end is about
            more than just making things look pretty – it`s about solving
            problems and creating intuitive, enjoyable experiences for users.
            Whether Im working on a website, mobile app, or other digital
            product, I bring my commitment to UI excellence and user-centered
            thinking to every project I work on. I look forward to the
            opportunity to bring my skills and passion to your next project.
          </p>
          <Link href="/projects">
            <Button className="mt-[12px] mx-auto">My Projects</Button>
          </Link>
        </Section>
        <Section title="Bio" isUnderline>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Lao Cai, Viet Nam
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Bachelors Program in the University of Transport
            Technology
          </BioSection>
          <BioSection>
            <BioYear>2022 to 2023</BioYear>
            Worked at{" "}
            <Link
              href="https://bytesoft.vn/"
              className="font-medium text-[#5FBDFF]"
            >
              Bytesoft! Viet Nam
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2023 to present</BioYear>
            Worked at{" "}
            <Link
              href="https://intecom.vtc.vn/"
              className="font-medium text-[#5FBDFF]"
            >
              VTC Intecom
            </Link>
          </BioSection>
        </Section>

        <Section title="I ♥" isUnderline>
          <div>Art, Music, Photography, Coding</div>
        </Section>
        <Section title="What can i do" isUnderline>
          <div className="py-[20px]">
            <h5 className="font-semibold text-[15px] mb-[2px]">
              {" "}
              FRONTEND APPS
            </h5>
            <p>
              Build client-side applications with modern features like SPA and
              maintain semantic coding style among other best practices for SEO
              optimisation. Use modern tech such as Next (ReactJS), TailwindCSS
            </p>
          </div>

          <div className="">
            <h5 className="font-semibold text-[15px] mb-[2px]">BACKEND APPS</h5>
            <p>
              Build simple server applications using cutting-edge technologies
              such as NestJS, ExpressJS and MongoDB
            </p>
          </div>
        </Section>
        <Section title="Tech I use" isUnderline>
          <div className="py-[20px]">
            <div className="flex items-center gap-[10px]">
              <span className="inline-block w-[3px] h-[23px] bg-primary" />
              <p className="font-semibold">Frontend UI/UX Design</p>
            </div>
            <div className="mt-[14px] pl-[4px] flex flex-wrap gap-[16px]">
              {[
                { logo: "/skills/js.svg", name: "JavaScript" },
                { logo: "/skills/react.svg", name: "React" },
                { logo: "/skills/nextjs.svg", name: "NextJS" },
                { logo: "/skills/redux.svg", name: "Redux" },
                { logo: "/skills/tailwind.svg", name: "Tailwind" },
                { logo: "/skills/bs.svg", name: "Bootstrap" },
                { logo: "/skills/antd.svg", name: "Antd" },
                { logo: "/skills/styled.svg", name: "Styled" },
                { logo: "/skills/scss.svg", name: "SCSS" },
                { logo: "/skills/html.svg", name: "HTML" },
                { logo: "/skills/css.svg", name: "CSS" },
                { logo: "/skills/figma.svg", name: "Figma" },
                { logo: "/skills/pts.svg", name: "Photoshop" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <Image
                    src={item.logo}
                    alt="logo-icon"
                    width={28}
                    height={28}
                    className=""
                  />
                  <span className="font-semibold text-[13px]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="py-[20px]">
            <div className="flex items-center gap-[10px]">
              <span className="inline-block font-bold w-[3px] h-[23px] bg-primary" />
              <p className="font-semibold">Backend Development</p>
            </div>
            <div className="mt-[14px] pl-[4px] flex flex-wrap gap-[16px]">
              {[
                { logo: "/skills/nodejs.svg", name: "Node.js" },
                { logo: "/skills/expressjs.svg", name: "ExpressJS" },
                { logo: "/skills/mongodb.svg", name: "MongoDB" },
                { logo: "/skills/mongoosejs.svg", name: "Mongoose" },
                { logo: "/skills/rest-api.svg", name: "RestAPI" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <Image
                    src={item.logo}
                    alt="logo-icon"
                    width={28}
                    height={28}
                    className=""
                  />
                  <span className="font-semibold text-[13px]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="py-[20px]">
            <div className="flex items-center gap-[10px]">
              <span className="inline-block w-[3px] h-[23px] bg-primary" />

              <p className="font-semibold">Others...and more!</p>
            </div>
            <div className="mt-[14px] pl-[4px] flex flex-wrap gap-[16px]">
              {[
                { logo: "/skills/npm.svg", name: "NPM" },
                { logo: "/skills/git.svg", name: "Git" },
                { logo: "/skills/github.svg", name: "Github" },
                { logo: "/skills/aws.svg", name: "AWS" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-[8px]">
                  <Image
                    src={item.logo}
                    alt="logo-icon"
                    width={28}
                    height={28}
                    className=""
                  />
                  <span className="font-semibold text-[13px]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>
        <Section title="On the web" isUnderline>
          <ul className="">
            <li className="">
              <Link href="https://www.facebook.com/jm.1511/" target="_blank">
                <div className="inline-flex items-center rounded-[4px] text-[#2c7a7b] font-medium py-[8px] px-[15px] hover:bg-[#BEFFF7]/80 duration-150">
                  <FaFacebook />
                  <p className="ml-[6px]">jm1511</p>
                </div>
              </Link>
            </li>
            <li className="">
              <Link
                href="https://www.instagram.com/hoanganh.ui/"
                target="_blank"
              >
                <div className="inline-flex items-center rounded-[4px] text-[#2c7a7b] font-medium py-[8px] px-[15px] hover:bg-[#BEFFF7]/80 duration-150">
                  <FaInstagramSquare />
                  <p className="ml-[6px]">hoanganh_1511</p>
                </div>
              </Link>
            </li>
            <li className="">
              <Link href="https://github.com/Hoanganh1511" target="_blank">
                <div className="inline-flex items-center rounded-[4px] text-[#2c7a7b] font-medium py-[8px] px-[15px] hover:bg-[#BEFFF7]/80 duration-150">
                  <FaGithub />
                  <p className="ml-[6px]">hoanganhss2k</p>
                </div>
              </Link>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}
