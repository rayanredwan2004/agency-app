import AllProject from "@/components/AllProject";
import Contact from "@/components/Contact";
import IntroLayout from "@/components/IntroLayout";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <>
      <NavBar className="bg-[#F8F9FC]" />
      <IntroLayout pageName={"All Project"} />
      <AllProject />
      <Contact />
    </>
  );
};

export default page;
