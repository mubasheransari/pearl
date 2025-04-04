import React from 'react'
import Blog from '@/container/blogs'

export const metadata = {
  title: '',
  description: '',
  alternates:{
    canonical: ""
  }
}

const titles= {
  
  'rear-extension-ideas-from-simplicity-to-architectural-ingenuity':'Rear Extension Ideas from Simplicity to Architectural Ingenuity',
  'the-importance-of-structural-calculations-in-modern-construction-projects':'The Importance of Structural Calculations in Modern Construction Projects',
  'structural-integrity-through-meticulous-structural-engineer-calculations-the-pepp-approach':'Structural Integrity through Meticulous Structural Engineer Calculations: The PEPP Approach',
  'how-planning-drawings-services-can-transform-your-architectural-vision-into-reality':'How Planning Drawings Services Can Transform Your Architectural Vision into Reality',
  'project-manager-construction-service-by-pearl-engineers-planners-and-project-managers-(PEPP)':'Project Manager Construction Services by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'commercial-construction-planning-services-by-pearl-engineers-planners-and-project-managers-(PEPP)':'Commercial Construction Planning Services by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'commercial-construction-plans-by-pearl-engineers-planners-and-project-managers-(pepp)':'Commercial Construction Plans by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)':'Building Compliance Services by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)':'Independent Building Inspectors by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)':'Commercial Architecture Firm Pearl Engineers, Planners, and Project Managers (PEPP)',
  'Expert-Architectural-Design-Services-Across-the-UK':'Expert Architectural Design Services Across the UK',
  'Exploring-Cutting-Edge-Structural-Engineering-Solutions-for-Complex-Projects':'Exploring Cutting-Edge Structural Engineering Solutions for Complex Projects',
  'How-a-Residential-Construction-Project-Manager-Ensures-Successful-Home-Building-Projects':'How a Residential Construction Project Manager Ensures Successful Home Building Projects?',
  'Mastering-Residential-Construction-Project-Management-Essential-Strategies-for-Success':'Mastering Residential Construction Project Management: Essential Strategies for Success',
  'Party-Wall-Surveyor-Cost-by-Pearl-Engineers-Planners-and-Project-Manager-(PEPP)':'Party Wall Surveyor Cost by Pearl Engineers, Planners, and Project Managers (PEPP)',
  'Exploring-the-Importance-of-Architecture-Drawing-Plans-in-Modern-Design':'Exploring the Importance of Architecture Drawing Plans in Modern Design',
  'Structural-Engineer-London-Services-Ensuring-Safety-and-Innovation-in-Your-Builds':'Structural Engineer London Services Ensuring Safety and Innovation in Your Builds',
  'Planning-Agent-Services-Explained-What-You-Need-to-Know-for-Effective-Project-Management':'Planning Agent Services Explained: What You Need to Know for Effective Project Management',
  'Rear-Extensions-Transform-Your-Space-with-Innovative-Design-Solutions':'Rear Extensions: Transform Your Space with Innovative Design Solutions',



  'structuralengineerlondonservices':'Cost of Hiring a Consultant Engineer in Bromley: What to Expect',
  'Cost-Control-vs-Value-Engineering-Understanding-the-Key-Differences':"Cost Control vs. Value Engineering: Understanding the Key Differences",
  'Choosing-the-Right-Structural-Design-Engineer-in-Bromley-London-A-Guide':'Choosing the Right Structural Design Engineer in Bromley, London: A Guide',
  'How-to-Find-the-Best-Structural-Engineer-Near-Me-A-Complete-Guide':'How to Find the Best Structural Engineer Near Me: A Complete Guide?',
  'A-Guide-to-Planning-and-Building-Control-in-Bromley-What-You-Need-to-Know':'A Guide to Planning and Building Control in Bromley: What You Need to Know',
  'Finding-a-Reliable-Structural-Engineer-Near-Me-What-to-Look-For':'Finding a Reliable Structural Engineer Near Me: What to Look For',
  'Finding-the-Best-Structural-Engineer-in-London-A-Complete-Guide':'Finding the Best Structural Engineer in London: A Complete Guide',
  'Front-and-Rear-Extension':"Front and Rear Extension: Maximizing Your Building's Space and Value",
  'How-a-Structural-Engineer-Near-Me-Can-Save-You-Time-and-Money':"How a Structural Engineer Near Me Can Save You Time and Money? | PEPP",
  'How-Cost-Control-and-Value-Engineering-Benefit-Construction-Projects-in-Bromley':"How Cost Control and Value Engineering Benefit Construction Projects in Bromley",
  'How-Much-Does-a-Structural-Engineer-in-London-Cost':'How Much Does a Structural Engineer in London Cost | PEPP',
  'How-Much-Does-an-Architect-Engineer-in-Bromley-Cost':'How Much Does an Architect Engineer in Bromley Cost? | PEPP',
  'How-Structural-Engineers-in-London-Ensure-Safe-and-Sustainable-Buildings':'How Structural Engineers in London Ensure Safe and Sustainable Buildings | PEPP',
  'Key-Factors-to-Consider-When-Hiring-a-Structural-Engineer-in-London':'Key Factors to Consider When Hiring a Structural Engineer in London | PEPP',
  'Signs-That-You-Need-a-Structural-Engineer-Near-Me':'Signs That You Need a Structural Engineer Near Me',
  'Structural-Engineer-vs-Architect-in-London-Who-Do-You-Need':'Structural Engineer vs. Architect in London: Who Do You Need',
  'Structural-Engineering-Challenges-and-Solutions-in-London':'Structural Engineering Challenges and Solutions in London',
  'The-Benefits-of-Working-with-a-Structural-Engineer-Near-Me':'The Benefits of Working with a Structural Engineer Near Me',
  'The-Future-of-Structural-Engineering-in-London-Trends-and-Innovations':'The Future of Structural Engineering in London Trends and Innovations',
  'The-Role-of-a-Structural-Engineer-in-London-Urban-Development':'The Role of a Structural Engineer in London Urban Development',
  'The-Role-of-Quantity-Surveying-in-Bromley-Growing-Construction-Industry':'The Role of Quantity Surveying in Bromley Growing Construction Industry',
  'Top-Reasons-You-Need-a-Structural-Engineer-Near-Me-for-Your-Project':'Top Reasons You Need a Structural Engineer Near Me for Your Project',
  'What-Does-an-Engineering-Consultant-Do-A-Comprehensive-Guide':'What Does an Engineering Consultant Do? A Comprehensive Guide',
  'What-Is-Contractor-Management-A-Complete-Guide-for-Businesses':'What Is Contractor Management? A Complete Guide for Businesses',
  'What-Is-Planning-and-Building-Control-A-Complete-Guide-for-Homeowners':'What Is Planning and Building Control A Complete Guide for Homeowners',
  'Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters':'Why Hiring a Local Structural Engineer Near Me Matters',
  'Why-You-Need-a-Structural-Engineer-in-London-for-Your-Construction-Project':'Why You Need a Structural Engineer in London for Your Construction Project',


}

