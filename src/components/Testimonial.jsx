const Testimonial = () => {
  return (
    <>
      <section id="testimonials">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl text-center font-bold">
            What&apos;s Different About Manage?
          </h2>

          <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
            <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Haye yu Sung</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, explicabo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem ratione ex delectus beatae
                obcaecati
              </p>
            </div>

            <div className="hidden flex-col items-center space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img
                src="img/avatar-richard.png"
                className="w-16 -mt-14"
                alt=""
              />
              <h5 className="text-lg font-bold">Gabriel Ryan</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, explicabo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem ratione ex delectus beatae
                obcaecati, a
              </p>
            </div>

            <div className="hidden flex-col items-center space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:flex">
              <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
              <h5 className="text-lg font-bold">Alice Dutcher</h5>
              <p className="text-sm text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quidem, explicabo. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptatem ratione ex delectus beatae
              </p>
            </div>
          </div>

          <div className="my-16">
            <a
              href="#"
              className="bg-brightRed text-white p-3 px-6 pt-2 rounded-full baseline hover:bg-brightRedLight"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
