import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tsx.su",
  output: "static",
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },

  redirects: {
    // Old Jekyll URLs -> new clean URLs
    "/2010/02/19/meaning-of-life.html": "/meaning-of-life/",
    "/2011/01/19/how-i-made-my-first-career-mistake.html":
      "/how-i-made-my-first-career-mistake/",
    "/2011/01/23/subjective-on-programming-language.html":
      "/subjective-on-programming-language/",
    "/2011/01/30/unit-testing-tdd-first-time.html":
      "/unit-testing-tdd-first-time/",
    "/2011/02/01/light-bulb-got-fixed.html": "/light-bulb-got-fixed/",
    "/2011/02/04/i-want-a-camera.html": "/i-want-a-camera/",
    "/2011/02/23/back-to-basics-relational-databases.html":
      "/back-to-basics-relational-databases/",
    "/2011/03/06/how-to-choose-good-software-and-libraries.html":
      "/how-to-choose-good-software-and-libraries/",
    "/2011/03/11/memories.html": "/memories/",
    "/2011/03/14/wishmaster.html": "/wishmaster/",
    "/2011/03/26/singleton.html": "/singleton/",
    "/2011/05/14/playing-with-time.html": "/playing-with-time/",
    "/2011/06/30/rubber-links.html": "/rubber-links/",
    "/2011/08/07/dont-trust-anyone.html": "/dont-trust-anyone/",
    "/2011/09/14/new-look-at-java-and-ide.html": "/new-look-at-java-and-ide/",
    "/2015/06/22/how-to-start-with-tdd.html": "/how-to-start-with-tdd/",
    "/2017/02/07/accidental-recruiter.html": "/accidental-recruiter/",
    "/2017/02/21/resume-common-sections.html": "/resume-common-sections/",
    "/2017/02/26/resume-experience-section.html": "/resume-experience-section/",
    "/2013/02/18/how-to-start-with-tdd.html": "/how-to-start-with-tdd-ru/",
    // RSS feed redirect
    "/feed.xml": "/rss.xml",
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
