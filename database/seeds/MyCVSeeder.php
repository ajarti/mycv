<?php use Illuminate\Database\Seeder;

class MyCVSeeder extends Seeder
{

    public $courses = [
        [
            'qualification' => 'ND Computer Data Processing',
            'institution'   => 'University of Johannesburg',
            'location'      => 'Johannesburg, South Africa',
            'start_date_at' => '1990-01-01',
            'end_date_at'   => '1994-12-30',
        ],
        [
            'qualification' => 'Matric with exemption',
            'institution'   => 'Lowveld High School',
            'location'      => 'Nelspruit, South Africa',
            'start_date_at' => '1985-01-01',
            'end_date_at'   => '1989-12-30',
        ]
    ];

    public $positions = [

        [
            'title'         => 'Managing Member',
            'company'       => 'Lodgestaff.com',
            'location'      => 'Cape Town, South Africa',
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
            'location'      => 'Cape Town, South Africa',
            'description'   => 'As managing member of Ajarti the current focus has been on internal projects from IoT developments to the current focus on SaaS development. I also provide occasional consulting services to select clients for online business strategy and technology selection.',
            'current'       => 1,
            'start_date_at' => '2009-02-01',
            'end_date_at'   => null,
        ],
        [
            'title'         => 'Co-founder & IT Director',
            'company'       => 'Clickthinking Online (iProspect South Africa)',
            'location'      => 'Cape Town, South Africa',
            'description'   => 'Co-founded Clickthinking with partner Peter Stewart and as IT Director was responsible for all technical aspects of the business from internal infrastructure, self managed US and UK dedicated full stack hosting and all systems design and build management of bespoke CMS\'s.',
            'current'       => 0,
            'start_date_at' => '1999-12-01',
            'end_date_at'   => '2009-02-28',
        ],
        [
            'title'         => 'Freelance Ecommerce Developer',
            'company'       => 'CC Africa (&Beyond)',
            'location'      => 'Cape Town, South Africa',
            'description'   => 'While contracting for &Beyond I was responsible for the design and build of various CMS\'s from bespoke 1st generation booking engines with ecommerce integration in the late 1990\'s to the first build of Go2Africa.com, which at that time, was a dynamic ASP engine that built this 10 000 page tourism authority hub.',
            'current'       => 0,
            'start_date_at' => '1998-01-01',
            'end_date_at'   => '1999-12-25',
        ],
        [
            'title'         => '3rd Line Server Support - Contract',
            'company'       => 'Merrill Lynch - London Head Office',
            'location'      => 'London, United Kingdom',
            'description'   => 'During this time I was contracted to manage a cluster of Windows NT servers (Compaq Prosignia servers) as well as provide 3rd Line Support to a user base of 3000. This involved making sure that the domain was secure and management of the active directory as well as mail integration with the various mail systems at the time, primarily Lotus Notes and Banyan Vines.',
            'current'       => 0,
            'start_date_at' => '1997-02-01',
            'end_date_at'   => '1997-11-30',
        ],
        [
            'title'         => '3rd Line Server Support - Contract',
            'company'       => 'Informix Software (IBM)',
            'location'      => 'London, United Kingdom',
            'description'   => 'This contract involved 3rd Line support, mainly server builds, config and management for the UK head office infrastructure as well as managing domain policies and system backup',
            'current'       => 0,
            'start_date_at' => '1996-06-01',
            'end_date_at'   => '1996-12-30',
        ],
        [
            'title'         => 'Systems Migration and Implementation Engineer - Contract',
            'company'       => 'Lord Advocates - St James - House of Commons',
            'location'      => 'London, United Kingdom',
            'description'   => 'The primary purpose of this contract was to migrate the Lord Advocates department from a Solaris based network to a fully managed policy driven NT Domain with transparent VPN to Scotland. This involved building the domain servers from bare metal, configuring the ISDN link to Scotland, building new workstations with full OS install and configure and finally migrating the users with content to the new servers. ',
            'current'       => 0,
            'start_date_at' => '1996-01-01',
            'end_date_at'   => '1996-04-30',
        ],
        [
            'title'         => 'Network Engineer',
            'company'       => 'University of Johannesburg',
            'location'      => 'Johannesburg, South Africa',
            'description'   => 'Having managed the student computer rooms (HP-UX based) from first year, the IT Department asked me to become a permanent employee in my second year and provide desktop support for the admin staff as well as support the various campuses student computer rooms.  During this time the focus was mainly on building and configuring BNC based computer rooms with 50 - 100 diskless workstations. The workstations booted from a central Novell Netware server. My responsibility also included the support of the administration\'s 200+ dumb terminals connected to a HP-UX (Emerald Super-mini) based system. I then progressed on to the networking team and assisted in the management of the distributed campus WAN, encompasing everything from fibre backbone links to the classroom LAN\'s.',
            'current'       => 0,
            'start_date_at' => '1991-01-01',
            'end_date_at'   => '1995-12-30',
        ],
    ];


    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

    }


}