const descriptions = {
  'Why-You-Need-a-Structural-Engineer-in-London-for-Your-Construction-Project':'Experienced structural engineer in London providing expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!',
  'Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters':'Find a trusted structural engineer near me for expert design, analysis, and compliance solutions for residential & commercial projects. Get a consultation today!',
  'What-Is-Planning-and-Building-Control-A-Complete-Guide-for-Homeowners':'Professional planning and building control services ensuring compliance, safety, and efficiency for residential & commercial projects. Get expert guidance today!',
  'What-Is-Contractor-Management-A-Complete-Guide-for-Businesses':'Expert contractor management services ensuring efficient project execution, cost control, and quality assurance for residential & commercial developments.',
  'What-Does-an-Engineering-Consultant-Do-A-Comprehensive-Guide':'Experienced engineering consultant providing expert solutions in design, analysis, and project management for residential & commercial developments. Contact us!',
  'Top-Reasons-You-Need-a-Structural-Engineer-Near-Me-for-Your-Project':'Looking for a trusted structural engineer near me? Get expert design, analysis, and compliance solutions for residential & commercial projects. Contact us now!',
  'The-Role-of-Quantity-Surveying-in-Bromley-Growing-Construction-Industry':'Professional quantity surveying in Bromley providing cost estimation, budgeting, and project management for residential & commercial developments. Contact us!',
  'The-Role-of-a-Structural-Engineer-in-London-Urban-Development':'Expert structural engineer in London providing safe, efficient, and compliant solutions for residential & commercial projects. Contact us for a consultation!',
  'The-Future-of-Structural-Engineering-in-London-Trends-and-Innovations':'Expert structural engineering services in London providing safe, efficient, and compliant solutions for residential & commercial projects. Contact us today!',
  'The-Benefits-of-Working-with-a-Structural-Engineer-Near-Me':'Find a reliable structural engineer near me for expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!',
  'Structural-Engineering-Challenges-and-Solutions-in-London':'Expert structural engineering services ensuring safe, efficient, and compliant designs for residential & commercial projects. Contact us for a consultation!',
  'Structural-Engineer-vs-Architect-in-London-Who-Do-You-Need':'Experienced structural engineer offering expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!',
  "Signs-That-You-Need-a-Structural-Engineer-Near-Me":"Find a trusted structural engineer near me for expert design, analysis, and compliance solutions for residential & commercial projects. Get a consultation today!",
  'Key-Factors-to-Consider-When-Hiring-a-Structural-Engineer-in-London':'Reliable structural engineer in London offering expert design, analysis, and compliance solutions for residential & commercial projects. Get in touch today!',
  'How-Structural-Engineers-in-London-Ensure-Safe-and-Sustainable-Buildings':'Experienced structural engineers in London providing reliable design, analysis, and compliance solutions for residential & commercial projects. Contact us now!',
  'How-Much-Does-an-Architect-Engineer-in-Bromley-Cost':'Expert architect engineer in Bromley offering innovative design, planning, and structural solutions for residential & commercial projects. Contact us today!',
  'How-Much-Does-a-Structural-Engineer-in-London-Cost':'Expert structural engineer in London providing safe, innovative, and compliant solutions for residential & commercial projects. Contact us for consultations!',
  "How-Cost-Control-and-Value-Engineering-Benefit-Construction-Projects-in-Bromley":"Optimize project budgets with expert cost control and value engineering services. Maximize efficiency, reduce costs, and enhance project value.",
  'How-a-Structural-Engineer-Near-Me-Can-Save-You-Time-and-Money':'Find a trusted structural engineer near you for expert design, analysis, and compliance solutions for residential and commercial projects. Contact us today!',
  "Front-and-Rear-Extension":'Enhance your home with a stylish and functional rear extension. Expert design, planning, and construction services to maximize space and add value.',
  "Finding-the-Best-Structural-Engineer-in-London-A-Complete-Guide":'Experienced structural engineer in London offering expert design, analysis, and compliance solutions for residential and commercial projects. Contact us today!',
  'Finding-a-Reliable-Structural-Engineer-Near-Me-What-to-Look-For':'Looking for a reliable structural engineer near you? Get expert solutions for safe, efficient, and compliant residential & commercial projects today!',
  'structuralengineerlondonservices':'Expert consultant engineer in Bromley, London, UK, providing innovative, cost-effective solutions for structural design, planning, and project management.',
  'Cost-Control-vs-Value-Engineering-Understanding-the-Key-Differences':'Expert planning and building control services ensuring compliance, safety, and efficiency for residential & commercial projects. Get professional guidance today!',
  'Choosing-the-Right-Structural-Design-Engineer-in-Bromley-London-A-Guide':'Experienced structural design engineer in Bromley offering expert solutions for residential & commercial projects. Ensuring safety, stability & compliance.',
  'How-to-Find-the-Best-Structural-Engineer-Near-Me-A-Complete-Guide':'Find a professional structural engineer near you for expert design, analysis, and compliance solutions for residential & commercial projects. Contact us today!',
  'A-Guide-to-Planning-and-Building-Control-in-Bromley-What-You-Need-to-Know':'Expert cost control and value engineering services to optimize budgets, reduce expenses, and enhance project value for maximum efficiency and success.',








  'rear-extension-ideas-from-simplicity-to-architectural-ingenuity':'Discover inspiring rear extension ideas to maximize space and style in your home with creative, functional designs. Perfect for any property!',
  'the-importance-of-structural-calculations-in-modern-construction-projects':'Get precise structural calculations for safe and efficient construction projects. Tailored solutions for residential, commercial, and industrial needs!',
  'structural-integrity-through-meticulous-structural-engineer-calculations-the-pepp-approach':'Accurate structural engineer calculations for safe and efficient construction. Tailored solutions for residential, commercial, and industrial projects.',
  'how-planning-drawings-services-can-transform-your-architectural-vision-into-reality':'Professional planning drawings tailored for your project. From concept to completion, ensure compliance and clarity with expert architectural designs!',
  'project-manager-construction-service-by-pearl-engineers-planners-and-project-managers-(PEPP)':'Experienced project manager for construction projects, ensuring timely delivery, budget control, and quality. Streamline your build with expert leadership!',
  'commercial-construction-planning-services-by-pearl-engineers-planners-and-project-managers-(PEPP)':'Efficient commercial construction planning services for seamless project execution. From design to completion, ensure compliance, cost control, and success!',
  'commercial-construction-plans-by-pearl-engineers-planners-and-project-managers-(pepp)':'Expert commercial construction plans tailored to your business needs. Ensure compliance, efficiency, and quality with detailed, professional designs.',
  'building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)':'Ensure safety and legal compliance with expert building compliance services. From inspections to certifications, we guarantee your project meets standards.',
  'independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)':'Certified independent building inspectors delivering thorough inspections and reports to ensure your property meets safety, quality, and compliance standards.',
  'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)':'Innovative commercial architecture firm delivering tailored designs to meet business needs. Enhance functionality, aesthetics, and sustainability with expertise.',
  'Expert-Architectural-Design-Services-Across-the-UK':'Expert Architectural Design Services Across the UK',
  'Exploring-Cutting-Edge-Structural-Engineering-Solutions-for-Complex-Projects ':'Reliable structural engineering solutions in the UK. Expert design, analysis & consultancy for safe, efficient, and sustainable building projects.',
  'How-a-Residential-Construction-Project-Manager-Ensures-Successful-Home-Building-Projects':'Experienced residential construction project manager ensuring efficient planning, budgeting & execution for high-quality, on-time, and on-budget builds.',
  'Mastering-Residential-Construction-Project-Management-Essential-Strategies-for-Success':'Professional residential construction project management ensuring seamless planning, budgeting & execution for high-quality, on-time, and within-budget builds.',
  'Party-Wall-Surveyor-Cost-by-Pearl-Engineers-Planners-and-Project-Manager-(PEPP)':'Get clear & competitive Party Wall Surveyor costs in the UK. Expert advice, compliance & hassle-free resolutions for your property projects',
  'Exploring-the-Importance-of-Architecture-Drawing-Plans-in-Modern-Design':'Professional architecture drawing plans for residential & commercial projects. Precise, detailed, and compliant designs tailored to your needs.',
  'Structural-Engineer-London-Services-Ensuring-Safety-and-Innovation-in-Your-Builds':'Expert structural engineer services in London. Reliable design, calculations & inspections for safe, efficient, and compliant building projects.',
  'Planning-Agent-Services-Explained-What-You-Need-to-Know-for-Effective-Project-Management':'Professional planning agent services for UK property projects. Expert guidance on planning applications, permissions & building regulations compliance.',
  'Rear-Extensions-Transform-Your-Space-with-Innovative-Design-Solutions':': Expert rear extension design & planning services. Maximize space & add value with bespoke, compliant, and high-quality home extensions in the UK',

}

const Page = ({params}) => {
    metadata.title = titles[params.blog]
    metadata.description  = descriptions[params.blog]
    metadata.alternates.canonical  = `https://pearlepp.co.uk/${params.blog}`

  return (
    <div>
      <Blog blog={params.blog} title={metadata.title} />
    </div>
  )
}

export default Page