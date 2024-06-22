import React from 'react'
import logo from "../assets/images/morat-logo.png"
export default function Footer() {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: "javascript:void()",
          name: "contact",
        },
        {
          href: "javascript:void()",
          name: "Support",
        },
        {
          href: "javascript:void()",
          name: "Documentation",
        },
        {
          href: "javascript:void()",
          name: "Pricing",
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: "javascript:void()",
          name: "Terms",
        },
        {
          href: "javascript:void()",
          name: "License",
        },
        {
          href: "javascript:void()",
          name: "Privacy",
        },
        {
          href: "javascript:void()",
          name: "About US",
        },
      ],
    },
    {
      label: "Explore",
      items: [
        {
          href: "javascript:void()",
          name: "Showcase",
        },
        {
          href: "javascript:void()",
          name: "Roadmap",
        },
        {
          href: "javascript:void()",
          name: "Languages",
        },
        {
          href: "javascript:void()",
          name: "Blog",
        },
      ],
    },
    {
      label: "Company",
      items: [
        {
          href: "javascript:void()",
          name: "Partners",
        },
        {
          href: "javascript:void()",
          name: "Team",
        },
        {
          href: "javascript:void()",
          name: "Careers",
        },
      ],
    },
  ];

  return (
    <footer className="pt-10 bg-[#b0b0ae5a]">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between flex-col items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-black text-2xl font-bold">
            JOIN OUR NEWS LETTER
            </h3>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center md:justify-end"
            >
              <div className="relative">
                
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2.5 text-gray-500 bg-white outline-none border focus:border-[#a0612ed7] shadow-sm rounded"
                />
              </div>
              <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-[#a0612ed7] hover:bg-[#936138e2] active:bg-[#a0612ed7] active:shadow-none rounded shadow">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          {footerNavs.map((item, idx) => (
            <ul className="space-y-4 text-gray-800" key={idx}>
              <h4 className="text-gray-700 font-semibold sm:pb-2">
                {item.label}
              </h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="duration-150 hover:text-gray-500"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 py-1 border-t border-gray-700 items-center justify-between sm:flex">
          <p className="text-gray-800">
            All rights reserved © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
