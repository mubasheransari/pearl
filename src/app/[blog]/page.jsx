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

}

const descriptions = {
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