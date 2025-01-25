const menuData = [
    {
      label: 'About Us',
      link: '/about-us',
      dropdown: [
        { label: 'Who We Are', link: '/who-we-are' },
        { label: 'Our Team', link: '/our-team' },
        { label: 'Careers', link: '/careers' }
      ]
    },
    {
      label: 'Our Programs',
      link: '/our-programs',
      dropdown:[
        {label:"Courses",link:'/courses'},
      ]
    },
    {
      label: 'Get Involved',
      link: '/get-involved',
      dropdown: [
        { label: 'Volunteering & Internships', link: '/get-involved/volunteering-internships' },
        { label: 'Corporate Partners', link: '/get-involved/corporate-partners' },
        { label: 'Careers', link: '/get-involved/careers' }
      ]
    },
    {
      label: 'Events & Blog',
      link: '/events-blog'
    },
    {
      label: 'Contact Us',
      link: '/contact-us'
    }
  ];
  
  export default menuData;
  