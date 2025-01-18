 
export const GET = async () => {
  const baseUrl = "https://pearlepp.co.uk";

  // Replace this with your logic to fetch pages (e.g., from a database or an API)
  const pages = [
        {
          url: 'https://pearlepp.co.uk/',
          priority: 1,
        },
        {
          url: 'https://pearlepp.co.uk/form',
          priority: 0.80,
        },
        {
          url: 'https://pearlepp.co.uk/about',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/architectural_services',
         
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/structural_enigneering_services',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/planning_and_building_control_services',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/quantity_surverying',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/contracts_management',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/snagging_services',
         
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/cost_control_value',
         
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/contractor_management',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/quality_management',
         
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/commercial_management',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/project_management',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/career',
          priority: 0.80,
        },
    {
          url: 'https://pearlepp.co.uk/contact',
          priority: 0.80,
        },
    
      ]
  

  const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
              .map(
                  (page) => `
              <url>
                  <loc>${page.url}</loc>
                  <priority>${page.priority}</priority>
              </url>`
              )
              .join("")}
      </urlset>
  `.trim();

  return new Response(sitemap, {
      headers: {
          "Content-Type": "application/xml",
      },
  });
};
