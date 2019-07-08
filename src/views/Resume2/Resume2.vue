<template>
  <div class="Resume resume2">
    <div
      class="header-intro header-intro-resume theme-bg-primary text-white py-5 mb-5"
    >
      <div class="container position-relative">
        <h2 class="page-heading mb-3">Resume2</h2>
        <a
          class="btn theme-btn-on-bg download-resume position-absolute font-weight-bold mx-auto"
          href="https://themes.3rdwavemedia.com/resources/sketch-template/pillar-sketch-sketch-resume-template-for-developers/Resume2.vue"
          target="_blank"
        >
          <v-icon
            class="svg-inline--fa fa-download fa-w-16 mr-2"
            name="download"
          ></v-icon>
          Download PDF Version</a
        >
      </div>
      <!--//container-->
    </div>

    <article class="resume-wrapper text-center position-relative">
      <div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
        <div class="resume-header pt-4 pt-md-0">
          <div class="media flex-column flex-md-row">
            <img
              class="mr-3 img-fluid picture mx-auto"
              src="https://themes.3rdwavemedia.com/instance/bs4/assets/images/profile.jpg"
              alt=""
            />
            <div
              class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0"
            >
              <div class="primary-info">
                <h1 class="name mt-0 mb-1 text-white text-uppercase">
                  {{this.person.name.first + " " + this.person.name.last}}
                </h1>
                <div class="title mb-3">{{ rolefunction }}</div>
                <ul class="list-unstyled">
                  <li class="mb-2">
                    <a href="#">
                      <v-icon
                        name="regular/envelope"
                        style="transform-origin: 0.5em 0.5em;"
                        class="svg-inline--fa fa-envelope fa-w-16 fa-fw mr-2"
                        scale="1.375"
                      >
                      </v-icon>
                      Steve.Doe@website.com</a
                    >
                  </li>

                  <li>
                    <a href="#">
                      <v-icon
                        name="mobile-alt"
                        style="transform-origin: 0.3125em 0.5em;"
                        class="svg-inline--fa fa-mobile-alt fa-w-10 fa-fw mr-2"
                        scale="1.375"
                      >
                      </v-icon>
                      0123 456 78900</a
                    >
                  </li>
                </ul>
              </div>
              <!-- primary info-->

              <div class="secondary-info ml-md-auto mt-2">
                <ul class="resume-social list-unstyled">
                  <li class="mb-3" v-for="item in sociallinks" :key="item.link">
                    <a :href="item.link">
                      <span class="fa-container text-center mr-2">
                        <v-icon
                          :name="item.iconname"
                          :class="item.class"
                        ></v-icon> </span
                      >{{ item.link }}
                    </a>
                  </li>
                </ul>
              </div>
              <!-- secondary-info-->
            </div>
            <!-- media body-->
          </div>
          <!-- media-->
        </div>
        <!--//resume-header-->

        <div class="resume-body p-5">
          <section class="resume-section summary-section mb-5">
            <h2
              class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3"
            >
              Career Summary
            </h2>
            <div class="resume-section-content">
