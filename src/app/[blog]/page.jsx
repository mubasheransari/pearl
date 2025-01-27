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
  'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)':'Commercial Architecture Firm Pearl Engineers, Planners, and Project Managers (PEPP)'
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
  'commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)':'Innovative commercial architecture firm delivering tailored designs to meet business needs. Enhance functionality, aesthetics, and sustainability with expertise.'
}

const Page = ({params}) => {
    metadata.title = titles[params.blog]
    metadata.description  = descriptions[params.blog]
    metadata.alternates.canonical  = `https://pearlepp.co.uk/${params.blog}`

  return (
    <div>
      <Blog blog={params.blog} description={metadata.description} />
    </div>
  )
}

export default Page