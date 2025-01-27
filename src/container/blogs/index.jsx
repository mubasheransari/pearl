'use client'
import React, { useLayoutEffect } from 'react'
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
import { useRouter } from 'next/navigation'

const Blog = ({blog,description}) => {
  const router=useRouter()
  
  useLayoutEffect(()=>{
    if(!description){
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
    {blog== "building-compliance-services-by-pearl-engineers-planners-and-project-managers-(pepp)" ?<BuildingComplianceServices />:""}
    {blog == "independent-building-inspectors-by-pearl-engineers-planners-and-project-managers-(pepp)" ?<IndependentBuildingInspectors />:""}
    {blog== "commercial-architecture-firm-pear-engineers-planners-and-project-managers-(PEPP)" ?<CommercialArchitectureFirm />:""}

    </div>
  )
}

export default Blog