<!--              <p class="mb-0" v-html="summary"></p>-->
              <p class="mb-0" v-html="person.summary"></p>
            </div>
          </section>

          <div class="row">
            <div class="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
              <section class="work-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Work Experiences
                </h2>

                <div
                  class="item mb-3"
                  v-for="item in workexperiences"
                  :key="item.title"
                >
                  <div class="item-heading row align-items-center mb-2">
                    <h3
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      {{ item.title }}
                    </h3>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right"
                    >
                      {{ item.client }} | {{ item.startyear }} -
                      {{ item.endyear }}
                    </div>
                  </div>
                  <!-- item-heading -->
                  <div class="item-content">
                    <p v-html="item.description"></p>
                    <h4
                      class="resume-timeline-item-desc-heading font-weight-bold"
                    >
                      Achievements:
                    </h4>

                    <ul class="resume-list">
                      <li v-for="achie in item.achievements" :key="achie">
                        {{ achie }}
                      </li>
                    </ul>
                    <h4
                      class="resume-timeline-item-desc-heading font-weight-bold"
                    >
                      Technologies used:
                    </h4>
                    <ul class="list-inline">
                      <li
                        class="list-inline-item"
                        v-for="tech in item.technologiesused"
                        :key="tech"
                      >
                        <span class="badge badge-secondary badge-pill">{{
                          tech
                        }}</span>
                      </li>
                    </ul>
                  </div>
                  <!-- item-content -->
                </div>
                <!--//item-->
              </section>
              <!--//work-section-->

              <section class="project-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Projects
                </h2>

                <div
                  class="item mb-3"
                  v-for="item in projects"
                  :key="item.title"
                >
                  <div class="item-heading row align-items-center mb-2">
                    <h4
                      class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
                    >
                      {{ item.title }}
                    </h4>
                    <div
                      class="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right"
                    >
                      {{ item.type }}
                    </div>
                  </div>
                  <div class="item-content" v-html="item.description"></div>
                </div>
                <!--//item-->
              </section>
              <!--//project-section-->
            </div>
            <!--//resume-main-->
            <aside
              class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4"
            >
              <section class="skills-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Skills
                </h2>

                <div class="item">
                  <h4 class="item-title">Frontend</h4>

                  <ul class="list-unstyled resume-skills-list">
                    <li
                      class="mb-2"
                      v-for="item in frontendskills"
                      :key="item.title"
                    >
                      <div class="resume-skill-name">{{ item.title }}</div>
                      <b-progress
                        class="progress resume-progress"
                        :value="item.percent"
                        :min="0"
                        :max="100"
                      ></b-progress>
                    </li>
                  </ul>
                </div>
                <!--//item-->
                <div class="item">
                  <h4 class="item-title">Backend</h4>

                  <ul class="list-unstyled resume-skills-list">
                    <li
                      class="mb-2"
                      v-for="item in backendskills"
                      :key="item.title"
                    >
                      <div class="resume-skill-name">{{ item.title }}</div>
                      <b-progress
                        class="progress resume-progress"
                        :value="item.percent"
                        :min="0"
                        :max="100"
                      ></b-progress>
                    </li>
                  </ul>
                </div>
                <!--//item-->
                <div class="item">
                  <h4 class="item-title">Professional</h4>
                  <ul class="list-unstyled resume-skills-list">
                    <li
                      class="mb-2"
                      v-for="item in professionalskills"
                      :key="item"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <!--//item-->

                <div class="item">
                  <h4 class="item-title">Others</h4>
                  <ul class="list-inline">
                    <li
                      class="list-inline-item"
                      v-for="item in otherskills"
                      :key="item.title"
                    >
                      <span
                        class="badge badge-light"
                        style="padding: 0.35em 0.7em 0.4em;"
                        :style="{ fontSize: item.percent + '%' }"
                      >
                        {{ item.title }}</span
                      >
                    </li>
                  </ul>
                </div>
                <!--//item-->
              </section>
              <!--//skills-section-->
              <section class="education-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Education
                </h2>

                <ul class="list-unstyled resume-education-list">
                  <li class="mb-3" v-for="item in education" :key="item.title">
                    <div class="resume-degree font-weight-bold">
                      {{ item.title }}
                    </div>
                    <div class="resume-degree-org text-muted">
                      {{ item.school }}
                    </div>
                    <div class="resume-degree-time text-muted">
                      {{ item.startyear }} -
                      {{ item.endyear }}
                    </div>
                  </li>
                </ul>
              </section>
              <!--//education-section-->
              <section class="education-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Awards
                </h2>

                <ul class="list-unstyled resume-awards-list">
                  <li class="mb-3" v-for="item in awards" :key="item.title">
                    <div class="font-weight-bold">{{ item.title }}</div>
                    <div class="text-muted">
                      {{ item.description }} ({{ item.year }})
                    </div>
                  </li>
                </ul>
              </section>
              <!--//education-section-->
              <section class="skills-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Languages
                </h2>

                <ul class="list-unstyled resume-lang-list">
                  <li class="mb-2" v-for="item in languages" :key="item.title">
                    {{ item.title }}
                    <span class="text-muted">({{ item.level }})</span>
                  </li>
                </ul>
              </section>
              <!--//certificates-section-->
              <section class="skills-section py-3">
                <h2
                  class="text-uppercase resume-section-title font-weight-bold pb-3 mb-3"
                >
                  Interests
                </h2>
                <ul class="list-unstyled resume-interests-list mb-0">
                  <li class="mb-2" v-for="item in interests" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </section>
              <!--//certificates-section-->
            </aside>
            <!--//resume-aside-->
          </div>
          <!--//row-->
        </div>
        <!--//resume-body-->
      </div>
      <!-- resume-wrapper-inner-->
    </article>
  </div>
</template>

<script>
  import yaml from 'js-yaml';
  import {
    PERSON
  } from './resume.yml';
import "./_Resume2.scss";

