<?php use Illuminate\Database\Seeder;

class MyCVSeeder extends Seeder
{

    public $positions = [

        [
            'title'         => 'Managing Member',
            'company'       => 'Lodgestaff.com',
            'location'      => 'Cape Town, Western Cape, South Africa',
            'description'   => 'Lodgestaff.com was started as a side project with latent staff time while IT Director / 50% Owner at Clickthinking.com (now iProspect South Africa). The primary purpose of the site was to service the recruiting needs of the lodge industry in Africa, but rapidly grew into the favourite job board of the hospitality industry. 
                  
                I was initially responsible for the technical design and build of the job board and after taking it over full time in 2010 I have been responsible for the running of the business covering both technical management and general management.
            ',
            'current'       => 1,
            'start_date_at' => '2006-03-01',
            'end_date_at'   => null,
        ],
        [
            'title'         => 'Founder',
            'company'       => 'Ajarti Systems Development',
            'location'      => 'Cape Town, Western Cape, South Africa',
            'description'   => 'As managing member of Ajarti the current focus has been on internal projects from IoT developments to the current focus on SaaS development. I also provide occasional consulting services to select clients for online business strategy and technology selection.',
            'current'       => 1,
            'start_date_at' => '2009-02-01',
            'end_date_at'   => null,
        ],
        [
            'title'         => 'Co-founder & IT Director',
            'company'       => 'Clickthinking Online (iProspect South Africa)',
            'location'      => 'Cape Town, Western Cape, South Africa',
            'description'   => 'Co-founded Clickthinking with partner Peter Stewart and as IT Director was responsible for all technical aspects of the business from internal infrastructure, self managed US and UK dedicated full stack hosting and all systems design and build management of bespoke CMS\'s.',
            'current'       => 0,
            'start_date_at' => '1999-12-01',
            'end_date_at'   => '2009-02-28',
        ],
    ];

//[
//'title'         => '',
//'company'       => '',
//'location'      => '',
//'description'   => '',
//'current'       => 0,
//'start_date_at' => '',
//'end_date_at'   => '',
//],


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    }


}