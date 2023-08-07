const Feature = () => {
  return (
    <>
      <section id="features">
        <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
          <div className="flex flex-col space-y-12 md:w-1/2">
            <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
              What&apos;s Different About Manage?
            </h2>
            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos quidem dicta doloremque nemo blanditiis molestias
              possimus a nihil consequatur? Nam!
            </p>
          </div>

          <div className="flex flex-col space-y-8 md:w-1/2">
            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    01
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Track Company-wide Progress
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 font-bold text-lg md:block">
                  Track Company-wide Progress
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  esse voluptatibus eaque consequatur aut asperiores eius
                  accusamus ullam veritatis harum natus illo molestiae,
                  exercitationem rerum ea, omnis, at incidunt aperiam.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    02
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Advanced Built-in Reports
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 font-bold text-lg md:block">
                  Advanced Built-in Reports
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  esse voluptatibus eaque consequatur aut asperiores eius
                  accusamus ullam veritatis harum natus illo molestiae,
                  exercitationem rerum ea, omnis, at incidunt aperiam.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
              <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
                <div className="flex items-center space-x-2">
                  <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                    03
                  </div>
                  <h3 className="text-base font-bold md:mb-4 md:hidden">
                    Everything you need in One Place
                  </h3>
                </div>
              </div>

              <div>
                <h3 className="hidden mb-4 font-bold text-lg md:block">
                  Everything you need in One Place
                </h3>
                <p className="text-darkGrayishBlue">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  esse voluptatibus eaque consequatur aut asperiores eius
                  accusamus ullam veritatis harum natus illo molestiae,
                  exercitationem rerum ea, omnis, at incidunt aperiam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feature;
