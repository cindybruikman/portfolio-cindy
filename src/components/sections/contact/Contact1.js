import FormSelect from "@/components/shared/Inputs/FormSelect";

const Contact1 = () => {
  return (
    <section id="contact">
      <div className="bg-cream-light-color dark:bg-black-color py-60px md:py-20 lg:py-100px xl:py-30">
        <div className="container">
          <div className="flex flex-col-reverse md:grid md:grid-cols-12 md:items-center gap-x-6 gap-y-10 overflow-hidden">
            {/* <!-- Form --> */}
            <div className="md:col-start-1 md:col-span-7 lg:col-span-6">
              <form
                action="https://formspree.io/f/mvgakrzl"
                method="POST"
                className="contact px-15px py-30px md:px-5 lg:px-30px lg:py-10 xl:px-10 bg-white-color dark:bg-primary-color-light rounded-15px"
              >
                <div style={{ display: "none" }}>
                  <label htmlFor="website">Laat dit veld leeg</label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-25px text-center">
                  <h2 className="text-3xl md:text-size-35 lg:text-size-40 xl:text-size-45 bg-gradient-text-light dark:bg-gradient-text bg-clip-text xl:leading-1.2 text-transparent mb-15px">
                    Neem Contact op!
                  </h2>
                  <p className="text-primary-color-light dark:text-body-color">
                    Voor vragen of een samenwerking neem gerust contact op.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-15px">
                  <div>
                    <input
                      type="text"
                      placeholder="Voornaam"
                      className="text-primary-color-light dark:text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg placeholder:text-gray-color"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="achternaam"
                      placeholder="Achternaam"
                      required
                      className="text-primary-color-light dark:text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg placeholder:text-gray-color"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email adres"
                      required
                      className="text-primary-color-light dark:text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg placeholder:text-gray-color"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="telefoon"
                      placeholder="Telefoonnummer"
                      className="text-primary-color-light dark:text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg placeholder:text-gray-color"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      name="bericht"
                      rows="6"
                      placeholder="Je bericht"
                      required
                      className="text-primary-color-light dark:text-white-color w-full px-5 py-14px border border-gray-color-3 bg-cream-light-color dark:bg-black-color focus:border-primary-color rounded-lg placeholder:text-gray-color"
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2 text-center mt-4">
                    <button
                      type="submit"
                      className="text-size-15 font-bold text-white-color capitalize py-17px px-35px bg-gradient-secondary rounded-full transition-all duration-300"
                    >
                      Stuur bericht
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact1;
