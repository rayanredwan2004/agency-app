const IntroLayout = ({ pageName }) => {
  return (
    <div className="bg-[#F8F9FC] p-20">
      <h1 className="text-4xl font-medium mb-5">{pageName}</h1>
      <div className="flex space-x-4">
        <p className="font-medium">Home</p>
        <svg
          className="mt-[4.4px]"
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="10"
          viewBox="0 0 320 512"
        >
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
        <p className="text-green-500 font-medium">{pageName}</p>
      </div>
    </div>
  );
};

export default IntroLayout;
