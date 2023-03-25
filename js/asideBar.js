let asideBar = document.getElementById("asdideBar");

asideBar.innerHTML = `
<aside
            class=" hidden lg:flex lg:flex-col top-0 left-0 m-4 p-2 mt-24 md:mt-28 lg:m-8   min-h-screen w-80    shadow-md p-4 backdrop-blur-xl rounded-lg bg-[#ffffff4a] dark:bg-[#00000047] duration-200"
            id="asideSection">
            <div>
                <!-- <p>All Job <span class="text-green-400">Rajshahi</span></p> -->
        
            </div>
            <div class="space-y-2 mt-8 flex w-full flex-col">
                <a class="asideMenu w-full hover:hover dasdhbord" id="dasdhbord" href="index.html">Dasdhbord</a>
                <a class="asideMenu w-full hover:hover jobPost" id="jobPost" href="jobPost.html">Job Post</a>
                <a class="asideMenu w-full hover:hover other" id="other" href="#">Other</a>
            </div>
        </aside>
`;