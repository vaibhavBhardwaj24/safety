import React, { useState } from "react";

const ResourcePage = () => {
  const [resources, setResources] = useState(true);
  return (
    <div className="h-screen w-full flex flex-col justify-start items-center  pt-16">
      <h1 className="text-7xl text-red-500 font-bold">Resources</h1>
      <div className=" w-3/4 p-4">
        <div className="text-2xl flex w-1/5 px-0 py-1 rounded-lg bg-black/20  justify-around">
          <p
            className={`cursor-pointer px-2 transition-all duration-300 ease-in-out  ${
              resources ? "bg-white rounded-lg " : ""
            }`}
            onClick={() => setResources(true)}
          >
            Resources
          </p>
          <p
            className={`cursor-pointer px-2 transition-all duration-300 ease-in-out  ${
              !resources ? "bg-white rounded-lg " : ""
            }`}
            onClick={() => setResources(false)}
          >
            Statistics
          </p>
        </div>
        {resources ? (
          <div>
            <div id="steps" class="py-12 px-8 ">
              <div class="max-w-6xl mx-auto">
                <h2 class="text-3xl font-semibold text-center mb-8">
                  What to Do in Case of Sexual Harassment
                </h2>

                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-2">
                    1. Ensure Immediate Safety
                  </h3>
                  <p>
                    Move to a safe place and call for help. Reach out to
                    friends, family, or nearby people for immediate support.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-2">2. Contact Authorities</h3>
                  <p>
                    Dial <strong>100 (Police)</strong>,{" "}
                    <strong>181 (Women’s Helpline)</strong>, or{" "}
                    <strong>112</strong> to report the incident and seek
                    protection.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-2">3. Document Evidence</h3>
                  <p>
                    Save messages, recordings, or any evidence of the
                    harassment. For physical evidence, avoid washing or
                    discarding items involved.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-2">4. File an FIR</h3>
                  <p>
                    Go to the nearest police station or file a{" "}
                    <strong>Zero FIR</strong>. For online harassment, report
                    through the{" "}
                    <a
                      href="https://cybercrime.gov.in"
                      class="text-blue-500 underline"
                    >
                      National Cyber Crime Reporting Portal
                    </a>
                    .
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-xl font-bold mb-2">5. Seek Legal Help</h3>
                  <p>
                    Lodge a complaint with the{" "}
                    <strong>National Commission for Women</strong> and get legal
                    support from NGOs like <strong>Sakhi</strong> and{" "}
                    <strong>Majlis</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {" "}
            <div class="text-center max-w-2xl mx-auto mb-12">
              <p class="text-lg">
                The latest crime data reveals the challenges women face in
                India. These statistics highlight key insights from the National
                Crime Records Bureau (NCRB) and other reliable sources to
                understand the current state of women's safety.
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-5">
              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Crimes Against Women</h3>
                <p class="text-3xl font-bold">4,28,278</p>
                <p class="text-gray-500">Total reported cases in 2022 (NCRB)</p>
              </div>

              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Domestic Violence</h3>
                <p class="text-3xl font-bold">1,36,962</p>
                <p class="text-gray-500">
                  Cases under Cruelty by Husband/Relatives
                </p>
              </div>

              <div class="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 class="text-xl font-semibold mb-4">Rape Cases</h3>
                <p class="text-3xl font-bold">31,677</p>
                <p class="text-gray-500">Reported cases in 2022</p>
              </div>
            </div>
            <div class="text-center py-12">
              <h3 class="text-2xl font-bold mb-4">Key Insights</h3>
              <p class="max-w-2xl mx-auto mb-8">
                - Uttar Pradesh reported the highest number of crimes against
                women, followed by Rajasthan and Maharashtra.
                <br />
                - Crimes under cruelty by husband or relatives account for a
                significant proportion of reported cases.
                <br />- The conviction rate for crimes against women remains a
                concern, with efforts underway to address it.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePage;
