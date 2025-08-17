'use client'
import React, { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

import style from './blogs.module.scss'
import RearExtensions from './rearextensions/RearExtensions'
import StructuralCalculations from './structuralcalculations/StructuralCalculations'
import StructuralEngineerCalculations from './structuralengineeringcalculations/StuctualEngineeringCalculations'
import PlanningDrawingServices from './planningdrawingservices/PlanningDrawingServices'
import ProjectManagerConstruction from './projectmanagerconstruction/ProjectManagerConstruction'
import CommercialConstructionPlanning from './commercialconstructionplanning/CommercialConstructionPlanning'
import CommercialConstructionPlans from './commercialconstructionplan/CommercialConstructionPlan'
import BuildingComplianceServices from './buildingcomplianceservices/BuildingComplianceServices'
import IndependentBuildingInspectors from './independentBuildingInspectors/IndependentBuildingInspectors'
import CommercialArchitectureFirm from './commercialarchitecturefirm/CommercialArchitectureFirm'
import ExpertArchitecturalDesignServices from './expertarchitecturaldesign/ExpertArchitecturalDesign'
import ExploringCuttingEdgeStructuralEngineeringSolutions from './exploringcuttingedgeetructuralengineeringsolutions/ExploringCuttingEdgeStructuralEngineeringSolutions'
import ResidentialConstructionProjectManager from './residentialconstructionprojectmanager/ResidentialConstructionProjectManager'
import  MasteringResidentialConstructionProjectManagement from './masteringresidentialconstructionprojectmanagement/MasteringResidentialConstructionProjectManagement'
import PartyWallSurveyorCost from './partywallsurveyorcost/PartyWallSurveyorCost'
import ArchitectureDrawingPlans from './architecturedrawingplans/ArchitectureDrawingPlans'
import StructuralEngineerLondonServices from './structuralengineerlondonservices/StructuralEngineerLondonServices'
import PlanningAgentServices from './planningagentservices/PlanningAgentServices'
import RearExtensionsTransform from './rearextensionstransform/RearExtensionsTransform'
import PlanningBuildingControl from './A-Guide-to-Planning-and-Building-Control-in-Bromley-What-You-Need-to-Know/page'
import FindStructuralEngineer from './best-structural-engineer/page'
import StructuralDesignEngineerGuide from './Choosing-the-Right-Structural-Design-Engineer-in-Bromley-London-A-Guide/page'
import CostControlValueEngineering from './Cost-Control-vs-Value-Engineering-Understanding-the-Key-Differences/page'
import ConsultantEngineerCost from './Cost-of-Hiring-a-Consultant-Engineer-in-Bromley-What-to-Expect/page'
import StructuralEngineerGuide from './Finding-a-Reliable-Structural-Engineer-Near-Me-What-to-Look-For/page'
import StructuralEngineerGuideLondon from './Finding-the-Best-Structural-Engineer-in-London-A-Complete-Guide/page'
import ExtensionsGuide from './Front-and-Rear-Extension/page'
import StructuralEngineerNearMe from './How-a-Structural-Engineer-Near-Me-Can-Save-You-Time-and-Money/page'
import CostControlValueEngineer from './How-Cost-Control-and-Value-Engineering-Benefit-Construction-Projects-in-Bromley/page'
import StructuralEngineerCost from './How-Much-Does-a-Structural-Engineer-in-London-Cost/page'
import ArchitectEngineerCost from './How-Much-Does-an-Architect-Engineer-in-Bromley-Cost/page'
import StructuralSafety from './How-Structural-Engineers-in-London-Ensure-Safe-and-Sustainable-Buildings/page'
import HiringGuide from './Key-Factors-to-Consider-When-Hiring-a-Structural-Engineer-in-London/page'
import StructuralEngineerSigns from './Signs-That-You-Need-a-Structural-Engineer-Near-Me/page'
import EngineerVsArchitect from './Structural-Engineer-vs-Architect-in-London-Who-Do-You-Need/page'
import EngineeringChallenges from './Structural-Engineering-Challenges-and-Solutions-in-London/page'
import StructuralEngineerNear from './The-Benefits-of-Working-with-a-Structural-Engineer-Near-Me/page'
import FutureEngineering from './The-Future-of-Structural-Engineering-in-London-Trends-and-Innovations/page'
import StructuralEngineering from './The-Role-of-a-Structural-Engineer-in-London-Urban-Development/page'
import QuantitySurveying from './The-Role-of-Quantity-Surveying-in-Bromley-Growing-Construction-Industry/page'
import StructuralEngineerNeartop from './Top-Reasons-You-Need-a-Structural-Engineer-Near-Me-for-Your-Project/page'
import EngineeringConsultant from './What-Does-an-Engineering-Consultant-Do-A-Comprehensive-Guide/page'
import ArchitectSurveying from './What-Is-Architect-Surveying-a-Comprehensive-Guide/page'
import ContractorManagement from './What-Is-Contractor-Management-A-Complete-Guide-for-Businesses/page'
import PlanningBuilding from './What-Is-Planning-and-Building-Control-A-Complete-Guide-for-Homeowners/page'
import LocalEngineer from './Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters/page'
import LondonStructuralEngineer from './Why-You-Need-a-Structural-Engineer-in-London-for-Your-Construction-Project/page'
import EngineeringConsultantVsFullTimeEngineer from './Engineering-Consultant-vs-Full-Time-Engineer-Which-One-Do-You-Need/page'
import ArchitectEngineerBromley from './Finding-the-Best-Architect-Engineer-in-Bromley-A-Complete-Guide/page'
import FutureOfArchitecturalEngineeringBromley from './The-Future-of-Architectural-Engineering-in-Bromley/page'
import EngineeringConsultantsEfficiency from './How-Engineering-Consultants-Improve-Project-Efficiency-and-Cost-Savings/page'
import ChooseRightEngineeringConsultant from './How-to-Choose-the-Right-Engineering-Consultant-for-Your-Business/page'
import KeySkillsEngineeringConsultant from './Key-Skills-Every-Engineering-Consultant-Should-Have/page'
import RoleOfEngineeringConsultant from './The-Role-of-an-Engineering-Consultant-in-Construction-and-Design/page'
import ArchitecturalTrendsBromley from './Top-Architectural-Trends-Shaping-Bromleys-Skyline/page'
import HireEngineeringConsultant from './Top-Reasons-to-Hire-an-Engineering-Consultant-for-Your-Project/page'

const Blog = ({blog,title}) => {
  const router=useRouter()

  console.log('tilte',title)
  
  useLayoutEffect(()=>{
    if(!title){
      router.push('/')
    }
  },[])
  
  return (
    <div className={style.blogs_container}>
      
      {blog == "Top-Reasons-to-Hire-an-Engineering-Consultant-for-Your-Project" ? <HireEngineeringConsultant/> : ''}
      {blog == "Top-Architectural-Trends-Shaping-Bromleys-Skyline" ? <ArchitecturalTrendsBromley/> : ''}
      {blog == "The-Role-of-an-Engineering-Consultant-in-Construction-and-Design" ? <RoleOfEngineeringConsultant/> : ''}
      {blog == "Key-Skills-Every-Engineering-Consultant-Should-Have" ? <KeySkillsEngineeringConsultant/> : ''}
      {blog == "How-to-Choose-the-Right-Engineering-Consultant-for-Your-Business" ? <ChooseRightEngineeringConsultant/> : ''}
      {blog == "How-Engineering-Consultants-Improve-Project-Efficiency-and-Cost-Savings" ? <EngineeringConsultantsEfficiency/> : ''}
      {blog == "The-Future-of-Architectural-Engineering-in-Bromley" ? <FutureOfArchitecturalEngineeringBromley/> : ''}
      {blog == "Finding-the-Best-Architect-Engineer-in-Bromley-A-Complete-Guide" ? <ArchitectEngineerBromley /> : ''}
      {blog == "Engineering-Consultant-vs-Full-Time-Engineer-Which-One-Do-You-Need" ? <EngineeringConsultantVsFullTimeEngineer /> : ''}
      {blog == "Why-You-Need-a-Structural-Engineer-in-London-for-Your-Construction-Project" ? <LondonStructuralEngineer /> : ''}
      {blog == "Why-Hiring-a-Local-Structural-Engineer-Near-Me-Matters" ? <LocalEngineer /> : ''}
      {blog == "What-Is-Planning-and-Building-Control-A-Complete-Guide-for-Homeowners" ? <PlanningBuilding /> : ''}
      {blog == "What-Is-Contractor-Management-A-Complete-Guide-for-Businesses" ? <ContractorManagement /> : ''}
      {blog == "What-Is-Architect-Surveying-a-Comprehensive-Guide" ? <ArchitectSurveying /> : ''}
      {blog == "What-Does-an-Engineering-Consultant-Do-A-Comprehensive-Guide" ? <EngineeringConsultant /> : ''}
      {blog == "Top-Reasons-You-Need-a-Structural-Engineer-Near-Me-for-Your-Project" ? <StructuralEngineerNeartop /> : ''}
      {blog == "The-Role-of-Quantity-Surveying-in-Bromley-Growing-Construction-Industry" ? <QuantitySurveying /> : ''}
      {blog == "The-Role-of-a-Structural-Engineer-in-London-Urban-Development" ? <StructuralEngineering /> : ''}
      {blog == "The-Future-of-Structural-Engineering-in-London-Trends-and-Innovations" ? <FutureEngineering /> : ''}
      {blog == "The-Benefits-of-Working-with-a-Structural-Engineer-Near-Me" ? <StructuralEngineerNear /> : ''}
      {blog == "Structural-Engineering-Challenges-and-Solutions-in-London" ? <EngineeringChallenges /> : ''}
      {blog == "Structural-Engineer-vs-Architect-in-London-Who-Do-You-Need" ? <EngineerVsArchitect /> : ''}
      {blog == "Signs-That-You-Need-a-Structural-Engineer-Near-Me" ? <StructuralEngineerSigns /> : ''}
      {blog == "Key-Factors-to-Consider-When-Hiring-a-Structural-Engineer-in-London" ? <HiringGuide /> : ''}
      {blog == "How-Structural-Engineers-in-London-Ensure-Safe-and-Sustainable-Buildings" ? <StructuralSafety /> : ''}
      {blog == "How-Much-Does-an-Architect-Engineer-in-Bromley-Cost" ? <ArchitectEngineerCost /> : ''}
      {blog == "How-Much-Does-a-Structural-Engineer-in-London-Cost" ? <StructuralEngineerCost /> : ''}
      {blog == "How-Cost-Control-and-Value-Engineering-Benefit-Construction-Projects-in-Bromley" ? <CostControlValueEngineer /> : ''}
      {blog == "How-a-Structural-Engineer-Near-Me-Can-Save-You-Time-and-Money" ? <StructuralEngineerNearMe /> : ''}
      {blog == "Front-and-Rear-Extension" ? <ExtensionsGuide /> : ''}
      {blog == "Finding-the-Best-Structural-Engineer-in-London-A-Complete-Guide" ? <StructuralEngineerGuideLondon /> : ''}
      {blog == "Finding-a-Reliable-Structural-Engineer-Near-Me-What-to-Look-For" ? <StructuralEngineerGuide /> : ''}
      {blog == "structuralengineerlondonservices" ? <ConsultantEngineerCost /> : ''}
      {blog == "Cost-Control-vs-Value-Engineering-Understanding-the-Key-Differences" ? <CostControlValueEngineering /> : ''}
      {blog == "Choosing-the-Right-Structural-Design-Engineer-in-Bromley-London-A-Guide" ? <StructuralDesignEngineerGuide/> : ''}
    {blog == "How-to-Find-the-Best-Structural-Engineer-Near-Me-A-Complete-Guide"? <FindStructuralEngineer />:''} 
     {blog == "A-Guide-to-Planning-and-Building-Control-in-Bromley-What-You-Need-to-Know"? <PlanningBuildingControl />:''}
    {blog == "rear-extension-ideas-from-simplicity-to-architectural-ingenuity"? <RearExtensions />:''}
    {blog == "the-importance-of-structural-calculations-in-modern-construction-projects" ? <StructuralCalculations />:''}
    {blog == "structural-integrity-through-meticulous-structural-engineer-calculations-the-pepp-approach" ?<StructuralEngineerCalculations />:''}
    {blog == "how-planning-drawings-services-can-transform-your-architectural-vision-into-reality"  ?<PlanningDrawingServices />:""}
    {blog == "project-manager-construction-service-by-pearl-engineers-planners-and-project-managers-(PEPP)" ?<ProjectManagerConstruction />:""}
    {blog == "commercial-construction-planning-services-by-pearl-engineers-planners-and-project-managers-(PEPP)" ?<CommercialConstructionPlanning />:""}
    {blog == "commercial-construction-plans-by-pearl-engineers-planners-and-project-managers-(pepp)" ?<CommercialConstructionPlans />:""}
    {blog == "building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)" ?<BuildingComplianceServices />:""}
    {blog == "independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)" ?<IndependentBuildingInspectors />:""}
    {blog == "commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)" ?<CommercialArchitectureFirm />:""}
    {blog =='Expert-Architectural-Design-Services-Across-the-UK' ?<ExpertArchitecturalDesignServices />:''}
    {blog =='Exploring-Cutting-Edge-Structural-Engineering-Solutions-for-Complex-Projects' ?<ExploringCuttingEdgeStructuralEngineeringSolutions />:''}
    {blog =='How-a-Residential-Construction-Project-Manager-Ensures-Successful-Home-Building-Projects' ?<ResidentialConstructionProjectManager />:''}
    {blog =='Mastering-Residential-Construction-Project-Management-Essential-Strategies-for-Success'? <MasteringResidentialConstructionProjectManagement />:''}
    {blog == 'Party-Wall-Surveyor-Cost-by-Pearl-Engineers-Planners-and-Project-Manager-(PEPP)'?<PartyWallSurveyorCost />:''}
    {blog == 'Exploring-the-Importance-of-Architecture-Drawing-Plans-in-Modern-Design' ?<ArchitectureDrawingPlans />:''}
    {blog == 'Structural-Engineer-London-Services-Ensuring-Safety-and-Innovation-in-Your-Builds' ? <StructuralEngineerLondonServices />:''}
    {blog == 'Planning-Agent-Services-Explained-What-You-Need-to-Know-for-Effective-Project-Management' ? <PlanningAgentServices />:''}
    {blog == 'Rear-Extensions-Transform-Your-Space-with-Innovative-Design-Solutions' ?<RearExtensionsTransform />:''}

    </div>
  )
}

export default Blog