export default {
  props: {},
  data() {
    return {
      person: yaml.load(PERSON),
      title: "Resume2",
      fullname: "Steve Doe",
      rolefunction: "Full Stack Developer FFi",
      sociallinks: [
        {
          link: "https://www.linkedin.com/in/filipve/",
          iconname: "brands/linkedin-in",
          class: "svg-inline--fa fa-linkedin-in fa-w-14 fa-fw"
        },
        {
          link: "https://github.com/filipve1994",
          iconname: "brands/github-alt",
          class: "svg-inline--fa fa-github-alt fa-w-15 fa-fw"
        },
        {
          link: "https://codepen.io/filipve",
          iconname: "brands/codepen",
          class: "svg-inline--fa fa-codepen fa-w-16 fa-fw"
        },
        {
          link: "https://filipveportfolio.surge.sh/",
          iconname: "globe",
          class: "svg-inline--fa fa-globe fa-w-16"
        }
      ],

      summary:
        "Summarise your career here. " +
        '<a class="text-reset" href="#" target="_blank">You can make a PDF version of your resume using our free Sketch template here</a>. ' +
        "Aenean commodo ligula eget dolor aenean massa. " +
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu." +
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",

      workexperiences: [
        {
          title: "Senior Software Engineer filip",
          client: "Google",
          startyear: 2019,
          endyear: "Present",
          link: "#",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n" +
            "                      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
            "                      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum\n" +
            "                      dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\n" +
            "                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
          achievements: [
            "Lorem ipsum dolor sit amet, consectetuer.",
            "Aenean commodo ligula eget dolor.",
            "Etiam ultricies nisi vel augue."
          ],
          technologiesused: [
            "Angular",
            "Python",
            "jQuery",
            "Webpack",
            "PostgresSQL",
            "HTML/SASS"
          ]
        },
        {
          title: "Lead Software Developer",
          client: "Apple",
          startyear: 2016,
          endyear: 2019,
          link: "#",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n" +
            "                      dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
            "                      Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum\n" +
            "                      dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\n" +
            "                      natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
          achievements: [
            "Lorem ipsum dolor sit amet, consectetuer.",
            "Aenean commodo ligula eget dolor."
          ],
          technologiesused: [
            "Angular",
            "Python",
            "jQuery",
            "Webpack",
            "PostgresSQL",
            "HTML/SASS"
          ]
        },
        {
          title: " Frontend Developer",
          client: "Startup",
          startyear: 2013,
          endyear: 2014,
          link: "#",
          description:
            "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget\n" +
            " dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n" +
            " Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum\n" +
            " dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis\n" +
            " natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
          achievements: [
            "Lorem ipsum dolor sit amet, consectetuer.",
            "Aenean commodo ligula eget dolor."
          ],
          technologiesused: [
            "Angular",
            "Python",
            "jQuery",
            "Webpack",
            "PostgresSQL",
            "HTML/SASS"
          ]
        }
      ],

      projects: [
        {
          title: "Project Lorem Ipsum Filip",
          type: "Open Source",
          link: "#",
          description:
            "You can use this section for your side projects. You can\n" +
            '                    <a href="#" class="theme-link"\n' +
            "                      >provide a project link here</a\n" +
            "                    >\n" +
            "                    as well. Lorem ipsum dolor sit amet, consectetuer adipiscing\n" +
            "                    elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\n" +
            "                    sociis natoque penatibus et magnis dis parturient montes,\n" +
            "                    nascetur ridiculus mus."
        },
        {
          title: "Project Sed Fringilla",
          type: "Open Source",
          link: "#",
          description:
            "You can use this section for your side projects. You can\n" +
            '                    <a href="#" class="theme-link"\n' +
            "                      >provide a project link here</a\n" +
            "                    >\n" +
            "                    as well. Lorem ipsum dolor sit amet, consectetuer adipiscing\n" +
            "                    elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\n" +
            "                    sociis natoque penatibus et magnis dis parturient montes,\n" +
            "                    nascetur ridiculus mus."
        },
        {
          title: "Project Praesent",
          type: "Open Source",
          link: "#",
          description:
            "You can use this section for your side projects. You can\n" +
            '                    <a href="#" class="theme-link"\n' +
            "                      >provide a project link here filip</a\n" +
            "                    >\n" +
            "                    as well. Lorem ipsum dolor sit amet, consectetuer adipiscing\n" +
            "                    elit. Aenean commodo ligula eget dolor. Aenean massa. Cum\n" +
            "                    sociis natoque penatibus et magnis dis parturient montes,\n" +
            "                    nascetur ridiculus mus."
        }
      ],
      frontendskills: [
        {
          title: "Angular",
          percent: 98
        },
        {
          title: "React",
          percent: 70
        },
        {
          title: "Javascript",
          percent: 50
        },
        {
          title: "Node.js",
          percent: 30
        },
        {
          title: "HTML/CSS/SASS/LESS",
          percent: 10
        }
      ],

      backendskills: [
        {
          title: "Python",
          percent: 98
        },
        {
          title: "Ruby",
          percent: 70
        },
        {
          title: "PHP",
          percent: 50
        },
        {
          title: "Wordpress",
          percent: 30
        },
        {
          title: "Jekyll",
          percent: 10
        }
      ],

      professionalskills: [
        "Effective communication",
        "Team player",
        "Strong problem solver",
        "Good time management"
      ],
      otherskills: [
        {
          title: "DevOps",
          percent: 85
        },
        {
          title: "Code Review",
          percent: 85
        },
        {
          title: "Git",
          percent: 85
        },
        {
          title: "Unit Testing",
          percent: 85
        }
      ],
      education: [
        {
          title: "MSc in Computer Science",
          school: "University College London",
          startyear: 2012,
          endyear: 2017
        },
        {
          title: "BSc Maths and Physics",
          school: "Imperial College London",
          startyear: 2007,
          endyear: 2010
        }
      ],
      awards: [
        {
          title: "Award Lorem Ipsum",
          description: "Microsoft lorem ipsum",
          year: 2019
        },
        {
          title: "Award Donec Sodales",
          description: "Oracle Aenean ",
          year: 2017
        }
      ],

      languages: [
        {
          title: "English",
          level: "Native"
        },
        {
          title: "Dutch",
          level: "Professsional"
        }
      ],
      interests: ["Climbing", "Snowboarding", "Photography", "Travelling"]
    };
  }
};
</script>
