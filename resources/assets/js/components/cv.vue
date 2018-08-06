<template>

    <q-page class="q-pa-xl">
        <q-card class="bg-white" style="max-width: 1000px">
            <q-card-media>
                <div class="row items-stretch" style="background: url('/header-bg/cv-header-bg.jpg') no-repeat; height:200px">
                    <div class="col-sm-2">&nbsp;</div>
                    <div class="col-sm-1">
                        <div class="text-center position-relative" style="height:65%; background-color: rgba(247,255,0, 0.75);">
                            <img style="left:0; right:0; position: absolute; bottom: 10px; margin:auto;" src="/full-stack-alt.png" alt="fullstack" width="60px" height="60px">
                        </div>
                    </div>
                    <div class="col-sm-6 q-pl-lg self-center text-white">
                        <div>
                            <span style="font-family: 'Montserrat'; font-weight: 400; font-size: 2em; letter-spacing: 3px">DAVID</span>
                            <span style="font-family: 'Montserrat'; font-weight: 800; font-size: 2em; letter-spacing: 3px; margin-left: 10px">MURRAY</span>
                        </div>
                        <div style="font-weight: 500; font-style: italic; font-size: 0.8em; letter-spacing: 1px; margin: 5px 0 0 5px ; opacity: 0.45">FULLSTACK DEVELOPER</div>
                    </div>
                    <div class="col-sm-3">&nbsp;</div>
                </div>
            </q-card-media>
            <q-card-main class="q-pa-none">
                <div class="row">
                    <div class="col-sm-4 q-pa-lg" style="background-color: rgb(69,166,245,0.05) ">
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">PERSONAL</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <template v-for="item in details.personal">
                                <div class="row">
                                    <div class="col-xs-5 text-weight-bold" v-text="item.title"></div>
                                    <div class="whitespace-text col-xs-7 text-grey-6" v-html="item.value"></div>
                                </div>
                                <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            </template>
                        </div>
                    </div>
                    <div class="col-sm-8 q-pa-lg">
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">PROFILE</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-sm-4 q-pa-lg" style="background-color: rgb(69,166,245,0.05) ">
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">CONTACT DETAILS</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <template v-for="item in details.contact">
                                <div class="row">
                                    <div class="col-xs-5 text-weight-bold" v-text="item.title"></div>
                                    <div class="whitespace-text col-xs-7 text-grey-6" v-html="item.value"></div>
                                </div>
                                <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            </template>

                            <div class="cv-title title-colour q-mt-xl q-pt-lg">REFERENCES</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <div class="whitespace-text col-xs-7 text-grey-6">Available on request</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>

                            <div class="cv-title title-colour q-mt-xl q-pt-lg">Links</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <div class="whitespace-text vertical-middle col-xs-7">
                                <div class="text-primary pointer" @click="goLinkedIn()">
                                    <q-btn class="no-shadow" size="sm" round color="primary" icon="fab fa-linkedin-in"></q-btn>
                                    davidseanmurray
                                </div>
                            </div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>

                        </div>
                    </div>
                    <div class="col-sm-8 q-pa-lg">

                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">WORK</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <q-timeline class="q-pl-md" color="secondary">

                                <q-timeline-entry
                                        title="Managing Member"
                                        subtitle="Current"
                                        side="right"
                                >
                                    <div>
                                        <div>
                                            <span class="text-grey-7 text-weight-bolder q-timeline-place">
                                                Lodgestaff.com &middot;
                                                <span class="text-grey-5">Cape Town, Western Cape, South Africa</span>
                                            </span>
                                        </div>
                                        <div class="q-mt-sm">
                                            <p>
                                                Lodgestaff.com was started as a side project with latent staff time while IT Director / 50% Owner at Clickthinking.com (now iProspect South Africa). The primary purpose of the site was to service the recruiting needs of the lodge industry in Africa, but rapidly grew into the favourite job board of the hospitality industry.
                                            </p>
                                            <p>
                                                I was initially responsible for the technical design and build of the job board and after taking it over full time in 2010 I have been responsible for the running of the business covering both technical management and general management.
                                            </p>
                                        </div>

                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry
                                        title="Event Title"
                                        subtitle="February 22, 1986"
                                        side="right"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry
                                        title="Event Title"
                                        subtitle="February 22, 1986"
                                        side="right"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </q-timeline-entry>

                                <q-timeline-entry
                                        title="Event Title"
                                        subtitle="February 22, 1986"
                                        side="right"
                                >
                                    <div>
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                </q-timeline-entry>


                            </q-timeline>
                        </div>

                    </div>

                </div>
            </q-card-main>
        </q-card>
    </q-page>

</template>

<script>
    export default {
        data()
        {
            return {
                details : {
                    personal : [
                        { title : 'Name', value : 'David Murray' },
                        { title : 'Nationality', value : 'South African' },
                        { title : 'Relationship', value : 'Married' },
                        { title : 'Birthday', value : '2 June 1972' },
                        { title : 'Languages', value : 'English, Afrikaans' },
                    ],
                    contact  : [
                        { title : 'Email', value : 'david.murray@ajarti.com' },
                        { title : 'Phone', value : '+27 (0)83 759 7724' },
                        { title : 'Skype', value : 'david.murray' },
                        { title : 'Address', value : '9 Regiment, Bellville<br/>Cape Town, 7530<br/>South Africa' },
                    ]
                }
            }
        },
        methods :
            {
                goLinkedIn(){
                    top.location.href = 'https://www.linkedin.com/in/davidseanmurray/';
                }
            },
        mounted()
        {
            console.log('Component mounted.')
        }
    }
</script>
