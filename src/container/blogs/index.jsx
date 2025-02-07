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