<template>
    <div>
        <div class="row no-gutters">
            <div class="col-xs-12 col-md-7 col-lg-7 col-xl-8 bg-gray-lighter order-md-12">
                <div class="content">
                    <div class="block-content">

                        <!--PROFILE-->
                        <h3 class="block-title font-w700">PROFILE</h3>
                        <hr class="mt-1">

                        <p>
                            I have 20 years of web development experience and I have an additional 10 years of sysops, server support and networking experience prior to my specialization in online development.
                        </p>
                        <p>
                            With extensive experience in the industry, I pride myself on always delivering solutions that are right-sized for the client. By avoiding fads and selecting stable and proven frameworks / tools with large mature communities that provide rich support, I can stand on the shoulders of giants and maximise my client’s ROI. This enables continuity by ensuring a large pool of developers with the preferred skills to draw upon, limiting the usual onboarding debt and reducing
                            costs.
                        </p>
                        <p>
                            I am a huge fan of Agile development process and it's synergies with Lean Startup principles. Short focused sprints allow projects to pivot when necessary and avoid costly over engineering typical of the Waterfall approach.
                        </p>
                        <p>
                            My preferred stack is Laravel/Vue with a preference for greenfield and product/SaaS based projects.
                        </p>
                        <div class="row" data-aos="fade-up" data-aos-delay="50">
                            <template v-for="strength in strengths">
                                <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4 col-xl-2 text-center pt-3">
                                    <div class="js-pie-chart pie-chart js-pie-chart-enabled" :data-percent="strength.value" data-line-width="8" data-size="110" data-bar-color="#ef8a46" data-track-color="#e9e9e9" data-scale-color="#d9d9d9">
                                <span>
                                    <small v-text="strength.title" style="font-size:0.8em"></small>
                                    <div class="text-gray" v-text="strength.value+'%'" style="margin-top: -3px; font-size: 0.75em"></div>
                                </span>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!--WORK HISTORY-->
                        <h3 class="block-title font-w700 mt-5">EXPERIENCE</h3>
                        <hr class="mt-1">
                        <ul class="timeline">
                            <template v-for="position in positions">
                                <li class="timeline-event" data-aos="fade-left" data-aos-delay="50">
                                    <div class="timeline-event-icon bg-gd-sun-op">
                                        <i class="fas fa-calendar-alt"></i>
                                    </div>
                                    <div class="timeline-event-block block block-rounded ">
                                        <div class="block-header block-header-default" style="overflow: hidden">
                                            <div class="block-options">
                                                <div class="timeline-event-time block-options-item font-w400">
                                                    <small class="font-w700 text-warning-light" style="margin-left: -7px" v-html="dateRange(position,true)"></small>
                                                </div>
                                                <div class="font-w700" v-text="position.title"></div>
                                                <div class="font-size-sm text-black-50 font-w400 " v-text="position.company"></div>
                                            </div>
                                        </div>
                                        <div class="block-content p-3">
                                            <div class="media ">
                                                <img class="img-thumb img-thumbnail mr-2 d-none d-sm-none d-md-none d-lg-block" width="96px" :src="'/img/'+position.thumb" alt="">
                                                <div class="media-body">
                                                    <div v-html="position.description"></div>
                                                    <div class="text-black-50 text-right mt-3">
                                                        <small><i class="fas fa-calendar-alt"></i> {{ dateRange(position) }}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </template>
                        </ul>

                        <!--EDUCATION-->
                        <h3 class="block-title font-w700 mt-5">EDUCATION</h3>
                        <hr class="mt-1">
                        <ul class="timeline">
                            <template v-for="course in courses">
                                <li class="timeline-event" data-aos="fade-left" data-aos-delay="50">
                                    <div class="timeline-event-icon bg-gd-sun-op">
                                        <i class="fas fa-graduation-cap"></i>
                                    </div>
                                    <div class="timeline-event-block block block-rounded">
                                        <div class="block-header block-header-default" style="overflow: hidden">
                                            <div class="block-options">
                                                <div class="timeline-event-time block-options-item font-w400 mb-2">
                                                    <small class="font-w700 text-warning-light" style="margin-left: -7px" v-html="dateRange(course,true)"></small>
                                                </div>
                                                <div class="font-w700" v-text="course.qualification"></div>
                                                <div class="text-black-50 font-w400">
                                                    <div v-text="course.institution"></div>
                                                    <small class="font-w300" v-text="course.location"></small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </template>
                        </ul>

                        <!--MORE INFO-->
                        <div class="alert alert-warning d-flex align-items-center justify-content-between mt-6" role="alert" data-aos="fade-up" data-aos-delay="50">
                            <div class="flex-00-auto">
                                <i class="fas fa-2x fa-question-circle"></i>
                            </div>
                            <div class="flex-fill ml-3">
                                <p class="mb-0">Need any more information, please don't hesitate to ask me on
                                    <a class="link-fx text-warning" href="mailto:david.murray@ajarti.com">david.murray@ajarti.com</a> or take a look at my
                                    <a class="link-fx text-warning pointer" @click="goLinkedIn" target="_blank">LinkedIn</a> profile.
                                </p>
                            </div>
                        </div>

                        <div class="text-center my-3">
                            Back to my
                            <router-link to="/" class="link-fx text-warning">covering letter</router-link>
                            .
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-5 col-lg-5 col-xl-4 bg-gray-light block-bordered order-md-1">
                <div class="row content">

                    <!--PERSONAL-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">PERSONAL</h3>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <template v-for="item in details.personal">
                                        <li>
                                            <div class="media py-2">
                                                <div class="mr-3 ml-2 align-self-center overlay-container overlay-left">
                                                    <i style="font-size:1.3em; min-width: 25px" class="fa text-warning-light" :class="item.icon"></i>
                                                </div>
                                                <div class="media-body">
                                                    <small><span class="font-w700" v-text="item.title"></span></small>
                                                    <div class="font-size-sm text-muted"><span v-html="item.value"></span></div>
                                                </div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--TECHNOLOGIES-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title  font-w700">SKILLS / TECHNOLOGIES</h3>
                            </div>
                            <div class="block-content pb-3">

                                <h6 class="font-w700 mb-1 font-size-sm">PHP</h6>
                                <p class="font-size-sm text-muted">
                                    PHP 7, OOP, MVC, primarily Laravel, Design Patterns ,some Zend / Symfony.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">JAVASCRIPT</h6>
                                <p class="font-size-sm text-muted">
                                    Vue, VueX, jQuery and varying exposer to Angular and other JS Frameworks.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">DATABASES</h6>
                                <p class="font-size-sm text-muted">
                                    MySQL, SQL, ORM, Eloquent varying exposer to NoSql, MongoDB, Redis.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">HTML / CSS</h6>
                                <p class="font-size-sm text-muted">
                                    HTML(5), Templating, CSS(3), Bootstrap, Material Design, Semantic UI, limited Sass/Stylus.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">API / INTEGRATIONS</h6>
                                <p class="font-size-sm text-muted">
                                    Ajax, REST, JSON, some GraphQL, E-commerce Integrations.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">ANALYTICS / MARKETING</h6>
                                <p class="font-size-sm text-muted">
                                    SEO, Facebook/Google Ads, SEM, Tagging.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">ANALYTICS / MARKETING</h6>
                                <p class="font-size-sm text-muted">
                                    SEO, Facebook/Google Ads, SEM, Tagging.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">SYSOPS</h6>
                                <p class="font-size-sm text-muted">
                                    Linux, Debian derivatives, Forge, Digital Ocean, limited AWS, Cloud.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">AGILE</h6>
                                <p class="font-size-sm text-muted">
                                    Scrum in simplified form, mainly short sprints with finite deliverables.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">GRAPHIC DESIGN</h6>
                                <p class="font-size-sm text-muted">
                                    Photoshop, some Sketch, Video Editing, CAD & basic 3D Modeling.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">SYSTEMS DESIGN</h6>
                                <p class="font-size-sm text-muted">
                                    Design/Spec systems including guiding clients through the process.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">UI</h6>
                                <p class="font-size-sm text-muted">
                                    I am not a designer, but I have a great eye for good design and an ability to emulate.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">UX</h6>
                                <p class="font-size-sm text-muted">
                                    No formal training, 20 years of successful project design with usability.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">TESTING</h6>
                                <p class="font-size-sm text-muted">
                                    Limited use of TDD due to time constraints/budgets, but familiar with techniques.
                                </p>

                                <h6 class="font-w700 mb-1 font-size-sm">VERSION CONTROL</h6>
                                <p class="font-size-sm text-muted">
                                    Git and variants. Some exposure to Jira / Confluence
                                </p>

                            </div>
                        </div>
                    </div>

                    <!--SKILLS-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">PRIMARY SKILLS WEIGHTS</h3>
                            </div>
                            <div class="block-content">

                                <h6 class="text-uppercase mb-0">
                                    <small>Javascript</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 80%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>PHP</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 90%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>CSS</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 70%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>SQL</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 80%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>NOSQL</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 65%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>HTML</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 100%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6 class="text-uppercase mb-0">
                                    <small>Usability</small>
                                </h6>
                                <div class="progress push" style="height: 10px;">
                                    <div class="progress-bar bg-warning-light" role="progressbar" style="width: 80%;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--INTERESTS-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">INTERESTS</h3>
                            </div>
                            <div class="row block-content pb-2">

                                <div class="col-sm-3 col-xs-12 col-md-12 col-lg-6">
                                    <a class="block block-rounded text-center bg-black-5" href="javascript:void(0)">
                                        <div class="block-content block-content-full bg-image" style="background-image: url('/img/iot.jpg');">
                                            <i class="fas fa-3x fa-microchip text-white-75"></i>
                                        </div>
                                        <div class="block-content block-content-full p-1">
                                            <span class="font-w600 mb-0">IoT</span>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3 col-xs-12 col-md-12 col-lg-6">
                                    <a class="block block-rounded bg-black-5 text-center" href="javascript:void(0)">
                                        <div class="block-content block-content-full bg-image" style="background-image: url('/img/rewild.jpg');">
                                            <i class="fab fa-pagelines fa-3x text-white-75"></i>
                                        </div>
                                        <div class="block-content block-content-full p-1">
                                            <p class="font-w600 mb-0">Rewilding</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3 col-xs-12 col-md-12 col-lg-6">
                                    <a class="block block-rounded bg-black-5 text-center" href="javascript:void(0)">
                                        <div class="block-content block-content-full bg-image" style="background-image: url('/img/space.jpg');">
                                            <i class="fas fa-atom fa-3x text-white-75"></i>
                                        </div>
                                        <div class="block-content block-content-full p-1">
                                            <p class="font-w600 mb-0">Astrophysics</p>
                                        </div>
                                    </a>
                                </div>

                                <div class="col-sm-3 col-xs-12 col-md-12 col-lg-6">
                                    <a class="block block-rounded bg-black-5 text-center" href="javascript:void(0)">
                                        <div class="block-content block-content-full bg-image" style="background-image: url('/img/food.jpg');">
                                            <i class="fas fa-utensils fa-3x text-white-75"></i>
                                        </div>
                                        <div class="block-content block-content-full p-1">
                                            <p class="font-w600 mb-0">Gastronomy</p>
                                        </div>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <!--CONTACT-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">CONTACT</h3>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <template v-for="item in details.contact">
                                        <li>
                                            <div class="media py-2">
                                                <div class="mr-3 ml-2 align-self-center overlay-container overlay-left">
                                                    <i style="font-size:1.3em" class="fa text-warning-light" :class="item.icon"></i>
                                                </div>
                                                <div class="media-body">
                                                    <small><span class="font-w700" v-text="item.title"></span></small>
                                                    <div class="font-size-sm text-muted" v-if="item.title!='Email'"><span v-html="item.value"></span></div>
                                                    <div class="font-size-sm text-muted" v-else>
                                                        <a class="link-fx text-warning" :href="'mailto:'+item.value">{{ item.value }}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </template>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--LINKS-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">LINKS</h3>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <li>
                                        <div class="media py-2">
                                            <div class="mr-3 ml-2 align-self-center overlay-container overlay-left">
                                                <i style="font-size:1.3em" class="fab text-warning-light fa-linkedin"></i>
                                            </div>
                                            <div class="media-body">
                                                <div>
                                                    <small><span class="font-w700">LinkedIn</span></small>
                                                </div>
                                                <a class="link-fx text-warning pointer" @click="goLinkedIn" target="_blank">davidseanmurray</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!--REFERENCES-->
                    <div class="col-sm-12 pb-3" data-aos="fade-right" data-aos-delay="50">
                        <div class="block block-rounded block-themed">
                            <div class="block-header bg-gd-sun-op">
                                <h3 class="block-title font-w700">REFERENCES</h3>
                            </div>
                            <div class="block-content">
                                <ul class="nav-items push">
                                    <li>
                                        <div class="media py-2">
                                            <div class="mr-3 ml-2 align-self-center overlay-container overlay-left">
                                                <i style="font-size:1.3em" class="fas text-warning-light fa-thumbs-up"></i>
                                            </div>
                                            <div class="media-body">
                                                <div class="font-size-sm text-muted">On Request</div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // Please Note, some of the data is retrieved via Ajax and some of it is stored locally as JSON, this is simply to illustrate remote content loading.

    import HelperMixins from '../helper-mixins';

    export default {
        mixins  : [HelperMixins],
        data()
        {
            return {
                courses          : [],
                details          : {
                    personal : [
                        { title : 'Name', value : 'David Murray', icon : 'fa-user' },
                        { title : 'Nationality', value : 'South African', icon : 'fa-flag' },
                        { title : 'Relationship', value : '18 yrs Married (2 kids)', icon : 'fa-gem' },
                        { title : 'Birthday', value : '2 June 1972', icon : 'fa-birthday-cake' },
                        { title : 'Languages', value : 'English, Afrikaans', icon : 'fa-globe' },
                    ],
                    contact  : [
                        { title : 'Email', value : 'david.murray@ajarti.com', icon : 'fa-envelope' },
                        { title : 'Phone', value : '+27 (0)83 759 7724', icon : 'fa-mobile' },
                        { title : 'Skype', value : 'david.murray', icon : 'fab fa-skype' },
                        { title : 'Address', value : '9 Regiment, Bellville<br/>Cape Town, 7530<br/>South Africa', icon : 'fa-map-marked' },
                    ]
                },
                loadingcourses   : false,
                loadingpositions : false,
                positions        : [],
                strengths        : [
                    { title : 'Backend', value : 90 },
                    { title : 'Frontend', value : 85 },
                    { title : 'UX', value : 80 },
                    { title : 'UI', value : 70 },
                    { title : 'Strategy', value : 90 },
                    { title : 'Management', value : 65 },
                ]
            }
        },
        methods :
            {
                dateRange(item, yearsOnly)
                {
                    var endDate   = moment().unix();
                    var item      = item || null;
                    var yearsOnly = yearsOnly || false;
                    var self      = this;
                    var startDate = '';
                    if ( _.isNull(item) ) return '';

                    // From.
                    if ( _.has(item, 'start_date_ts') && self.isTimestamp(item.start_date_ts) ) {
                        startDate = item.start_date_ts;
                    } else {
                        return '';
                    }

                    // To.
                    if ( _.has(item, 'end_date_ts') && self.isTimestamp(item.end_date_ts) ) {
                        endDate = item.end_date_ts
                    }

                    // Format.
                    return (yearsOnly) ?
                        moment.unix(startDate).format('YYYY') + ' - ' + (self.isTimestamp(item.end_date_ts) ? moment.unix(endDate).format('YYYY') : 'Current') :
                        self.formatAsYearsMonths(startDate, endDate) + ' from ' + self.formatDate(startDate, true) + ' - ' + self.formatDate(endDate, true);
                },
                fetchData(type)
                {
                    var self = this;
                    var type = type || null;
                    if ( _.isNull(type) ) return '';

                    self.fetch({
                        url     : '/api/' + type,
                        data    : {},
                        success : function(response){
                            var response = response || {};
                            if ( _.has(response, 'data.' + type) && _.isArray(response.data[type]) && !_.isEmpty(response.data[type]) ) {
                                self.setValue(self, type, response.data[type])
                            }
                        },
                        flag    : 'loading' + type
                    });
                },
                goLinkedIn()
                {
                    window.open('https://www.linkedin.com/in/davidseanmurray/', '_blank');
                },
            },
        mounted()
        {
            var self = this;

            // Ajax load.
            self.fetchData('positions');

            // JS Injection load.
            self.setValue(self, 'courses', (_.has(window, 'courses') ? _.clone(window.courses) : []));

            // Fire JQ plugins.
            $('.pie-chart').easyPieChart();
        }
    }
</script>
