<div class="bg-image" style="background-image: url('/img/panoramic.jpg');">
    <div class="bg-black-50">
        <div class="block-content block-content-full ribbon ribbon-glass" :class="(root)? '' : 'ribbon-left'" data-aos="zoom-in"  data-aos-delay="150">
            <router-link to="/resume" v-if="root">
                <div class="ribbon-box font-size-sm text-uppercase">
                    <i class="fas fa-user-graduate mr-1" style="color: #f5b34f"></i>
                    <small class="font-w700">Resume</small>
                </div>
            </router-link>
            <router-link to="/" v-else>
                <div class="ribbon-box font-size-sm text-uppercase">
                    <i class="fas fa-file-alt mr-1" style="color: #f5b34f"></i>
                    <small class="font-w700">Covering Letter</small>
                </div>
            </router-link>
        </div>
        <div class="content content-full">
            <div class="py-4 row justify-content-center">
                <div class="col-6 col-sm-4 col-md-4 col-lg-2 text-center text-md-right pb-3 pb-m-0">
                    <img src="/img/me.jpg" class="img-avatar img-thumbnail img-fluid w-auto h-auto" alt="David Murray" data-aos="zoom-in" data-aos-delay="150">
                </div>
                <div class="col-sm-12 col-md-8 col-lg-9 col-xl-8 align-self-center text-center text-md-left">
                    <div class="d-inline-block">
                        <h1 class="display-3 m-0" style="letter-spacing: 10px !important;">
                            <div class="row">
                                <div class="col-md-12 col-lg-5"><h1 class="display-3 text-white font-w700 p-0 m-0" data-aos="fade-left" data-aos-delay="50">DAVID</h1></div>
                                <div class="col-md-12 col-lg-7 "><h1 class="display-3 text-gray font-w500 p-0 m-0" data-aos="fade-right" data-aos-delay="50">MURRAY</h1></div>
                            </div>
                        </h1>
                        <hr class="pb-2 mb-2 mt-0 faded-75">
                        <h5 class="text-warning text-uppercase font-italic ml-1 opacity-75 pt-sm-3 pt-md-4 pt-lg-0" style="margin-top: -12px !important;"  data-aos="fade"  data-aos-delay="150">
                            <small>Fullstack Developer</small>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>