import React from "react";
import styles from "./HomePage.css";
import Header from "./header/Header";
import Image from "next/image";
import DashboardImage from "../asset/heroImage.svg";
import { FaArrowRight } from "react-icons/fa";
import { Inter } from "next/font/google";
import Download from "../asset/download.svg";
import Add from "../asset/sm-view-grid-add.svg";
import Boalt from "../asset/lightning-bolt.svg";

const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    id: 0,
    title: "Lower Cost of Ownership",
    description:
      "No Avaya AES TSAPI license costs with CMS-Based Reporting and real-time feed.",
    image: Download,
  },
  {
    id: 1,
    title: "Higher Agent Occupancy",
    description:
      "Real-time and historical agent scorecards to improve agent occupancy.",
    image: Add,
  },
  {
    id: 2,
    title: "First Contact Resolution",
    description:
      "MImInize rebeat callers. handle more customers, convert more business.",
    image: Boalt,
  },
];

const HomePage = () => {
  return (
    <>
      <div className="main_head">
        <Header />

        <div className="main_wrap">
          <div className="main_call_reporting">
            <div className={`${inter.className} main_call_title`}>
              Avaya Call Reporting Reinvented
            </div>
            <div className={`${inter.className} main_step_call`}>
              Step into the future of call center analytics with Comstice Avaya
              Call Reporting solution. Say goodbye to the need for an Avaya AES
              server and extra licenses for every agent, and say hello to a
              world of insightful analytics, cradle-to-grave reports, and
              automated agent and team reports by email.
            </div>
            <div className="main_request">
              <button>
                Request Demo <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="main_hero_logo">
            <Image src={DashboardImage} alt="Main_Com_Image" />
          </div>
          <div className={`${inter.className} main_step_call_m`}>
            Step into the future of call center analytics with Comstice Avaya
            Call Reporting solution. Say goodbye to the need for an Avaya AES
            server and extra licenses for every agent, and say hello to a world
            of insightful analytics, cradle-to-grave reports, and automated
            agent and team reports by email.
          </div>
          <div className="main_request_m">
            <button>
              Request Demo <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="main_ownership">
        {data &&
          data.map((item, i) => (
            <div key={i + 1} className="main_ownership_card">
              <div className="main_ownership_logo">
                <Image src={item?.image} alt={"Data_Image"} />
              </div>
              <div className="main_ownership_textwrap">
                <div className="main_ownership_title">{item?.title}</div>
                <div className="main_ownership_desc">{item?.description}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
