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
                    <div class="col-sm-4 q-pa-xl" style="background-color: rgb(69,166,245,0.05) ">
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">TO</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <div class="q-pt-sm text-weight-bold">BGBO Co</div>
                            <div class="q-pt-sm text-weight-light text-faded">Hiring Department</div>
                        </div>
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">POSITION</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <div class="q-pt-sm text-weight-light text-faded">Laravel Developer</div>
                        </div>
                        <div class="q-mb-xl">
                            <div class="cv-title title-colour">DATE</div>
                            <hr style="height:1px;border:none;color:#ccc;background-color:#ccc;"/>
                            <div class="q-pt-sm text-weight-light text-faded">5 August 2018</div>
                        </div>

                    </div>
                    <div class="col-sm-8 q-pa-lg">
                        <p>
                            Having been a nerd from an early age, I have 30+ years of experience (25 commercial) in all aspect of computing. During this time I have done everything from building computers/servers/clusters from bare metal, designing and constructing networks to WAN level and for the last 15 years full stack online development utilizing cutting edge backend/frontend frameworks.
                        </p>
                        <p>
                            Given my deep understanding of the the internet, it's core components and how it hangs together as well as having witnessed its evolution from 1990 (early access via Uninet), I have the ability to predict its trajectory with more certainty and thus select technologies and strategies that have a high probability of success.
                        </p>
                        <p>
                            I pride myself on avoiding fads and ensuring the correct strategy is selected, utilising the right tools that fit both the budget and fulfil the requirement( not the possibility ), yet still provide an upgrade path to scale.
                        </p>
                        <div>
                            <img src="signature.png" border="0" height="89" width="150">
                        </div>
                        <div class="q-mt-md q-mb-xs text-faded">Yours sincerely,</div>
                        <div class="text-weight-bold">David Murray</div>


                    </div>

                </div>
            </q-card-main>
        </q-card>
    </q-page>

</template>

<script>
    export default {
        mounted()
        {
            console.log('Component mounted.')
        }
    }
</script>
