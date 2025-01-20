 
export default async function () {
  const baseUrl = "https://pearlepp.co.uk";

  // Replace this with your logic to fetch pages (e.g., from a database or an API)
  return [
        {
          url: baseUrl,
          priority: 1,
        },
        
        {
        url: `${baseUrl}/form`,
          priority: 0.80,
        },
        {
          url: `${baseUrl}/about`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/architectural_services`,
         
          priority: 0.80,
        },
    {
          url: `${baseUrl}/structural_enigneering_services`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/planning_and_building_control_services`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/quantity_surverying`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/contracts_management`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/snagging_services`,
         
          priority: 0.80,
        },
    {
          url: `${baseUrl}/cost_control_value`,
         
          priority: 0.80,
        },
    {
          url: `${baseUrl}/contractor_management`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/quality_management`,
         
          priority: 0.80,
        },
    {
          url: `${baseUrl}/commercial_management`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/project_management`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/career`,
          priority: 0.80,
        },
    {
          url: `${baseUrl}/contact`,
          priority: 0.80,
        }
    
      ]
  

    }