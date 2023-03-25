let allModal = document.getElementById('allModal');

allModal.innerHTML = `
  <!-- Job Add Modal  -->
  <input type="checkbox" id="my-modal-6" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box h-full flex flex-col justify-between scrollbar-hide">
      <div>
        <h3 class="font-bold text-lg">Add New Job!</h3>
        <div>
          <div class="flex justify-between space-x-1">
            <form action="form" class="space-y-4 w-full">

              <div class="logoPreview">
                <div x-data="{photoName: null, photoPreview: null}" class="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                  <!-- Photo File Input -->
                  <input type="file" class="hidden" x-ref="photo" x-on:change="
                                      photoName = $refs.photo.files[0].name;
                                      const reader = new FileReader();
                                      reader.onload = (e) => {
                                          photoPreview = e.target.result;
                                      };
                                      reader.readAsDataURL($refs.photo.files[0]);
                  ">

                  <!-- <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 text-start" for="photo">
                    Logo <span class="text-red-600"> </span> -->
                  </label>

                  <div class="text-center flex flex-col">
                    <!-- Current Profile Photo -->
                    <div class="mt-2" x-show="! photoPreview">
                      <img
                        src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                        class="w-20 h-20 m-0 rounded-full shadow">
                    </div>
                    <!-- New Profile Photo Preview -->
                    <div class="mt-2" x-show="photoPreview" style="display: none;">
                      <span class="block w-20 h-20 rounded-full m-0 shadow"
                        x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'"
                        style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');">
                      </span>
                    </div>
                    <button type="button"
                      class="inline-flex  px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:text-green-400 dark:hover:text-green-400 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 w-40 flex justify-center items-center hover:border-green-400"
                      x-on:click.prevent="$refs.photo.click()">
                      Upload Logo
                    </button>
                  </div>
                </div>
              </div>

              <div class="companyName ">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                  Name</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="example" required>
              </div>

              <div class="date flex my-6  w-full  flex-col items-start">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apply Star
                  to End Date</label>
                <div class="relative w-full">
                  <input name="start" type="text "
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full"
                    placeholder="Select date start">
                  <ion-icon name="calendar-outline" class="absolute left-4 top-3"></ion-icon>
                </div>
              </div>

              <div class="flex justify-between">
                <div class="category w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Category--</option>
                    <option value="Maneger">Maneger</option>
                    <option value="Junior Maneger">Junior Maneger</option>
                  </select>
                </div>

                <div class="vacancyType w-[48%]">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vacancy
                    Type</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Vacancy--</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="offeredSalary w-[48%]">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Offered
                    Salary</label>
                  <input type="number" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="15000.00" required>
                </div>

                <div class="experience w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                  <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="2 Year" required>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="industry w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Vacancy--</option>
                    <option value="Management">Management</option>
                    <option value="Finance">Finance</option>
                    <option value="Html Department">Html Department</option>
                    <option value="SEO">SEO</option>
                    <option value="Banking">Banking</option>
                    <option value="Designing">Designing</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>

                <div class="qualification w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                  <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Bachelor Degree" required>
                </div>
              </div>

              <div class="jobDetails">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                  Details</label>
                <textarea type="text" id="first_name" rows="10"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 scrollbar-hide"
                  placeholder="Put your job details here.." required .></textarea>
              </div>

              <div class="skillsRequired">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills
                  Required</label>
                <textarea type="text" id="first_name" rows="5"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 scrollbar-hide"
                  placeholder="Put skills Required here.." required .></textarea>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div class="modal-action">
        <label for="my-modal-6" class="btn btn-error">Cancel</label>
        <button type="submit" for="my-modal-6" class="btn btn-success outline-none focus:border-none">Add</button>
      </div>
    </div>
  </div>

  <!-- Edit Modal  -->
  <input type="checkbox" id="my-modal-edit" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box h-full flex flex-col justify-between scrollbar-hide">
      <div>
        <h3 class="font-bold text-lg">Edit Job Post!</h3>
        <div>
          <div class="flex justify-between space-x-1">
            <form action="form" class="space-y-4 w-full">

              <div class="logoPreview">
                <div x-data="{photoName: null, photoPreview: null}" class="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                  <!-- Photo File Input -->
                  <input type="file" class="hidden" x-ref="photo" x-on:change="
                                                  photoName = $refs.photo.files[0].name;
                                                  const reader = new FileReader();
                                                  reader.onload = (e) => {
                                                      photoPreview = e.target.result;
                                                  };
                                                  reader.readAsDataURL($refs.photo.files[0]);
                              ">

                  <!-- <label class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2 text-start" for="photo">
                                Logo <span class="text-red-600"> </span> -->
                  </label>

                  <div class="text-center flex flex-col">
                    <!-- Current Profile Photo -->
                    <div class="mt-2" x-show="! photoPreview">
                      <img
                        src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                        class="w-20 h-20 m-0 rounded-full shadow">
                    </div>
                    <!-- New Profile Photo Preview -->
                    <div class="mt-2" x-show="photoPreview" style="display: none;">
                      <span class="block w-20 h-20 rounded-full m-0 shadow"
                        x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'"
                        style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');">
                      </span>
                    </div>
                    <button type="button"
                      class="inline-flex  px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:text-green-400 dark:hover:text-green-400 focus:outline-none focus:border-green-400 focus:shadow-outline-green active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mt-2 w-40 flex justify-center items-center hover:border-green-400"
                      x-on:click.prevent="$refs.photo.click()">
                      Replace Logo
                    </button>
                  </div>
                </div>
              </div>

              <div class="companyName ">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company
                  Name</label>
                <input type="text" id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                  placeholder="example" required>
              </div>

              <div class="date flex my-6  w-full  flex-col items-start">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apply Star
                  to End Date</label>
                <div class="relative w-full">
                  <input name="start" type="text "
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 w-full"
                    placeholder="Select date start">
                  <ion-icon name="calendar-outline" class="absolute left-4 top-3"></ion-icon>
                </div>
              </div>

              <div class="flex justify-between">
                <div class="category w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Category--</option>
                    <option value="Maneger">Maneger</option>
                    <option value="Junior Maneger">Junior Maneger</option>
                  </select>
                </div>

                <div class="vacancyType w-[48%]">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Vacancy
                    Type</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Vacancy--</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Freelance">Freelance</option>
                    <option value="Internship">Internship</option>
                    <option value="Volunteer">Volunteer</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="offeredSalary w-[48%]">
                  <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Offered
                    Salary</label>
                  <input type="number" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="15000.00" required>
                </div>

                <div class="experience w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                  <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="2 Year" required>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="industry w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Industry</label>
                  <select
                    class="w-full text-sm rounded-lg  dark:bg-gray-700 text-gray-700 dark:text-gray-200 outline-none cursor-pointer focus:ring-green-500 bg-gray-50 border-gray-200">
                    <option value="SelectCategory">--Select Vacancy--</option>
                    <option value="Management">Management</option>
                    <option value="Finance">Finance</option>
                    <option value="Html Department">Html Department</option>
                    <option value="SEO">SEO</option>
                    <option value="Banking">Banking</option>
                    <option value="Designing">Designing</option>
                    <option value="Agriculture">Agriculture</option>
                  </select>
                </div>

                <div class="qualification w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                  <input type="text" id="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                    placeholder="Bachelor Degree" required>
                </div>
              </div>

              <div class="jobDetails">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job
                  Details</label>
                <textarea type="text" id="first_name" rows="10"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 scrollbar-hide"
                  placeholder="Put your job details here.." required .></textarea>
              </div>

              <div class="skillsRequired">
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Skills
                  Required</label>
                <textarea type="text" id="first_name" rows="5"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 scrollbar-hide"
                  placeholder="Put skills Required here.." required .></textarea>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div class="modal-action">
        <label for="my-modal-edit" class="btn btn-error">Cancel</label>
        <button type="submit" for="my-modal-edit" class="btn btn-success outline-none focus:border-none">Save</button>
      </div>
    </div>
  </div>

  <!-- Preview Modal  -->
  <input type="checkbox" id="my-modal-view" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box h-full flex flex-col justify-between scrollbar-hide">
      <div>
        <h3 class="font-bold text-lg">Job Preview!</h3>
        <div>
          <div class="flex justify-between space-x-1">
            <form action="form" class="space-y-4 w-full">
              <!-- Logo  -->
              <div class="logoPreview">
                <img src="https://foodshahibd.com/foodshahi_ci/assets/media/restaurants/logo/1552416111_logo.png" alt=""
                  srcset=""
                  class="w-24 h-24 rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30">
              </div>

              <div class="companyName ">
                <label for="first_name"
                  class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Company Name</label>
                <p>FoodShahiBD - Home delivery service in Rajshahi</p>
              </div>

              <div class="date flex my-6  w-full  flex-col items-start">
                <label for="first_name" class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Apply
                  Star to End Date</label>
                <p>Apply Start: 21 Sep, 2023 | Apply End: 21 Oct, 2023</p>
              </div>

              <div class="flex justify-between">
                <div class="category w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Category</label>
                  <p>Manager</p>
                </div>

                <div class="vacancyType w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Vacancy
                    Type</label>
                  <p>Full Time</p>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="offeredSalary w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Offered Salary</label>
                  <p>15,000.00 BDT</p>
                </div>

                <div class="experience w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Experience</label>
                  <p>Minimum 2 years</p>
                </div>
              </div>

              <div class="flex justify-between ">
                <div class="industry w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Industry</label>
                  <p>Mangemant</p>
                </div>

                <div class="qualification w-[48%]">
                  <label for="first_name"
                    class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Qualification</label>
                  <p>BSC in Management</p>
                </div>
              </div>

              <div class="jobDetails">
                <label for="first_name" class="block mb-2 text-sm  text-gray-400 font-semibold dark:text-gray-500">Job
                  Details</label>
                <div>
                  <p>
                    Far much that one rank beheld greenbird after outside ignobly allegedly more when oh arrogantly
                    vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered
                    inset one echidna
                    cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on
                    instantaneously eel
                    valiantly petted this along across highhandedly much dog out the much alas evasively neutral lazy
                    reset.

                    Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes
                    that as or eel
                    underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set
                    waywardly far the
                    and pangolin horse approving paid chuckled cassowary oh above a much opposite far much hypnotically
                    more therefore wasp
                    less that hey apart well like while superbly orca and far hence one.Far much that one rank beheld
                    greenbird after outside
                    ignobly allegedly more when oh arrogantly vehement irresistibly fussy penguin insect additionally
                    wow absolutely crud
                    meretriciously hastily dalmatian a glowered inset one echidna cassowary some parrot and much as
                    goodness some froze the
                    sullen much connected bat wonderfully on instantaneously eel valiantly petted this along across
                    highhandedly much dog
                    out the much alas evasively neutral lazy reset.

                    Repeatedly dreamed alas opossum but dramatically despite expeditiously that jeepers loosely yikes
                    that as or eel
                    underneath kept and slept compactly far purred sure abidingly up above fitting to strident wiped set
                    waywardly far the
                    and.
                  </p>
                </div>
              </div>
              <div class="jobDetails">
                <label for="first_name" class="block mb-2 text-sm text-gray-400 font-semibold dark:text-gray-500">Skills
                  Required</label>
                <div>
                  <p>
                    Far much that one rank beheld greenbird after outside ignobly allegedly more when oh arrogantly
                    vehement irresistibly
                    fussy penguin insect additionally wow absolutely crud meretriciously hastily dalmatian a glowered
                    inset one echidna
                    cassowary some parrot and much as goodness some froze the sullen much connected bat wonderfully on
                    instantaneously. Far
                    much that one rank beheld greenbird after outside ignobly allegedly more when oh arrogantly vehement
                    irresistibly fussy
                    penguin insect additionally.

                    Strong Market connections for business development of the bank.
                    Strong knowledge of Corporate products and regulatory requirements.
                    Proficiency in spoken and written English.
                    Analytical skills
                    Knowledge of Corporate Banking, Risk Management, Compliance and Central Bank regulations.
                  </p>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
      <div class="modal-action">
        <label for="my-modal-view" class="btn btn-success">Okay</label>
      </div>
    </div>
  </div>
`;