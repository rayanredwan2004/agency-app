import Contact from "@/components/Contact";
import IntroLayout from "@/components/IntroLayout";
import NavBar from "@/components/NavBar";
import TestimonialList from "@/components/TestimonialList";

const page = () => {
  return (
    <>
      <NavBar className="bg-[#F8F9FC]" />
      <IntroLayout pageName={"Testimonial List"} />
      <TestimonialList />
      <Contact />
    </>
  );
};

export default page;
