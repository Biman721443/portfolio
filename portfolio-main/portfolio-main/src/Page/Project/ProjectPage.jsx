import { Link } from "react-router-dom";
import image from "./image.png"
const ProjectPage = () => {
    return (
        <div className=" p-2 pb-0 lg:p-7 lg:pb-0 bg-whiteColor rounded-t-xl dark:bg-darkbg">
            <h2
                className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
                Projects</h2>
            <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                <li className="text-[#FA5252] mr-4 md:mx-4">All</li>
                <li className="fillter-btn ml-0 mr-4 md:mx-4">Frontend</li>
                <li className="fillter-btn ">Full Stack</li>
            </ul>
            <div >
                <div className="items grid grid-cols-1 md:grid-cols-2  gap-5 pb-5 ">

                    <div
                        className="item bg-lightbg dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col flex-1">
                        <div className="image">
                            <img src={'https://public-assets.toggl.com/b/static/feature-time-reports-a38aa586208e47af34055da7f5b92923.png'} alt="Dream Finder" className="rounded-md h-44 w-[100%]" />
                        </div>
                        <div className="text">
                            <p
                                className="py-5 text-[25px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                Toggl Track
                            </p>
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                            Toggl Track tracks time blocks, optionally labeled with a task, a project, and tags. Time can be tracked through a start/stop button, manual entry, or dragging and resizing time blocks in a calendar view. With the browser extension, Toggl Track has time tracking integrations with over 100 websites.
                            </p>
                            <div className="w-full flex gap-5 justify-center items-center">
                                <button className="w-full">
                                    <Link
                                        to={'https://toggl-track-clone.vercel.app/'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        Live Link
                                    </Link>
                                </button>
                                <button className="w-full">
                                    <Link
                                        to={'https://github.com/Biman721443/wrong-drain-3904'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        GitHub
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className="item bg-lightbg dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col flex-1">
                        <div className="image">
                            <img src={image} alt="Haven management" className="rounded-md h-44 w-[100%]" />
                        </div>
                        <div className="text">
                            <p
                                className="py-5 text-[25px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                               Loan App
                            </p>
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                               The Loan Application Project is a full-stack web application designed to provide a seamless experience for users and administrators to manage loans. The application offers functionalities like signing up, logging in, calculating loans, filling out loan forms, and viewing loan details through a user-friendly dashboard. Admins can manage loans via a dedicated admin page.
                            </p>
                            <div className="w-full flex gap-5 justify-center items-center">
                                <button className="w-full">
                                    <Link
                                        to={'https://fanciful-brioche-eb8947.netlify.app/'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        Live Link
                                    </Link>
                                </button>
                                <button className="w-full">
                                    <Link
                                        to={'https://github.com/Sagar-Kumar3099/creative_coders17'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        GitHub
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>


             

                </div>
            </div>
        </div>
    );
};

export default ProjectPage;