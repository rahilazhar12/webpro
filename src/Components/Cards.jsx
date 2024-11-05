import React from "react";
import qb from "../assets/icons/quickbooks.webp";
import excel from "../assets/icons/excel.webp";
import pbi from "../assets/icons/powerbi.webp";
import zero from "../assets/icons/zero.webp";
import sap from "../assets/icons/sap.webp";
import dm from "../assets/icons/socialmedia.webp";
import seo from "../assets/icons/seo.webp";
import shopify from "../assets/icons/shopify.webp";
import react from "../assets/icons/webdevp.webp";
import us from "../assets/icons/ustax.webp";
import uk from "../assets/icons/tax.webp";

const Cards = () => {
  const cardData = [
    {
      title: "US Taxation & LLC Formation",
      description:
        "Expert guidance in US taxation, LLC setup, compliance, and maximizing tax benefits for entrepreneurs.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: us,
    },

    {
      title: "UK Taxation & LTD Formation",
      description:
        "Specialized UK tax guidance, LTD formation, compliance, and tax-saving strategies for businesses.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: uk,
    },
    {
      title: "UAE Taxation & Company Formation",
      description:
        "UAE tax expertise, streamlined company formation, compliance, and profit-maximizing solutions for businesses.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
    },
    {
      title: "QuickBooks Bookkeeping",
      description:
        "Efficient QuickBooks bookkeeping, accurate tracking, financial insights, and streamlined reports for growth.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",

      icon: qb,
    },
    {
      title: "SAP Business One",
      description:
        "Comprehensive SAP Business One solutions, enhancing efficiency, data management, and business intelligence.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: sap,
    },
    {
      title: "Power BI",
      description:
        "Power BI analytics, transforming data into actionable insights for informed business decisions.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: pbi,
    },
    {
      title: "Advance Excel",
      description:
        "Advanced Excel skills, mastering formulas, data analysis, and automation for business efficiency.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: excel,
    },
    {
      title: "Xero Accounting",
      description:
        "Xero Accounting solutions, streamlining finances with real-time insights and easy collaboration.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: zero,
    },

    {
      title: "Digital Marketing with AI",
      description:
        "AI-powered digital marketing solutions, enhancing targeting, personalization, and campaign performance",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: dm,
    },
    {
      title: "Search Engine Optimization",
      description:
        "Search engine optimization strategies, boosting visibility, traffic, and organic growth for businesses.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: seo,
    },
    {
      title: "Shopify & Local eCommerce",
      description:
        "Shopify and local eCommerce solutions, empowering online sales with customized storefronts and management.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: shopify,
    },
    {
      title: "Full Stack Mern Development",
      description:
        "Full Stack MERN React development, creating dynamic web applications with seamless user experiences.",
      imgSrc:
        "//cdn2.hubspot.net/hubfs/53/assets/hubspot.com/academy/icons/Bulb.svg",
      link: "https://academy.hubspot.com/courses/email-marketing-software?library=true&",
      ctaLink:
        "https://app.hubspot.com/signup-hubspot/academy?hubs_signup-url=academy.hubspot.com/&lang=en&&intent=academyTrack&track=2274048",
      icon: react,
    },
  ];

  return (
    <>
      <div className="sc-gPEVay ejqFgl  md:mt-32 md:px-10 xl:px-32 mb-20  ">
        <div className="sc-iRbamj chKZTL">
          {/* <ul className="sc-cMljjf fGnogu">
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/marketing"
              >
                Marketing
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/sales"
              >
                Sales
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/service"
              >
                Service
              </a>
            </li>
            <li className="sc-jAaTju ihchcE">
              <a
                className="academy-home-popular-courses-topic-link"
                href="https://academy.hubspot.com/courses/tutorials"
              >
                Tutorials
              </a>
            </li>
          </ul> */}
          <ol className="sc-brqgnp grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cardData.map((card, index) => (
              <li
                key={index}
                className="sc-bZQynM sc-jWBwVP aWZOv false academy-home-popular-courses-card"
                data-testid="card"
              >
                <div className="sc-htpNat sc-EHOje kaJDqL" />
                <div className="sc-htpNat sc-ifAKCX cQJfZM" />
                <div className="sc-htpNat sc-bxivhb ghjSUJ" />
                <div
                  data-testid="card-content"
                  className="sc-kpOJdX eyREDJ academy-card"
                  color="#7c98b6"
                >
                  <img
                    data-src={card.imgSrc}
                    alt=""
                    className="sc-eNQAEJ cixcWR hsg-deferred entered hsg-deferred-loaded"
                    data-ll-status="loaded"
                    src={card.imgSrc}
                  />
                  <div className="sc-kGXeez kEMtLg">
                    <div className="sc-eHgmQL gTTOiB" />
                    <h3 className="sc-ckVGcZ hAcjWA">{card.title}</h3>
                    <span>
                      <img src={card.icon} alt="" className="w-20" />
                    </span>
                    <div className="sc-htoDjs sc-jKJlTe etrvzF" />
                  </div>
                  <div className="sc-dnqmqq sc-dxgOiQ hTNYGY">
                    <div>
                      <div
                        aria-hidden="true"
                        className="sc-cSHVUG lnNZoB"
                      ></div>
                      <div className="sc-hSdWYo gVtggX">
                        {card.certification}
                      </div>
                      <div className="sc-hMqMXs Jdrki">
                        <span className="sc-kEYyzF etYVtk">
                          {card.description}
                        </span>
                        {/* <span className="sc-kkGfuU kwuNfN">
                          <a href={card.link} rel="noopener noreferrer">
                            Read more
                          </a>
                        </span> */}
                      </div>
                    </div>
                    <a
                      data-testid="start-cta"
                      aria-label={`Start certification: ${card.title}`}
                      className="bg-[#0568A3] p-2 text-white hover:text-white text-center"
                      // href={card.ctaLink}
                      rel="noopener noreferrer"
                    >
                      Start certification
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Cards;
